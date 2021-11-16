import {getFirestore, collection, getDocs} from "@firebase/firestore";
import app from "@/lib/firebase";

const db = getFirestore(app);

export default async (_, res) => {
  const images = [];
  const snapshot = await getDocs(collection(db, "images"));
  snapshot.forEach((doc) => {
    images.push({id: doc.id, ...doc.data()});
  });
  res.status(200).json(images);
};
