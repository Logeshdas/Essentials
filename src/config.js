import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyDveucKNpU-YUNukT79ViZGNUHB9m7k43c',
  authDomain: 'https://saver-mobile-app.firebaseio.com',
  databaseURL: 'https://saver-mobile-app.firebaseio.com',
  projectId: 'saver-mobile-app',
  storageBucket: 'saver-mobile-app.appspot.com',
  messagingSenderId: '108544742543'
};
let app = Firebase.initializeApp(config);
export const db = app.database();