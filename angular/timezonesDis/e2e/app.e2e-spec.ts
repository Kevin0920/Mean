import { TimezonesDisPage } from './app.po';

describe('timezones-dis App', () => {
  let page: TimezonesDisPage;

  beforeEach(() => {
    page = new TimezonesDisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
