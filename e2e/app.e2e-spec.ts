import { TenLiPage } from './app.po';

describe('ten-li App', function() {
  let page: TenLiPage;

  beforeEach(() => {
    page = new TenLiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
