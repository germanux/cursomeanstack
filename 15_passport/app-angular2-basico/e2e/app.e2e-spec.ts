import { AppAngular2BasicoPage } from './app.po';

describe('app-angular2-basico App', function() {
  let page: AppAngular2BasicoPage;

  beforeEach(() => {
    page = new AppAngular2BasicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
