export class Ng2rc1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2rc1-app h1')).getText();
  }
}
