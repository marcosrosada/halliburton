import { HalliburtonPage } from './app.po';

describe('halliburton App', () => {
  let page: HalliburtonPage;

  beforeEach(() => {
    page = new HalliburtonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
