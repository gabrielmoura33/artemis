import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrgb6zj5LnNPoiKI2oBaWtsmXgGtdQn6s',
  authDomain: 'artemis-mobile-7905c.firebaseapp.com',
  projectId: 'artemis-mobile-7905c',
  storageBucket: 'artemis-mobile-7905c.appspot.com',
  messagingSenderId: '9861213415',
  appId: '1:9861213415:web:1532d06ec452d68558c642',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
