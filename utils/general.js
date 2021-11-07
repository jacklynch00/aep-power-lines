import {Badge} from "@chakra-ui/react";

export const convertLink = (imageName) => {
  const nameSplit = imageName.split(" ");
  const newLink = "";
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

export const getReviewStatus = (reviewStatus) => {
  switch (reviewStatus) {
    case "needs_review":
      return (
        <Badge variant="subtle" backgroundColor="red.600">
          Needs Reviewed
        </Badge>
      );
    case "in_review":
      return (
        <Badge variant="subtle" backgroundColor="yellow.300">
          In Review
        </Badge>
      );
    case "reviewed":
      return (
        <Badge variant="subtle" backgroundColor="green.500">
          Reviewed
        </Badge>
      );
    default:
      return;
  }
};
