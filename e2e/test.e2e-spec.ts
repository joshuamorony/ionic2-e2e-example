import { browser, element, by, ElementFinder } from 'protractor';

describe('Example E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home tab is displayed by default', () => {

      expect(element(by.css('[aria-selected=true] .tab-button-text')) // Grab the title of the selected tab
        .getAttribute('innerHTML')) // Get the text content
        .toContain('Home'); // Check if it contains the text "Home"

  });

  it('the user can browse to the contact tab and view the ionic twitter handle', () => {

    // Click the 'About' tab
    element(by.css('[aria-controls=tabpanel-t0-2]')).click().then(() => { 

      // Wait for the page transition
      browser.driver.sleep(1000);

      expect(element(by.css('ion-list ion-item ion-label')) // Grab the label of the list item
        .getAttribute('innerHTML')) // Get the text content
        .toContain('@ionicframework'); // Check if it contains the text "@ionicframework"

    });

  });

});