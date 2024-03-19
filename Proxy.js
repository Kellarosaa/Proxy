const urlHandler = {
  get: function(target, prop) {
    if (prop === 'url') {
      return target[prop];
    }
    return `example.com/service/${target[prop]}`;
  }
};

const urlProxy = new Proxy({ url: '' }, urlHandler);

// Usage
urlProxy.url = 'new-url';
console.log(urlProxy.url); // Output: example.com/service/new-url

