 import firebase from 'firebase';
 import 'firebase/firestore';
var config = {
    databaseURL: "https://travelguider-b9376.firebaseio.com",
    projectId : "travelguider-b9376",
    apiKey: "AIzaSyDb4v1es1xStlEBUYw4Ov-qLs7n0qjhIkc",
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export const db = firebase.firestore();
