// importamos la funcion que vamos a testear
// eslint-disable-next-line import/named
import home from '../src/views/home';
import login from '../src/views/login';
import feed from '../src/views/feed';
import {
  signUpUser,
  loginUser,
  loginWithGoogle,
  validateUserSession,
} from '../src/lib/auth'; // auth.js

/* --------- home.js --------------*/
describe('home', () => {
  it('debería ser una función', () => {
    expect(typeof home).toBe('function');
  });
});

/* ---------login.js --------------*/
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

/* ---------login.js --------------*/
describe('feed', () => {
  it('debería ser una función', () => {
    expect(typeof feed).toBe('function');
  });
});

/* --------- auth.js --------------*/

describe('signUpUser', () => {
  it('debería ser una función', () => {
    expect(typeof signUpUser).toBe('function');
  });
});

describe('loginUser', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
});

describe('loginWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof loginWithGoogle).toBe('function');
  });
});

describe('validateUserSession', () => {
  it('debería ser una función', () => {
    expect(typeof validateUserSession).toBe('function');
  });
});
