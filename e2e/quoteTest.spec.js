describe('Create a quote', () => {
  it('Directions Screen Visible', async () => {
    await expect(element(by.id('directionsContainer'))).toBeVisible();
  });

  it('search from address', async () => {
    await element(by.id('pickUpFromInput')).tap();
    await element(by.id('pickUpFromInput')).typeText('4780 poe avenue');
    // make sure Hardware -> Keyboard -> Connect Hardware Keyboard
    // is deselected (or press ⇧⌘K). OR this will not work
    await element(by.id('AddressItem0')).tap();
  });

  it('search to address', async () => {
    await element(by.id('deliverToInput')).tap();
    await element(by.id('deliverToInput')).typeText('5193 canoga avenue');
    // make sure Hardware -> Keyboard -> Connect Hardware Keyboard
    // is deselected (or press ⇧⌘K). OR this will not work
    await element(by.id('AddressItem0')).tap();
  });
  it('hit next to quote screen', async () => {
    await element(by.id('navigationToQuoteButton')).tap();
  });
  it('generate quote', async () => {
    await element(by.id('weightInput')).tap();
    await element(by.id('weightInput')).typeText('3');

    await element(by.id('lengthInput')).tap();
    await element(by.id('lengthInput')).typeText('3');

    await element(by.id('widthInput')).tap();
    await element(by.id('widthInput')).typeText('3');

    await element(by.id('heightInput')).tap();
    await element(by.id('heightInput')).typeText('3');

    await element(by.id('quantityInput')).tap();
    await element(by.id('quantityInput')).typeText('20');
    await element(by.id('createQuoteButton')).tap();
  });
  it('save quote', async () => {
    await element(by.id('checkoutButton')).tap();
  });
});
