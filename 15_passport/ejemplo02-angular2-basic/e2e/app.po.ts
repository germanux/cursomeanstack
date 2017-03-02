import { browser, element, by } from 'protractor';

export class Ejemplo02Angular2BasicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
