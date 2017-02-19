import { browser, element, by } from 'protractor';

export class TenLiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ten-li-app h1')).getText();
  }
}
