import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

var firebaseConfig = {
    projectId: "my-app-b2e32",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);