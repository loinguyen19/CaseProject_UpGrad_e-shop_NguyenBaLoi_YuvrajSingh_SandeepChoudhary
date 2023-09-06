import shoes1 from "../../assets/images/shoes1.jpg";
import shoes2 from "../../assets/images/shoes2.jpg";
import airpods from "../../assets/images/airpods.jpg";
import bose from "../../assets/images/bose.jpg";
import iphoneX from "../../assets/images/iphoneX.jpg";
import jeans from "../../assets/images/jeans.jpg";
import defaultImage from "../../assets/images/defaultImage.jpg";
export const fetchImage = (name) => {
  const imageMag = {
    'Nike 1': shoes1,
    'Nike 2': shoes2,
    "Iphone X": iphoneX,
    "Levis Jeans": jeans,
    "Bose Headset": bose,
    'Airpods': airpods,
    'defaultImage':defaultImage
  };
  return imageMag[name]

};
