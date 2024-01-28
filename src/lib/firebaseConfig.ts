import firebase from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { getBytes, getStorage, ref, uploadBytes } from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth } from "firebase/auth";
import "firebase/firestore";
import GroupChat from "./GroupChat";

const firebaseConfig = {
    apiKey: "AIzaSyCF3z8DOz4uDQCrLFavQqJnoymSqT0E_xc",
    authDomain: "uofthacks-kgzb.firebaseapp.com",
    projectId: "uofthacks-kgzb",
    storageBucket: "uofthacks-kgzb.appspot.com",
    messagingSenderId: "402995133815",
    appId: "1:402995133815:web:7eeb0b6b4fc92ac64ef572",
    measurementId: "G-FT2908EN8N",
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
auth.useDeviceLanguage();
const provider: GoogleAuthProvider = new GoogleAuthProvider();

const db = getFirestore(app);
const storage = getStorage(app);

export async function getUserData(uid: string) {
    // users collection ("users") => user document (uid) => chats ("chats") => chat documents (get all of these)
    const userDocRef = doc(db, "users", uid);

    const chatsCollectionRef = collection(userDocRef, "chats");
    const chatsSnapshot = await getDocs(chatsCollectionRef);
    const chatsData = chatsSnapshot.docs.map((doc) => doc.data());

    // Example chatsData
    //   [
    //     {
    //         "storageRef": "chats/n1OaSb6I3OhgzeSIJZcVj2b0Nry1/Tzevet 2023 & ME 🧬👩‍🔬🌀",
    //         "name": "Tzevet 2023 & ME 🧬👩‍🔬🌀"
    //     }
    // ]

    // iterate over the array, for each fetch the storage bucket and get it from the storage
    const chatsDataWithBuckets = await Promise.all(
        chatsData.map(async (chat) => {
            const bucketRef = ref(storage, chat.storageRef);
            const bucketData = await getBytes(bucketRef);

            return {
                ...chat,
                bucketData,
            };
        })
    );

    // create GC with each:
    // const gc = GroupChat.fromExport<WhatsappGroup>(decoder.decode(content));
    const decoder = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true });
    const gcs = chatsDataWithBuckets.map((chat) => {
        return GroupChat.fromExport<WhatsappGroup>(decoder.decode(chat.bucketData));
    });

    return gcs;
}

export async function addChatData(uid: string, chatName: string, chatData: ArrayBuffer) {
    // users collection ("users") => user document (uid) => chats ("chats") => chat documents (get all of these)

    // upload chatData to storage
    const storageRef = ref(storage, `chats/${uid}/${chatName}`);

    const result = await uploadBytes(storageRef, chatData);

    // now add the chat bucket location to the user's chats
    const userDocRef = doc(db, "users", uid);

    // Check if the user document exists
    const userDocSnapshot = await getDoc(userDocRef);

    console.log("ok til here");

    if (!userDocSnapshot.exists()) {
        console.log("User document does not exist, creating it...");

        // Create the user document with an empty 'chats' subcollection
        await setDoc(userDocRef, {});

        console.log("User document created.");
    }

    // Reference to the "chats" subcollection
    const chatsCollectionRef = collection(userDocRef, "chats");

    // Add a new chat document to the "chats" subcollection
    const newChatDocRef = await addDoc(chatsCollectionRef, {
        name: chatName,
        storageRef: result.ref.fullPath,
    });
}

export { app, auth, provider, signInWithPopup };
