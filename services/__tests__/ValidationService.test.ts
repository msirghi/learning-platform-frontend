import ValidationService from '../ValidationService';
import { expect, assert } from 'chai';

describe('Validation service', () => {
  describe('isEmailValid', () => {
    it('should return false on invalid email', () => {
      expect(ValidationService.isEmailValid('invalid')).to.be.false;
    });

    it('should return true in valid email', () => {
      expect(ValidationService.isEmailValid('email@mail.com')).to.be.true;
    });
  });

  describe('isNameValid', () => {
    it('should return false on invalid name', () => {
      expect(ValidationService.isNameValid('123')).to.be.false;
    });

    it('should return true in valid name', () => {
      expect(ValidationService.isNameValid('John')).to.be.true;
    });
  });

  describe('checkPasswordStrength', () => {
    it('should return `Weak` on weak password', () => {
      assert.equal(ValidationService.checkPasswordStrength('123'), 'Weak');
    });

    it('should return `Medium` on medium password', () => {
      assert.equal(ValidationService.checkPasswordStrength('passwordQWE'), 'Medium');
    });

    it('should return `Strong` on strong password', () => {
      assert.equal(ValidationService.checkPasswordStrength('passaQWE12@!'), 'Strong');
    });
  });

  it('should check if the password is weak', () => {
    expect(ValidationService.isPasswordWeak('pass')).to.be.true;
    expect(ValidationService.isPasswordWeak('password12')).not.to.be.true;
  });

  it('should check if the password is medium', () => {
    expect(ValidationService.isPasswordMedium('password12')).to.be.true;
    expect(ValidationService.isPasswordMedium('pass')).not.to.be.true;
  });

  it('should check if the password is strong', () => {
    expect(ValidationService.isPasswordStrong('passwordQWE12@!')).to.be.true;
    expect(ValidationService.isPasswordStrong('pass')).not.to.be.true;
  });
});
