import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' // Can only run on client

import * as firebaseSettings from '../firebase.json';

export default defineNuxtPlugin((NuxtApp) => {

  const {public : config} = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    databaseURL: config.firebaseDatabaseURL,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
  };


  const firebaseApp = initializeApp(firebaseConfig)

  //const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)

  NuxtApp.provide('firestore', firestore)
  //NuxtApp.provide('auth', auth)
})