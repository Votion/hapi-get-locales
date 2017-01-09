'use strict';

const headerParser = require('accept-language-parser');
const packageJson = require('./package.json');

/**
 * @param {{code: string, region: string} locale
 * @return {string}
 */
function formatLocale(locale) {
  const region = locale.region ? `_${locale.region}` : '';
  return `${locale.code}${region}`;
}

/**
 * Parse the Accept-Language header into an array of locales
 * @param {string} request
 * @return {Array.<string>}
 */
function parseAcceptLanguage(request) {
  return headerParser
    .parse(request.headers['accept-language'])
    .map(formatLocale);
}

/**
 * Plugin
 * @param {Object} server
 * @param {Object} options
 * @param {function} next
 */
function hapiGetLocales(server, options, next) {
  server.ext('onPreHandler', (request, reply) => {
    const r = request;
    r.plugins.getLocales = parseAcceptLanguage(request);
    reply.continue();
  });

  next();
}

hapiGetLocales.attributes = {
  pkg: packageJson,
};

/**
 * Hapi plugin to help with getting tokens from a user in a browser
 *
 * @type {hapiBrowserTokenHelper}
 */
module.exports = hapiGetLocales;
