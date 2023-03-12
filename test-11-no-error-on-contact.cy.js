// Because there is no functionality visible on this page and all we have is the error image I am creating a test to assert that the error image is NOT present
// this is a test designed to FAIL with the current state of the site, but done expecting that at some point this page would be fixed
describe('no error image on contact page', () => {
  it('when accessing the contact page there is no error image being displayed', () => {
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net');

    // Click on the Contact text and chain checking if the error image is NOT present
    cy.get('body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(3) > a').click()
    .get('img[src="/Content/Images/Error-message.jpg"]')
    .should('not.exist');
      });
    });