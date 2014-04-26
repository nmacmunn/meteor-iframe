Package.describe({
  summary: "Detect when client is running in an iframe"
});

Package.on_use(function (api, where) {
  api.add_files('iframe.js', ['client']);
});

Package.on_test(function (api) {
  api.use('iframe');

  api.add_files('iframe_tests.js', ['client']);
});
