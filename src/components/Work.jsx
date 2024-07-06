import ImageSlider from "./ImageSlider";

import Image1 from "../assets/images/zseles/1.jfif";
import Image2 from "../assets/images/zseles/2.jfif";
import Image3 from "../assets/images/zseles/3.jfif";
import Image4 from "../assets/images/zseles/4.jfif";
import Image5 from "../assets/images/zseles/5.jfif";
import Image6 from "../assets/images/zseles/6.jfif";
import Image7 from "../assets/images/zseles/7.jfif";
import Image8 from "../assets/images/zseles/8.jfif";
import Image9 from "../assets/images/zseles/9.jfif";
import Image10 from "../assets/images/zseles/10.jfif";

import Image11 from "../assets/images/porcelan/1.jfif";
import Image12 from "../assets/images/porcelan/2.jfif";
import Image13 from "../assets/images/porcelan/3.jfif";
import Image14 from "../assets/images/porcelan/4.jfif";
import Image15 from "../assets/images/porcelan/5.jfif";
import Image16 from "../assets/images/porcelan/6.jfif";
import Image17 from "../assets/images/porcelan/7.jfif";
import Image18 from "../assets/images/porcelan/8.jfif";
import Image19 from "../assets/images/porcelan/9.jfif";
import Image20 from "../assets/images/porcelan/10.jfif";

import Image21 from "../assets/images/akrilgel/1.jfif";
import Image22 from "../assets/images/akrilgel/2.jfif";
import Image23 from "../assets/images/akrilgel/3.jfif";
import Image24 from "../assets/images/akrilgel/4.jfif";
import Image25 from "../assets/images/akrilgel/5.jfif";
import Image26 from "../assets/images/akrilgel/6.jfif";
import Image27 from "../assets/images/akrilgel/7.jfif";
import Image28 from "../assets/images/akrilgel/8.jfif";
import Image29 from "../assets/images/akrilgel/9.jfif";
import Image30 from "../assets/images/akrilgel/10.jfif";

const slider1 = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const slider2 = [
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
];

const slider3 = [
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
];

const Work = () => {
  return (
    <div id="work">
      <h1 className="text-shadow text-3xl md:text-4xl lg:text-5xl text-center mb-10">
        Referencia munkáim:
      </h1>
      <p className="text-shadow text-xl md:text-2xl lg:text-3xl text-center mb-10">
        Itt megtalálhatod néhány elkészült munkámat.
      </p>
      <ImageSlider name="Zselés" images={slider1} />
      <ImageSlider name="Porcelán" images={slider2} />
      <ImageSlider name="Akrilgél" images={slider3} />
    </div>
  );
};

export default Work;
