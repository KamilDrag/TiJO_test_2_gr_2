describe('app', function ()
{
    'use strict';

    var answers = window.app;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('alfa');
            expect(answers.returnOnlyLetter('k4m1ldr4g')).toBe('kmldrg');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
            expect(answers.returnOnlyLetter('19283746')).toBe('');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(false);
            expect(answers.returnOnlyLetter(3.14)).toEqual(false);
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
            expect(answers.alphabetOrder('dcba')).toBe('abcd');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
            expect(answers.alphabetOrder('Kam')).toBe('akm');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('aafl');
            expect(answers.alphabetOrder('Kam1')).toBe('akm');
        });
     });
});
