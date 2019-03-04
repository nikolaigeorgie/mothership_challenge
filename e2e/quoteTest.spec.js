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
    await element(by.id('deliverToInput')).typeText('5193 Canoga Avenue');
    // make sure Hardware -> Keyboard -> Connect Hardware Keyboard
    // is deselected (or press ⇧⌘K). OR this will not work
    await element(by.id('AddressItem0')).tap();
  });
  it('hit next to quote screen', async () => {
    await element(by.id('navigationToQuoteButton')).tap();
  });
});
