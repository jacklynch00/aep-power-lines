import {getFirestore, collection, getDocs} from "@firebase/firestore";

const db = getFirestore();

export default async (req, res) => {
  const images = [];
  const snapshot = await getDocs(collection(db, "images"));
  snapshot.forEach((doc) => {
    images.push({id: doc.id, ...doc.data()});
  });
  res.status(200).json(images);
};
