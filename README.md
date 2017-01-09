# hapi-get-locales

```javascript
const getLocales = require('hapi-get-locales');
// ...
server.route({
  path: '/myroute',
  handler: function(request, reply) {
    const locales = request.plugins.getLocales;
    // ['en_US', 'en']
  }
});
```
