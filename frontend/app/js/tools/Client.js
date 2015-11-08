export default class Client {
  constructor() {
    this.url = 'http://webstdio.r15.railsrumble.com/';
    this.mockurl = 'mockdata/';
    this.mockdata = false;
    this.debug = true;
  }

  fetch(service) {
    var url = this.url + service;
    if (this.mockdata) {
      if (url.match('entries')) {
          url = this.mockurl + 'entries';
      } else {
          url = this.mockurl + 'feeds';
      }
    }
    this.log('fetch', url);
    return fetch(url)
              .then((response) => {
                this.log('fetch', 'complete');
                return response.json();
              }).catch(function(ex) {
                this.log('FETCH FAILED!', ex);
              });
  }

  log(msgA, msgB) {
    if (!this.debug) {
      return;
    }
    console.log('[Client]', msgA, msgB);
  }
}