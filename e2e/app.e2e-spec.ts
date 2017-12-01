import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "<Angular 5 Library Starter Kit>"', () => {
    expect(page.getTitleText()).toContain('<Angular 5 Library Starter Kit>');
  });
});
