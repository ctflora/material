import { browser, element, by } from 'protractor';

export class MaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('amt-root h1')).getText();
  }
}
