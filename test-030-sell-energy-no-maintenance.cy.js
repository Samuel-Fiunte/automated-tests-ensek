// Because there is no functionality visible on this page and all we have is the Maintenance image I am creating a test to assert that the Maintenance image is NOT present
// this is a test designed to FAIL with the current state of the site, but done expecting that at some point this page would be fixed
describe('no maintenance image on sell energy page', () => {
  it('when accessing the sell energy page there is no maintenace image being displayed', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');
    cy.get('body > div.container.body-content > div.row > div:nth-child(2) > p:nth-child(3) > a').click();

    // Check if the maintenance image is NOT present
    cy.get('body > div.container.body-content > div > img').click()
    .get('img[src="/Content/Images/maintenance-1151312_960_720.png"]')
    .should('not.exist');
  });
});