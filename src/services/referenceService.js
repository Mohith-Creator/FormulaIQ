import squares from "../data/references/squares.json";
import cubes from "../data/references/cubes.json";
import primeNumbers from "../data/references/primeNumbers.json";
import standardAngles from "../data/references/standardAngles.json";
import trigonometricValues from "../data/references/trigonometricValues.json";

const getSquares = () => squares;
const getCubes = () => cubes;
const getPrimeNumbers = () => primeNumbers;
const getStandardAngles = () => standardAngles;
const getTrigonometricValues = () => trigonometricValues;

export default {
  getSquares,
  getCubes,
  getPrimeNumbers,
  getStandardAngles,
  getTrigonometricValues,
};
