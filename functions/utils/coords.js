const fs = require("fs");
const piexifjs = require("piexifjs");
const DMS2Decimal = require("dms-to-decimal");

const getBase64DataFromJpegFile = (filename) => {
  fs.readFileSync(filename).toString("binary");
};

const getExifFromJpegFile = (filename) => {
  piexifjs.load(getBase64DataFromJpegFile(filename));
};

const pullExifData = (exif) => {
  var lat, latRef, lng, lngRef, alt, altRef;
  for (const ifd in exif) {
    if (ifd == "thumbnail") {
    } else {
      for (const tag in exif[ifd]) {
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSLatitude")
          lat = exif[ifd][tag];
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSLatitudeRef")
          latRef = exif[ifd][tag];
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSLongitude")
          lng = exif[ifd][tag];
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSLongitudeRef")
          lngRef = exif[ifd][tag];
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSAltitude")
          alt = exif[ifd][tag];
        if (piexifjs.TAGS[ifd][tag]["name"] === "GPSAltitudeRef")
          altRef = exif[ifd][tag];
      }
    }
  }

  const latitude = DMS2Decimal.DMS2Decimal(
    lat[0][0],
    lat[1][0],
    lat[2][0] / lat[2][1],
    latRef
  );
  const longitude = DMS2Decimal.DMS2Decimal(
    lng[0][0],
    lng[1][0],
    lng[2][0] / lng[2][1],
    lngRef
  );
  const altitude = alt[0] / alt[1];
  return {
    latitude,
    longitude,
    altitude
  };
};

module.exports = {
  pullExifData
};
