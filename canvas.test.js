const fs = require('fs');

describe('test canvas', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;

    beforeEach(() => {
        driver = new Builder()
            .forBrowser('opera')
            .build();
    });

    afterEach(() => {
        driver.quit();
    });

    it('draw', async () => {
        jest.setTimeout(1000 * 60 * 3)

        await driver.get('http://localhost:8080')
        const title = await driver.getTitle()
        expect(title).toEqual('Demos');

        await driver.actions()
            .move({ x: 100, y: 100 })
            .press()
            .move({ x: 500, y: 500 })
            .release()
            .perform()

        let image = await driver.takeScreenshot();
        fs.writeFileSync('out.png', image, 'base64');
    });
});