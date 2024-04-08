//import { should } from "chai";

// cypress/pageObjects/PluginPage.js
class PluginPage {
    constructor() {
      this.menuPlugins = '#menu-plugins > .wp-has-submenu > .wp-menu-name';
      this.pageTitleAction = '.page-title-action';
      this.searchInput = '#search-plugins';
      this.installNowButton = '.plugin-card-everest-forms > .plugin-card-top > .action-links > .plugin-action-buttons > :nth-child(1) > .install-now';
      this.activateButton = '.plugin-card-everest-forms > .plugin-card-top > .action-links > .plugin-action-buttons > :nth-child(1) > .button';
      this.moreDetailsButton = '.plugin-card-everest-forms > .plugin-card-top > .action-links > .plugin-action-buttons > :nth-child(2) > .thickbox';
      //this.iFrame = '#TB_iframeContent';
      this.closeWindowButton = '#TB_closeWindowButton';
      //this.pluginList = '.the-list';
      //this.deleteButton = '.delete'; might use later
    }
  
    visit() {
      cy.get(this.menuPlugins).click();
      cy.url().should('contain','/wp-admin/plugins.php')
      
       }
  
    searchPlugin(pluginName) {
      cy.get(this.pageTitleAction).click();
      cy.wait(10000);
      cy.get(this.searchInput).type(pluginName);
      cy.wait(10000);
    }
  
    installPlugin() {
      cy.get(this.installNowButton).click();
      cy.wait(10000);
      cy.get(this.activateButton).click();
      cy.wait(10000);
      //assertion for installing Everest Form Plugin
      cy.url().should('contain','/plugin-install.php')

    }
    activePlugin() {
      cy.get(this.activateButton).click();
      cy.wait(10000);
      
    }
    openMoreDetails() {
      cy.get(this.moreDetailsButton).click();
      cy.wait(10000);
      cy.get('#TB_iframeContent').should('be.visible')
      cy.wait(10000)
      cy.get(this.closeWindowButton).click();
   
    }
   
  }
  export default PluginPage;


  