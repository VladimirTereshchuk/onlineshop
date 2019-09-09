import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCXNFTrO_IdZLyh7q4Tl1MwgUUVF9XUFE",
  authDomain: "crown-clothing-db-5b260.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-5b260.firebaseio.com",
  projectId: "crown-clothing-db-5b260",
  storageBucket: "",
  messagingSenderId: "438593131788",
  appId: "1:438593131788:web:8857f2bae73557cc"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //   console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select-account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
