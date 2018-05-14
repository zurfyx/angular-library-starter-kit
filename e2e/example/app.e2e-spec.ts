import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "<Angular 6 Library Starter Kit>"', () => {
    expect(page.getTitleText()).toContain('<Angular 6 Library Starter Kit>');
  });
});
