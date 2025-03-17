describe("Test case for correct website viewing" , ()=>{
    it("Home page visit",()=>{
        cy.visit("https://www.demoblaze.com/");
        cy.get("#nava").invoke("text").should("include", "PRODUCT STORE");

    })
    it("Check the cart page is loaded correctly",()=>{
        // cy.intercept('GET', '**/cart.html', (req) => {
        //     req.reply((res) => {
        //       res.body = res.body.replace('PRODUCT', 'ABOUT US');
        //     });
        //   }).as('intercept');
        cy.visit("https://www.demoblaze.com/");
        cy.get("#cartur").click();
        cy.window().then((win) => {
            win.document.querySelector('.col-lg-8>h2').innerHTML = 'ABOUT STORE';
          });
        // cy.wait("@intercept");
        cy.get(".col-lg-8>h2").invoke("text").should("include","Products");
        // cy.screenshot();
    })
})