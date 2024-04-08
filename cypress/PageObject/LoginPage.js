
  class LoginPage
{
    txtusername='#user_login';
    txtpassword='#user_pass';
    btnsubmit='#wp-submit';
    url = 'Dashboard';
    
    visit() {
        cy.visit();
    }

    setUserName(username)
    {
        cy.get(this.txtusername).type(username);

    }
    setPassword(password)
    {
        cy.get(this.txtpassword).type(password), {log : false}; 
        
    }
    clickSubmit()
    {
        cy.get(this.btnsubmit).click();
    }

    verifyLogin()
    {
        
       cy.url().should('contains', '/wp-admin/'); //assertion
       
       
    }
}


  export default LoginPage;
  
  