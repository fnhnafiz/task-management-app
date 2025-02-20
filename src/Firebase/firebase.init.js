// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ66VRhd2er9Z0QDxhrQfF-3KnAy7cqLk",
  authDomain: "task-management-app-364bd.firebaseapp.com",
  projectId: "task-management-app-364bd",
  storageBucket: "task-management-app-364bd.firebasestorage.app",
  messagingSenderId: "52209152950",
  appId: "1:52209152950:web:ede5a75ace2f659d8b4717",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
