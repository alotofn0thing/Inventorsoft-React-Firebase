import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBUDhi7SR0P3W9FtvGQ8UvpYejf6Hu5AuU',
	authDomain: 'todo-app-e2a34.firebaseapp.com',
	projectId: 'todo-app-e2a34',
	storageBucket: 'todo-app-e2a34.appspot.com',
	messagingSenderId: '192496296819',
	appId: '1:192496296819:web:f0f386f2c1fdbf1185db06',
	measurementId: 'G-JFPLQXHKRP',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
