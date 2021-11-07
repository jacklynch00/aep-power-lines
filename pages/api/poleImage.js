import {getFirestore, getDoc, doc} from "@firebase/firestore";

const db = getFirestore();

export default async (req, res) => {
  const imageName = req.query.imageName;
  const docRef = doc(db, "images", imageName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
  } else {
    console.log("No such document!");
    res.status(400).json({message: "Document for this file does not exist"});
  }
};
