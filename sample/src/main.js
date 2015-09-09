import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('aurelia-dialog');

  aurelia.start().then(a => a.setRoot());
}
