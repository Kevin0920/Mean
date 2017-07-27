import { RouteTestPage } from './app.po';

describe('route-test App', () => {
  let page: RouteTestPage;

  beforeEach(() => {
    page = new RouteTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
