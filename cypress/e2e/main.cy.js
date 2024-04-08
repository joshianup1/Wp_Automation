import LoginPage from "../PageObject/LoginPage";
import PluginPage from "../PageObject/PluginPage";

const username = Cypress.config('username');
const password = Cypress.config('password');

describe('Navigate to the WordPress login page and input the required credentials.', () => {
  const loginPage = new LoginPage();
  const pluginPage = new PluginPage();

  beforeEach(() => {
    // Logging in using cy.session() to ensure consistent state across tests but didn't work properly in this scenerio
   /* cy.session('login', () => {}); */ 
      cy.visit('/wp-login.php');
      cy.wait(1000);
      loginPage.setUserName(username);
      loginPage.setPassword(password); 
      loginPage.clickSubmit();
      cy.wait(1000); // Adjust wait time as needed
      loginPage.verifyLogin();
    
  });

  describe('Automate Plugin Installation and Activation Process ', () => {
    it('Automation Testing From PreLogin, Click , install and  Activate Everest Form Plugin', () => {
      pluginPage.visit();
      pluginPage.searchPlugin("Everest Forms");
      pluginPage.installPlugin();
      pluginPage.activePlugin();
      pluginPage.openMoreDetails();
      cy.wait(10000)
      cy.end()
    });
  });
});






// Didn't Find Following approach of testing more effecting in this scenerio

/*
  it('should navigate to the plugin page', () => {
    // Assuming pluginPage.visit() navigates to the plugin page
    pluginPage.visit();
    //cy.url().should('contain', '/wp-admin/plugins.php');
  });

  it('should display the search field', () => {
    // Assuming pluginPage.searchPlugin() checks for the visibility of the search field
    pluginPage.visit();
    pluginPage.searchPlugin("Everest Forms");
  });

  it('should install the plugin successfully', () => {
    pluginPage.visit();
    pluginPage.searchPlugin("Everest Forms");
    pluginPage.installPlugin();
    // Add assertion to verify installation
  });

  it('should activate the plugin successfully', () => {
    pluginPage.visit();
    pluginPage.searchPlugin("Everest Forms");
    pluginPage.installPlugin();
    pluginPage.activePlugin();
    // Add assertion to verify activation
  });

  it('should display more details about the plugin', () => {
    pluginPage.visit();
    pluginPage.searchPlugin("Everest Forms");
    pluginPage.installPlugin();
    pluginPage.activePlugin();
    pluginPage.openMoreDetails();
    // Add assertion to verify more details are displayed
  });

  // Add more tests as needed for additional actions
});
*/