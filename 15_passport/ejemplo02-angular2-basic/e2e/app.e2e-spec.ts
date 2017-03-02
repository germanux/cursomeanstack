import { Ejemplo02Angular2BasicPage } from './app.po';

describe('ejemplo02-angular2-basic App', function() {
  let page: Ejemplo02Angular2BasicPage;

  beforeEach(() => {
    page = new Ejemplo02Angular2BasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
