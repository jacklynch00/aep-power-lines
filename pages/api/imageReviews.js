import {
  getFirestore,
  getDocs,
  doc,
  collection,
  query,
  where,
  getDoc
} from "@firebase/firestore";

const db = getFirestore();

export default async (req, res) => {
  const imageName = req.query.imageName;
  const uid = req.query.uid;

  // if (typeof uid !== "undefined") {
  // } else {
  // }

  const docRef = doc(db, "image_reviews", imageName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
  } else {
    console.log("No such document!");
    res.status(400).json({message: "Document for this file does not exist"});
  }
};
