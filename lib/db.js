import {getFirestore, doc, setDoc, arrayUnion} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

import {convertLink} from "@/utils/general";
import app from "./firebase";

const db = getFirestore(app);
const storage = getStorage(app);

export const createUser = async (uid, name, data) => {
  await setDoc(doc(db, "users", uid), {
    uid,
    name,
    ...data
  });
};

export const createImageReview = async (imageName, uid, annotations, note) => {
  const docRef = doc(db, "image_reviews", imageName);
  await setDoc(
    docRef,
    {
      [uid]: {
        imageName,
        uid,
        annotations: arrayUnion(...annotations),
        note,
        createdAt: new Date()
      }
    },
    {merge: true}
  );
};

const uploadImage = (image) => {
  const imageRef = ref(storage, `poles/${image.name}`);

  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // TODO: Can do somwething with progress information here
      },
      (error) => {
        console.log("Error when trying to upload the file");
        reject(error);
      },
      () => {
        console.log("FILE UPLOADED SUCCESFULLY");
        resolve(uploadTask);
      }
    );
  }).then((task) => {
    getDownloadURL(imageRef).then(async (url) => {
      const newFileName = convertLink(image.name);
      await setDoc(
        doc(db, "images", newFileName),
        {
          imageUrl: url,
          reviewStatus: "needs_review"
        },
        {merge: true}
      );
    });
  });
};

export const addImages = async (images = []) => {
  if (images.length > 0) {
    await Promise.all(images.map(uploadImage));
  }
};