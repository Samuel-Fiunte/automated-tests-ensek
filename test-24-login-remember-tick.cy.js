// Because log in doesn't work the remember me functionality can't be tested E2E 
describe('Remember me works', () => {
  it('Remember me tick box can be ticked and unticked adequatedly', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click the Log in text in the the top menu
    cy.xpath('/html/body/div[1]/div/div[2]/ul[2]/li[2]/a').click();

    // tick and untick remember me box. 
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[3]/div/div/input[1]').click().should('be.checked');
    cy.xpath('/html/body/div[2]/div/div[1]/section/form/div[3]/div/div/input[1]').click().should('not.be.checked');
    // This is a false positive because the functionality doesn't seem to be correctly bound because nothing change on the HTML when clicking on the box
  });
});