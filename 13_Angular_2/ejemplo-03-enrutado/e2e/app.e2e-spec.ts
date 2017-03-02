import { Ejemplo03EnrutadoPage } from './app.po';

describe('ejemplo-03-enrutado App', function() {
  let page: Ejemplo03EnrutadoPage;

  beforeEach(() => {
    page = new Ejemplo03EnrutadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
