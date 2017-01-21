module.exports = {
  'Demo Google search test using page objects' : function (client) {
    var homePage = client.page.googleExamplePages.homePage();
    homePage.navigate();
    homePage.expect.element('@searchBar').to.be.enabled;

    homePage
      .setValue('@searchBar', 'Nightwatch')
      .submit();

    var resultsPage = client.page.googleExamplePages.searchResultsPage();
    resultsPage.expect.element('@results').to.be.present.after(2000);
    resultsPage.expect.element('@results').to.contain.text('Nightwatch');
    resultsPage.expect.section('@menu').to.be.visible;

    var menuSection = resultsPage.section.menu;
    menuSection.expect.element('@web').to.be.visible;
    menuSection.expect.element('@video').to.be.visible;
    menuSection.expect.element('@images').to.be.visible;
    menuSection.expect.element('@shopping').to.be.visible;

    menuSection.productIsSelected('@web', function(result) {
      this.assert.ok(result, 'Web results are shown by default on search results page');
    });

    client.end();
  }
};