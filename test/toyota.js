const toyotaSlct = require('../data/toyotaSelectors.json');
const toyotaExpd = require('../data/toyotaExpected.json');


describe( 'Default functionality', () => {
    before( 'BEFORE TEST', () => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.url('/');
    })

    it('Label is existing ', function () {
        const result = $(toyotaSlct.general.toyotaLabel).isExisting();
        expect(result).true;
    })

    it('Select Vehicle text is correct ', function () {
        const result = $(toyotaSlct.general.selectVehicle).getText();
        expect(result).toEqual(toyotaExpd.general.selectVehicleT);
    });
})