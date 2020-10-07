describe('google search', () => {
    it('should work', () => {
        cy.visit('http://www.google.com');
        cy.get('[name="q"]')
            .type('subscribe')
            .type('{enter}');
    });
});
