describe('find out more button has ensek.com', () => {
  it('the Found out more button has the href ensek.com on it', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Button should have the href www.ensek.com. Tried to build a click test but kept getting cross origin errors so I just asserted that the URL was in the button
    cy.get('body > div.container.body-content > div.jumbotron > p:nth-child(3) > a').should('have.attr', 'href', 'https://www.ensek.com');
  });
});
