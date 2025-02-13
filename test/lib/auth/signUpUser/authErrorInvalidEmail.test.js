import { signUpUser } from '../../../../src/lib/auth';

beforeEach(() => {
  jest.resetModules();
});

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: () =>
    // Retornamos un error con throw para causar que entre en el cath
    new Promise(() => {
      throw { code: 'auth/invalid-email' };
    }),
  getAuth: jest.fn(),
}));
/*
Realizamos el mock de la funcion alert
 */
global.alert = jest.fn();

describe('lib auth', () => {
  it('signUpUser error auth/invalid-email', () => {
    try {
      signUpUser();
    } catch (error) {
      expect(error).toBe('');
    }
  });
});
