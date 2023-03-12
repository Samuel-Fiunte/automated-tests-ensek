describe('Buy Oil', () => {
  it('Buying Oil works', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');
    cy.xpath('/html/body/div[2]/div[2]/div[1]/p[2]/a').click();

    // Buy 20 units of Oil
    cy.xpath('/html/body/div[2]/div[1]/div[1]/table/tbody/tr[4]/td[4]/input').clear().type(20);
    cy.get('body > div.container.body-content > div.container.col-lg-12 > div.well.col-lg-9 > table > tbody > tr:nth-child(4) > td:nth-child(7) > input').click();
    cy.url().should('contain', 'https://ensekautomationcandidatetest.azurewebsites.net/Energy/SaleConfirmed');
    cy.get('body > div.container.body-content > h2').should('be.visible').contains('Sale Confirmed!');
    cy.get('body > div.container.body-content > div > div').should('be.visible').contains('20').contains ('0 units of Oil');
    cy.get('body > div.container.body-content > p:nth-child(4) > a').click();
    cy.xpath('/html/body/div[2]/div[1]/div[1]/table/tbody/tr[4]/td[4]').contains('Not Available');
    // post test
  cy.get('body > div.container.body-content > form > input').click();
  cy.xpath('/html/body/div[2]/div[1]/div[1]/table/tbody/tr[4]/td[4]/input').should('be.visible');
  });
});