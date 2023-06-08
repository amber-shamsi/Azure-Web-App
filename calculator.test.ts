import {sum} from './calculator'

describe ("Calculator tests", () => {
    test('adding 3+5 should return 8',() => {
        expect(sum(5,3)).toBe(8);
    })
})