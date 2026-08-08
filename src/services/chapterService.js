import algebra from "../data/chapters/algebra.json";
import geometry from "../data/chapters/geometry.json";
import mensuration from "../data/chapters/mensuration.json";
import trigonometry from "../data/chapters/trigonometry.json";
import numberSystem from "../data/chapters/numberSystem.json";

const chaptersMap = {
  algebra,
  geometry,
  mensuration,
  trigonometry,
  numberSystem,
};

export function getChapters(chaptersFile) {
  return chaptersMap[chaptersFile] || [];
}
