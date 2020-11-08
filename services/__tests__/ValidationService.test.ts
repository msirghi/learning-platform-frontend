import ValidationService from '../ValidationService';

describe('Validation service', () => {
  describe('isEmailValid', () => {
    it('should return false on invalid email', () => {
      expect(ValidationService.isEmailValid('invalid')).toBeFalsy();
    });

    it('should return true in valid email', () => {
      expect(ValidationService.isEmailValid('email@mail.com')).toBeTruthy();
    });
  });

  describe('isNameValid', () => {
    it('should return false on invalid name', () => {
      expect(ValidationService.isNameValid('123')).toBeFalsy();
    });

    it('should return true in valid name', () => {
      expect(ValidationService.isNameValid('John')).toBeTruthy();
    });
  });

  describe('checkPasswordStrength', () => {
    it('should return `Weak` on weak password', () => {
      expect(ValidationService.checkPasswordStrength('123')).toBe('Weak');
    });

    it('should return `Medium` on medium password', () => {
      expect(ValidationService.checkPasswordStrength('passwordQWE')).toBe('Medium');
    });

    it('should return `Strong` on strong password', () => {
      expect(ValidationService.checkPasswordStrength('passaQWE12@!')).toBe('Strong');
    });
  });

  it('should check if the password is weak', () => {
    expect(ValidationService.isPasswordWeak('pass')).toBeTruthy();
    expect(ValidationService.isPasswordWeak('password12')).toBeFalsy();
  });

  it('should check if the password is medium', () => {
    expect(ValidationService.isPasswordMedium('password12')).toBeTruthy();
    expect(ValidationService.isPasswordMedium('pass')).toBeFalsy();
  });

  it('should check if the password is strong', () => {
    expect(ValidationService.isPasswordStrong('passwordQWE12@!')).toBeTruthy();
    expect(ValidationService.isPasswordStrong('pass')).toBeFalsy();
  });
});
