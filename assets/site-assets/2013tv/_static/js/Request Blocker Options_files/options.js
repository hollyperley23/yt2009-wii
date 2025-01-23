'use strict';

const default_data = {
  theme: 'device',
  urls: '',
};

const form = document.forms.options;
const refs = {};
for (const el of document.querySelectorAll('[data-ref]'))
  refs[el.dataset.ref] = el;

const fileloader = (() => {
  const input = document.createElement('input');
  let target;
  let onload;

  input.type = 'file';
  input.addEventListener('change', () => {
    const f = new FileReader();
    f.addEventListener('load', ev => {
      target.value = ev.target.result;
      onload();
    });
    f.readAsText(input.files[0]);
  });

  return {
    load(el, done) {
      target = el;
      onload = done;
      input.click();
    }
  };
})();

const exporter = (() => {
  const anchor = document.createElement('a');
  return {
    export(value, filename, type) {
      if (anchor.href)
        URL.revokeObjectURL(anchor.href);
      anchor.href = URL.createObjectURL(new Blob([value], {type: type}));
      anchor.download = filename;
      anchor.click();
    }
  };
})();

const filterlog_props = ['pattern', 'url', 'type', 'origin'];
let filterstats_queries = [];
let filterlog_queries = [];

function create_column(s) {
  const e = document.createElement('td');
  e.textContent = s;
  e.title = s;
  return e;
}

function format_time(t) {
  const ofs = new Date().getTimezoneOffset();
  return new Date(t - ofs*60000).toISOString().slice(11, -1);
}

function set_log_visibility(e) {
  const values = {
    pattern: e.childNodes[1].textContent,
    url: e.childNodes[2].textContent,
    type: e.childNodes[3].textContent,
    origin: e.childNodes[4].textContent
  };
  let found;
  for (const q of filterlog_queries) {
    found = !q.string.length ||
        (q.prop && values[q.prop].indexOf(q.string) > -1) ||
        (!q.prop && (
           values.pattern.indexOf(q.string) > -1 ||
           values.url.indexOf(q.string) > -1 ||
           values.type.indexOf(q.string) > -1 ||
           values.origin.indexOf(q.string) > -1));
    if (q.invert)
      found = !found;
    if (!found)
      break;
  }
  e.style.display =  found ? '' : 'none';
}

function set_stats_visibility(e) {
  const value = e.childNodes[1].textContent;
  let found;
  for (const q of filterstats_queries) {
    found = !q.string.length || value.indexOf(q.string) > -1;
    if (q.invert)
      found = !found;
    if (!found)
      break;
  }
  e.style.display =  found ? '' : 'none';
}

function update(msg) {
  refs.nblocked.textContent = msg.nblocked;
  refs.npatterns.textContent = msg.stats.length;
  if (msg.error_count)
    refs.error_top.textContent = 'Unexpected error occurred while registering the block list. Check the Browser Console.';
  else
    refs.error_top.textContent = '';

  refs.stats.textContent = '';
  const f = document.createDocumentFragment();
  for (const c of msg.stats.sort((a, b) => {return b[1] - a[1]})) {
    const tr = document.createElement('tr');
    tr.appendChild(create_column(c[1]));
    tr.appendChild(create_column(c[0]));
    f.appendChild(tr);
    set_stats_visibility(tr);
  }
  refs.stats.appendChild(f);

  if (!msg.logs) {
    refs.log.textContent = '';
    return;
  }

  for (const log of msg.logs) {
    if (refs.log.childNodes.length === msg.maxlog)
      refs.log.removeChild(refs.log.lastChild);
    const tr = document.createElement('tr');
    tr.appendChild(create_column(format_time(log[0])));
    tr.appendChild(create_column(log[1]));
    tr.appendChild(create_column(log[2]));
    tr.appendChild(create_column(log[3]));
    tr.appendChild(create_column(log[4]));
    set_log_visibility(tr);
    refs.log.insertBefore(tr, refs.log.childNodes[0]);
  }
}

function validate_block_list() {
  for (const item of parse_block_list(form.elements.urls.value)) {
    if (item.type && !validate_resource_type(item.type)) {
      refs.error.textContent = item.type + ': invalid resource type';
      return false;
    }
    if (!match_pattern_to_re(item.url)) {
      refs.error.textContent = item.url + ': invalid match pattern';
      return false;
    }
    if (!/^\*|https?:/i.test(item.url)) {
      refs.error.textContent = item.url + ': only http or https can be blocked';
      return false;
    }
  }
  refs.error.textContent = '';
  return true;
}

function parse_filter_query(s, props) {
  const queries = [];

  for (let arg of s.trim().split(/ +/)) {
    const query = {};

    if (arg.startsWith('-')) {
      arg = arg.slice(1);
      query.invert = true;
    } else
      query.invert = false;

    for (const p of props) {
      if (arg.startsWith(p + ':')) {
        query.prop = p;
        arg = arg.slice(p.length + 1);
        break;
      }
    }

    query.string = arg;
    queries.push(query);
  }

  return queries;
}

function filterlog() {
  filterlog_queries = parse_filter_query(form.elements.filterlog.value, filterlog_props);
  for (const e of refs.log.childNodes)
    set_log_visibility(e);
}

function filterstats() {
  filterstats_queries = parse_filter_query(form.elements.filterstats.value, []);
  for (const e of refs.stats.childNodes)
    set_stats_visibility(e);
}

const button_handlers = {
  load() {
    fileloader.load(form.elements.urls, () => {
      form.elements.save.disabled = false;
    });
  },
  export() {
    exporter.export(form.elements.urls.value, 'request-blocker.txt', 'text/plain');
  },
  save() {
    if (!validate_block_list())
      return;
    browser.storage.local.set({urls: form.elements.urls.value});
    form.elements.save.disabled = true;
  },
  resetfilterlog() {
    form.elements.filterlog.value = '';
    filterlog();
  },
  resetfilterstats() {
    form.elements.filterstats.value = '';
    filterstats();
  },
};

if (!location.hash) {
  const first = document.querySelector('[data-tab-target]');
  if (first)
    location.replace('#' + first.id);
}
document.addEventListener('mousedown', ev => {
  if (ev.button !== 0) return;
  if (ev.target.hasAttribute('data-tab-button')) {
    ev.preventDefault();
    location.hash = ev.target.hash;
  }
});

form.elements.save.disabled = true;

const port = browser.runtime.connect();
port.onMessage.addListener(update);

browser.storage.local.get(default_data).then(res => {
  theme.init('theme', res.theme);

  for (const key of Object.keys(default_data)) {
    const el = form.elements[key];
    if (!el) continue;
    if (el instanceof RadioNodeList)
      form.elements[key].value = res[key];
    else if (el.type === 'checkbox')
      el.checked = res[key];
    else if (el.type === 'textarea')
      el.value = res[key];
  }

  form.addEventListener('change', ev => {
    const key = ev.target.name;
    if (!Object.prototype.hasOwnProperty.call(default_data, key)) return;
    let val;
    if (ev.target.type === 'checkbox')
      val = ev.target.checked;
    else if (ev.target.type === 'radio')
      val = ev.target.value;
    else
      return;
    browser.storage.local.set({[key]: val});
  });

  document.addEventListener('click', ev => {
    if (ev.target.type === 'button')
      button_handlers[ev.target.name](ev.target);
  });

  validate_block_list();

  form.elements.urls.addEventListener('input', () => {
    form.elements.save.disabled = false;
  });
  form.elements.filterlog.addEventListener('input', filterlog);
  filterlog();
  form.elements.filterstats.addEventListener('input', filterstats);
  filterstats();
});
