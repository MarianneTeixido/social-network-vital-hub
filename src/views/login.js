// file login finished
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.js';
import imgLogin from '../assets/img/hombre-entrenando-verde.png';

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const imageLogin = document.createElement('img');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonSignUp = document.createElement('button');
  const googleButton = document.createElement('button');

  inputEmail.placeholder = 'Write your email';
  inputEmail.type = 'email'; // Input para insertar email
  inputPass.placeholder = 'Password';
  inputPass.type = 'password'; // Contraseña no visible
  inputPass.pattern = '.{6,}'; // No acepta contraseñas de menos de 6 caracteres

  title.textContent = 'Log In';
  imageLogin.src = imgLogin;
  buttonLogin.textContent = 'Log In';
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault(); // Evita que se recargue la página web
    // eslint-disable-next-line max-len
    const email = inputEmail.value; // Toma los valores cuando se da click al botón de iniciar sesión
    const userPassword = inputPass.value;
    console.log(email, userPassword);

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, userPassword);
      console.log(userCredentials);
      navigateTo('/feed');
    } catch (error) {
      console.log(error.code);

      if (error.code === 'auth/wrong-password') {
        alert('Your password is wrong, please try again');
      } else if (error.code === 'auth/user-not-found') {
        alert('You are not signed up yet'); // Añadir botón de registro como mejorra
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email, please try again');
      } else if (error.code) {
        alert('Something went wrong, please try again');
      }
    }
  });

  buttonSignUp.textContent = 'Create an account';
  buttonSignUp.addEventListener('click', () => {
    navigateTo('/signup');
  });

  googleButton.textContent = 'Login with Google';
  googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
      navigateTo('/feed');
    } catch (error) {
      console.log(error.code);
    }
  });
  // buttonReturn.textContent = 'Back to home';
  // buttonReturn.addEventListener('click', () => {
  //   navigateTo('/');
  // });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, imageLogin, form, buttonSignUp, buttonReturn, googleButton);

  return section;
}

export default login;
