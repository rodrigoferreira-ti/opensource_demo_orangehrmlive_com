
// Validação dos links de forma modular caso algum link mude eu altero apenas em um único local.
import link from '../../../cypress/fixtures/home_links.js';

/**
 * Verificação do conteúdo da home Page do site -> https://opensource-demo.orangehrmlive.com/
 */
describe('Abrindo o site OrangeHRM', () => {
  
  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });
  
  // Validando as urls e as ordems que elas estão sendo exibidas, caso ocorra alguma mudança de ordem o teste irá falhar.
  it('Checando os links das redes sociais', () => {
    const url = [link.linkedin, link.facebook, link.twitter, link.youtube];  
    cy.get('.orangehrm-login-footer-sm a').each((a, i) => {        
      cy.expect(a.prop('href')).to.equal(url[i]);
    });
  });

});
