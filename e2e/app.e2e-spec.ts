import { HomeDashPage } from './app.po';

describe('home-dash App', function() {
  let page: HomeDashPage;

  beforeEach(() => {
    page = new HomeDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
