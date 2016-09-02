'use strict';

const headerParser = require('accept-language-parser');

function getAcceptedLocales(request) {
    return headerParser.parse(request.headers['accept-language']).map(function(locale) {
        return locale.code + (locale.region ? '_' + locale.region : '');
    });
}

module.exports = getAcceptedLocales;
