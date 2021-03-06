import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";
import { toast } from "react-toastify";

// helper method to convert firebase object to array
export function firebaseObjectToArray(snapshot) {
  if (snapshot) {
    return Object.entries(snapshot).map((e) =>
      Object.assign({}, e[1], { id: e[0] })
    );
  }
}

// sign in with email using firebase
export function signInWithEmail(creds) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

// password reset function using firebase
export function passwordReset(email) {
  return firebase.auth().sendPasswordResetEmail(email)  
}

// signout funciton to sign out from firebase
export function signOutFirebase() {
  return firebase.auth().signOut();
}

// register funciton to register new user on firebase
export async function registerInFirebase(creds) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);

    await result.user.updateProfile({
      displayName: creds.displayName,
    });

    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}

// social login
export async function socialLogin(selectedProvider) {
  let provider;

  if (selectedProvider === "facebook") {
    provider = new firebase.auth.FacebookAuthProvider();
  }

  if (selectedProvider === "google") {
    provider = new firebase.auth.GoogleAuthProvider();
  }

  try {
    const result = await firebase.auth().signInWithPopup(provider);

    // console.log(result.user);

    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = firebase.auth().currentUser;
  return user.updatePassword(creds.newPassword1);
}

// funciton to upload user image to firebase storage
export function uploadToFirebaseStorage(file, filename) {
  const user = firebase.auth().currentUser;
  const storageRef = firebase.storage().ref();
  return storageRef.child(`${user.uid}/user_images/${filename}`).put(file);
}

// funciton to upload news/inforamtion image to firebase storage
export function uploadNewsImageToFirebaseStorage(file, filename, newsId) {
  const storageRef = firebase.storage().ref();
  return storageRef.child(`${newsId}/news_images/${filename}`).put(file);
}

// deleting user photos from firebase storage
export function deleteFromFirebaseStorage(filename) {
  const userUid = firebase.auth().currentUser.uid;
  const storageRef = firebase.storage().ref();
  const photoRef = storageRef.child(`${userUid}/user_images/${filename}`);
  return photoRef.delete();
}

// deleting news/inforamtion photos from firebase storage
export function deleteNewsImageToFirebaseStorage(filename, newsId) {
  const storageRef = firebase.storage().ref();
  const photoRef = storageRef.child(`${newsId}/news_images/${filename}`);
  return photoRef.delete();
}

// chat services
// add chat function
export function addEventChatComment(eventId, values) {
  const user = firebase.auth().currentUser;
  const newComment = {
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
    text: values.comment,
    date: Date.now(),
    parentId: values.parentId,
  };

  return firebase.database().ref(`chat/${eventId}`).push(newComment);
}

// get events chat reference function
export function getEventChatRef(eventId) {
  //explicitly ordering data by key which is analogous to timestamp
  return firebase.database().ref(`chat/${eventId}`).orderByKey();
}

// get user feed reference for events function
export function getUserFeedRef() {
  const user = firebase.auth().currentUser;

  // get only last 10 posts
  return firebase
    .database()
    .ref(`posts/${user.uid}`)
    .orderByKey()
    .limitToLast(10);
}
