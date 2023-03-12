describe('find out more about us button has ensek.com/about', () => {
  it('the Found out more about us button has the href ensek.com/about on it', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    cy.get('body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(2) > a').click();
    // Button should have the href www.ensek.com/about. Tried to build a click test but kept getting cross origin errors so I just asserted that the URL was in the button
    cy.get('body > div.container.body-content > p:nth-child(8) > a').should('have.attr', 'href', 'https://www.ensek.com/about');
  });
});
