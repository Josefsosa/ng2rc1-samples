import { Ng2rc1Page } from './app.po';

describe('ng2rc1 App', function() {
  let page: Ng2rc1Page;

  beforeEach(() => {
    page = new Ng2rc1Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2rc1 works!');
  });
});
