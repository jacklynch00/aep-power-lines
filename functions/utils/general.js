const convertLink = (imageName) => {
  const nameSplit = imageName.split(" ");
  var newLink = "";
  if (nameSplit.length > 1) {
    for (var i in nameSplit) {
      if (i < nameSplit.length - 1) {
        newLink = newLink + nameSplit[i] + "_";
      } else {
        newLink += nameSplit[i];
      }
    }
  } else {
    newLink += nameSplit[0];
  }
  return newLink;
};

module.exports = {
  convertLink
};
