import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyCnYK6fAi6jiDBJivSYW7KwIB0bACEAORo",
  authDomain: "reactclientpanel-e0ea5.firebaseapp.com",
  databaseURL: "https://reactclientpanel-e0ea5.firebaseio.com",
  projectId: "reactclientpanel-e0ea5",
  storageBucket: "reactclientpanel-e0ea5.appspot.com",
  messagingSenderId: "507593269423"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instace
firebase.initializeApp(firebaseConfig);
//Init firestore
//const firestore = firebase.firestore();
// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rrfConfig) // firebase instance as first argument, rfConfig as optional second
)(createStore);

// Add Firebase to reducers
const rootReducer = combineReducers({
  firestore: firestoreReducer
});

//Create a initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
