const general = require ('../data/selectors.json').general;
const values = require('./../data/expected.json');

describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });

    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(general.header).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', function () {
            const actual = $(general.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', function () {
            const actual = $(general.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(general.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Value Field', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length-1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Add counter', function () {
            const actual = $(general.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })
    });

    describe('Elements value', function () {

        it('TC-009 Header = Counter', function () {
            const actual = $(general.header).getText();
            expect(actual).toEqual(values.general.header);
        })

        it('TC-010 Total Result', function () {
            const actual = $(general.totalResult).getText();
            expect(actual).toEqual(values.general.totalResult);
        })

        it('TC-011 Add Name Field', function () {
            const actual = $(general.addNameField).getValue();
            expect(actual).toEqual(values.general.addNameField);
        })
        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(values.general.addNameFieldLabel);
        })

        it('TC-013  Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $(general.defaultValueField).getValue();
            expect(actual).toEqual(values.general.defaultValueField);
        })

        it('TC-014  Placeholder for Default Value Field Label', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.addNameFieldLabel).length-1].getText();
            expect(actual).toEqual(values.general.defaultValueFieldLabel);
        })
        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(general.addCounterBtn).getText();
            expect(actual).toEqual(values.general.addCounterBtn);
        })

    });



});