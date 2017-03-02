import { Ejemplo05Angular2JwpPage } from './app.po';

describe('ejemplo05-angular2-jwp App', function() {
  let page: Ejemplo05Angular2JwpPage;

  beforeEach(() => {
    page = new Ejemplo05Angular2JwpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
