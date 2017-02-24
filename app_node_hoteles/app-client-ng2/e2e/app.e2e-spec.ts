import { AppClientNg2Page } from './app.po';

describe('app-client-ng2 App', function() {
  let page: AppClientNg2Page;

  beforeEach(() => {
    page = new AppClientNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
