import { setDataAction } from './actions'

describe('Test actions.js', () => {
    describe('Test actions', () => {
        it('Set data action', () => {
            const expectedAction = {
                type: 'SET_DATA',
                data: { name: 'testName' }
            }
            expect(setDataAction(expectedAction.data)).toEqual(expectedAction)
        })
    })
});
