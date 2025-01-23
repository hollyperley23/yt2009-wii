'use strict';

const valid_resource_types = new Set();
const invalid_resource_types = new Set();

// deno-lint-ignore no-unused-vars
function validate_resource_type(s) {
  if (valid_resource_types.has(s))
    return true;
  if (invalid_resource_types.has(s))
    return false;

  // test resource type
  const listener = () => {};
  try {
    browser.webRequest.onBeforeRequest.addListener(
        listener, {types: [s], urls: ['data:text/plain,']});
  } catch {
    invalid_resource_types.add(s);
    return false;
  }
  valid_resource_types.add(s);
  browser.webRequest.onBeforeRequest.removeListener(listener);
  return true;
}

// deno-lint-ignore no-unused-vars
function parse_block_list(s) {
  const ret = [];
  for (let line of s.split('\n')) {
    line = line.trim();
    if (!line || line.startsWith('#'))
      continue;
    const i = line.indexOf(' ');
    if (i > -1)
      ret.push({type: line.slice(0, i), url: line.slice(i).trim()});
    else
      ret.push({type: '', url: line});
  }
  return ret;
}

// ref: toolkit/components/extensions/MatchPattern.cpp

const _re_match_pattern_with_path =
  /^(\*|http|https|ws|wss|file|ftp):\/\/(\*|\*\.[^\*\/]+|[^\*\/]+|)\/(.*)$/i;
const _re_data_uri = /^data:(.*)$/i;

function _esc(s) {
  return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}

// deno-lint-ignore no-unused-vars
function match_pattern_to_re(pattern) {
  if (pattern === '<all_urls>')
    return /^(?:(?:http|https|ws|wss|file|ftp):\/\/)|data:/;

  let match = _re_match_pattern_with_path.exec(pattern);
  if (!match) {
    match = _re_data_uri.exec(pattern);
    if (match) {
      const val = match[1];
      return 'data:' + _esc(val).replace(/\\\*/g, '.*')
    }
    return null;
  }

  const [ , scheme, host, path ] = match;
  let repat = '^';
  repat += scheme === '*' ? '(?:http|https|ws|wss)' : _esc(scheme);
  repat += ':\\/\\/';
  repat += host === '*' ? '[^\\/]*' : _esc(host).replace(/^\\\*\\\./g, '(?:[^\\/]+)?');
  if (path)
    repat += path === '*' ? '(?:\\/.*)?' : '\\/' + _esc(path).replace(/\\\*/g, '.*');
  else
    repat += '\\/?';
  repat += '(?:#|$)';
  return new RegExp(repat);
}
