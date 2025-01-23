'use strict';

const theme = {
  init(key, val) {
    theme._darkmql = window.matchMedia('(prefers-color-scheme: dark)');
    theme._darkmql.addEventListener('change', () => theme.update(theme._current));
    theme.update(val);
    browser.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && key in changes)
        theme.update(changes[key].newValue);
    });
  },
  update(val) {
    theme._current = val;
    if (val === 'device')
      val = theme._darkmql.matches ? 'dark' : 'light';
    document.body.dataset.theme = val;
  }
};
