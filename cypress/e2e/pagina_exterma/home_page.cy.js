
// Validação dos links de forma modular caso algum link mude, eu altero apenas em um único local realzar a validação.
import link from '../../fixtures/home_links.js';

/**
 * Verificação dos links da home Page do site -> https://opensource-demo.orangehrmlive.com/
 */
describe('Acessando o site da OrangeHRM', () => {
  
  // Acessando a página.
  before(() => {cy.visit('/');});

  // Limpar a sessão depois de fazer os testes.
  after(() => {sessionStorage.clear();});

  it('Valida o link do Reset Password', () => {
    cy.get('.orangehrm-login-forgot').click();
    // Verifica se a URL mudou para a página de reset de senha
    cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
    // Volta para a página anterior para continuar os outros testes
    cy.go('back');
  });

  //Verificando a Url dos créditos do site.
  it('Valida a url dos créditos do site', () => {
    cy.get('p[data-v-7b563373] a').should('have.attr', 'href', `${link.creditos}`).and('have.attr', 'target', `_blank`);
  });
  
  // Validando as urls e as ordens que elas estão sendo exibidas, caso ocorra alguma mudança de ordem o teste irá falhar.
  it('Valida a url dos links das redes sociais', () => {
    const urls = [link.linkedin, link.facebook, link.twitter, link.youtube];
    cy.get('.orangehrm-login-footer-sm a').each((a, i) => {        
      cy.expect(a.prop('href')).to.equal(urls[i]);
    });
  });

});


