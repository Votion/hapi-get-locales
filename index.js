'use strict';

const headerParser = require('accept-language-parser');

function formatLocale(locale) {
  const region = locale.region ? `_${locale.region}` : '';
  return `${locale.code}${region}`;
}

function getAcceptedLocales(request) {
  return headerParser
    .parse(request.headers['accept-language'])
    .map(formatLocale);
}

module.exports = getAcceptedLocales;
