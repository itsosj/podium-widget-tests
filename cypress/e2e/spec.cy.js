// Test data
const name = "Oscar"
const mobilePhone = "1234567890"
const message = "This is a test"
const zipCode = 46545 // zip input field is not updating

describe('Automate User Interaction With Webchat Widget', () => {
  beforeEach(() => {
    cy.visit('https://demo.podium.tools/qa-webchat-lorw/')
      .wait(5000)
  })
  it('Validate Form Is Empty', { tags: ['@regression'] }, () => {
    cy.get("#podium-bubble").its('0.contentDocument.body')
      .then(cy.wrap)
      .find("#podium-website-widget-button")
      .click()
    cy.get('#podium-modal').its('0.contentDocument.body')
      .then(cy.wrap)
      .find('input[name="Search Locations"]')
      .clear()
      .type(zipCode)
      .type('{enter}')
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find('.LocationsList').each(($ele) => {
        cy.wrap($ele).find('button').eq(1).click()
      })
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("#Name").clear().should('have.value', '')
    
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("input[id='Mobile Phone']").clear().should('have.value', '')
    
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("#Message").clear().should('have.value', '')
    })
  
  it('Click On Widget And Enter All Required Fields', { tags: ['@regression'] }, () => {
    cy.get("#podium-bubble").its('0.contentDocument.body')
      .then(cy.wrap)
      .find("#podium-website-widget-button")
      .click()
    cy.get('#podium-modal').its('0.contentDocument.body')
      .then(cy.wrap)
      .find('input[name="Search Locations"]')
      .clear()
      .type(zipCode)
      .type('{enter}')
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find('.LocationsList').each(($ele) => {
        cy.wrap($ele).find('button').eq(1).click()
      })
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("#Name").type(name)
    
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("input[id='Mobile Phone']").type(mobilePhone)
    
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find("#Message").clear().type(message)
    
  })

  it('Enter Zipcode Only', { tags: ['@smoke'] }, () => {
    cy.get("#podium-bubble").its('0.contentDocument.body')
      .then(cy.wrap)
      .find("#podium-website-widget-button")
      .click()
    cy.get('#podium-modal').its('0.contentDocument.body')
      .then(cy.wrap)
      .find('input[name="Search Locations"]')
      .clear()
      .type(zipCode)
      .type('{enter}')
      .should('be.visible')
  })

  it("Open/Close Chat", { tags: ['@smoke'] }, () => {
    cy.get("#podium-bubble").its('0.contentDocument.body')
      .then(cy.wrap)
      .find("#podium-website-widget-button")
      .click()
    cy.get('#podium-modal').its('0.contentDocument.body')
      .then(cy.wrap)
      .click()
  })

  it("Validate Store Chosen", { tags: ['@regression'] }, () => {
     cy.get("#podium-bubble").its('0.contentDocument.body')
      .then(cy.wrap)
      .find("#podium-website-widget-button")
      .click()
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find('.LocationsList').each(($ele) => {
        cy.wrap($ele).find('button').eq(1).click()
      })
    cy.get('#podium-modal').its('0.contentDocument.body')
      .find(".SendSmsPage__CurrentLocationName > h1").should('have.text', 'Scoreboard Sports - Narnia')
  })
})