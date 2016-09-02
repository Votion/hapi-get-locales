# hapi-get-locales

```javascript
const getLocales = require('hapi-get-locales');
// ...
server.route({
  path: '/myroute',
  handler: function(request, reply) {
    const locales = getLocales(request);
    // ['en_US', 'en']
  }
});
```
