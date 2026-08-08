import numbers from "../data/numbers.json";
import NUMBER_IMAGES from "../constants/numberImages";

export default {
  getNumbers() {
    return numbers.map((item) => ({
      ...item,
      image: NUMBER_IMAGES[item.image],
    }));
  },
};

