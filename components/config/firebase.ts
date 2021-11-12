import firebase from 'firebase/app';
import 'firebase/auth';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp({
    apiKey: publicRuntimeConfig.FIREBASE_API_KEY,
    authDomain: publicRuntimeConfig.FIREBASE_AUTH_DOMAIN,
    projectId: publicRuntimeConfig.FIREBASE_PROJECT_ID,
    storageBucket: publicRuntimeConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: publicRuntimeConfig.FIREBASE_APP_ID
  });
} else {
  app = firebase.app();
}

export const auth = app.auth;

export default app;
