const general = require ('../data/selectors.json').general;
const values = require('./../data/expected.json').general;
const selectorCnt = require ('../data/selectors.json').counter;

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
            expect(actual).toEqual(values.header);
        })

        it('TC-010 Total Result', function () {
            const actual = $(general.totalResult).getText();
            expect(actual).toEqual(values.totalResult);
        })

        it('TC-011 Add Name Field', function () {
            const actual = $(general.addNameField).getValue();
            expect(actual).toEqual(values.addNameField);
        })
        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(values.addNameFieldLabel);
        })

        it('TC-013  Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $(general.defaultValueField).getValue();
            expect(actual).toEqual(values.defaultValueField);
        })

        it('TC-014  Placeholder for Default Value Field Label = 50', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.addNameFieldLabel).length-1].getText();
            expect(actual).toEqual(values.defaultValueFieldLabel);
        })
        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(general.addCounterBtn).getText();
            expect(actual).toEqual(values.addCounterBtn);
        })

    });

    describe('Default Counter Elements exist', function () {
        it('TC-016 Counter Name', function () {
            const actual = $$(selectorCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-017 Count Value', function () {
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-018 LLF', function () {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-019 ULF', function () {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-020, TC-021 Default Sub and Add Buttons', function () {
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            const expected = 6;
            expect(actual).toEqual(expected);
        })
    });
});