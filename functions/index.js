const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const piexifjs = require("piexifjs");
const path = require("path");
const os = require("os");
const fs = require("fs");

const coords = require("./utils/coords.js");
const Tools = require("./utils/general.js");

exports.updateImageExifData = functions.storage
  .object()
  .onFinalize(async (object) => {
    const contentType = object.contentType;
    const fileBucket = object.bucket;
    const filePath = object.name;

    // Checks to make sure this is an image
    if (!contentType.startsWith("image/")) {
      return functions.logger.log("This is not an image.");
    }

    const fileName = path.basename(filePath);

    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);

    await bucket.file(filePath).download({destination: tempFilePath});

    // Run the image through the piexif program to retrieve the GPS data
    const exif = piexifjs.load(
      fs.readFileSync(tempFilePath).toString("binary")
    );
    const data = coords.pullExifData(exif);

    const newFileName = Tools.convertLink(fileName);

    // Store the latitude, longitude and altitude for the image in firestore
    await admin.firestore().collection("images").doc(newFileName).set(
      {
        latitude: data.latitude,
        longitude: data.longitude,
        altitude: data.altitude
      },
      {merge: true}
    );

    functions.logger.log(
      "Created/Updated image document with latitude, longitude and altitude data."
    );

    fs.unlinkSync(tempFilePath);
  });

// Handles the updating of the image review status
// Will update the status to "in_review" if there is between 0 and 10 reviews
// Will update the status to "reviewed" if there is more than 10 reviews
exports.updateReviewStatus = functions.firestore
  .document("image_reviews/{imageId}")
  .onWrite(async (change, context) => {
    // const data = change.after.data();
    // functions.logger.log(data[0]);
    // functions.logger.log(data[0].get("annotations"));

    functions.logger.log(change.after.data());
    functions.logger.log(change.after.ref.parent);

    // if (
    //   data.get("annotations").length > 0 &&
    //   data.get("annotations").length < 10
    // ) {
    //   functions.logger.log("Image is 'in_review'");
    //   await admin
    //     .firestore()
    //     .collection("images")
    //     .doc(change.after.data()["imageName"])
    //     .set(
    //       {
    //         reviewStatus: "in_review"
    //       },
    //       {merge: true}
    //     );
    // } else if (data.get("annotations").length > 10) {
    //   functions.logger.log("Image is 'reviewed'");
    //   await admin
    //     .firestore()
    //     .collection("images")
    //     .doc(change.after.data()["imageName"])
    //     .set(
    //       {
    //         reviewStatus: "reviewed"
    //       },
    //       {merge: true}
    //     );
    // }
  });
