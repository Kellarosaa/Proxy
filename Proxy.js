const urlHandler = {
  set: function(target, prop, value) {
    if (prop === 'url') {
      target[prop] = encodeURIComponent(value);
    }
  },
  get: function(target, prop) {
    if (prop === 'url') {
      return decodeURIComponent(target[prop]);
    }
    return `example.com/service/${target[prop]}`;
  }
};

const urlProxy = new Proxy({ url: '' }, urlHandler);

// Usage
urlProxy.url = 'special chars & symbols';
console.log(urlProxy.url); // Output: example.com/service/www.google.com
