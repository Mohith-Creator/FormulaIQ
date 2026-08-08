import {
  RectangleSVG,
  SquareSVG,
  TriangleSVG,
  TriangleSidesSVG,
  CircleSVG,
  SectorSVG,
  SemicircleSVG,
  ParallelogramSVG,
  RhombusSVG,
  TrapeziumSVG,
  KiteSVG,
  CubeSVG,
  CuboidSVG,
  SphereSVG,
  CylinderSVG,
  ConeSVG,
  HemisphereSVG,
} from "../illustrations/shapes";

const SHAPE_ILLUSTRATIONS = {
  // 2D Shapes
  rectangle: RectangleSVG,
  square: SquareSVG,
  triangle: TriangleSVG,
  "triangle-sides": TriangleSidesSVG,
  circle: CircleSVG,
  sector: SectorSVG,
  semicircle: SemicircleSVG,
  parallelogram: ParallelogramSVG,
  rhombus: RhombusSVG,
  trapezium: TrapeziumSVG,
  kite: KiteSVG,

  // 3D Shapes
  cube: CubeSVG,
  cuboid: CuboidSVG,
  sphere: SphereSVG,
  cylinder: CylinderSVG,
  cone: ConeSVG,
  hemisphere: HemisphereSVG,
};

export default SHAPE_ILLUSTRATIONS;
