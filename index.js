const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to nehalist.io and check the title', async () => {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        expect(title).to.equal('Google');
    });

    after(async () => driver.quit());
});