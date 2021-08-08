const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('github', () => {
        it('this.github should equal the github argument', () => {
            const github = 'bobaFett';

            const newEngineer = new Engineer('Jeff', '1', 'whatever@whatever.com', github);

            expect(newEngineer.github).toEqual(github);
        })
    })
    describe('getGithub()', () => {
        it('should return the argument passes as github', () => {
            const github = 'bobaFett';

            const newEngineer = new Engineer('Jeff', '1', 'whatever@whatever.com', github);

            expect(newEngineer.getGitHub()).toEqual(github);
        })
    })
    describe('getRole()', () => {
        it('should return the string Engineer', () => {
            const newEngineer = new Engineer('Jeff', '1', 'whatever@whatever.com', 'bobaFett');

            expect(newEngineer.getRole()).toEqual('Engineer');
        })
    })
})