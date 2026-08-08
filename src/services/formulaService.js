import subjects from "../data/subjects.json";

import SUBJECT_ICONS from "../constants/subjectIcons";

// Chapters
import algebra from "../data/chapters/algebra.json";
import geometry from "../data/chapters/geometry.json";
import mensuration from "../data/chapters/mensuration.json";
import trigonometry from "../data/chapters/trigonometry.json";
import numberSystem from "../data/chapters/numberSystem.json";

// Algebra Formulas
import algebraicIdentities from "../data/formulas/algebra/algebraic-identities.json";
import quadraticEquations from "../data/formulas/algebra/quadratic-equations.json";
import indicesSurds from "../data/formulas/algebra/indices-surds.json";
import progressions from "../data/formulas/algebra/progressions.json";
import simplification from "../data/formulas/algebra/simplification.json";

// Geometry Formulas
import linesAngles from "../data/formulas/geometry/lines-angles.json";
import triangles from "../data/formulas/geometry/triangles.json";
import quadrilaterals from "../data/formulas/geometry/quadrilaterals.json";
import circles from "../data/formulas/geometry/circles.json";
import coordinateGeometry from "../data/formulas/geometry/coordinate-geometry.json";
import polygon from "../data/formulas/geometry/polygon.json";
import constructions from "../data/formulas/geometry/constructions.json";

// Mensuration Formulas
import planeFigures from "../data/formulas/mensuration/plane-figures.json";
import surfaceArea from "../data/formulas/mensuration/surface-area.json";
import volume from "../data/formulas/mensuration/volume.json";

// Trigonometry Formulas
import trigonometricRatios from "../data/formulas/trigonometry/trigonometric-ratios.json";
import trigonometricIdentities from "../data/formulas/trigonometry/trigonometric-identities.json";
import heightsDistances from "../data/formulas/trigonometry/heights-distances.json";
import properties from "../data/formulas/trigonometry/properties.json";

// Number System Formulas
import divisibilityRules from "../data/formulas/numberSystem/divisibility-rules.json";
import hcfLcm from "../data/formulas/numberSystem/hcf-lcm.json";
import primeNumbers from "../data/formulas/numberSystem/prime-numbers.json";
import factorsMultiples from "../data/formulas/numberSystem/factors-multiples.json";
import remainders from "../data/formulas/numberSystem/remainders.json";
import squaresCubes from "../data/formulas/numberSystem/squares-cubes.json";

// Chapter Lookup
const chapterMap = {
  algebra,
  geometry,
  mensuration,
  trigonometry,
  numberSystem,
};

// Formula Lookup
const formulaMap = {
  algebra: {
    "algebraic-identities": algebraicIdentities,
    "quadratic-equations": quadraticEquations,
    "indices-surds": indicesSurds,
    progressions,
    simplification,
  },

  geometry: {
    "lines-angles": linesAngles,
    triangles,
    quadrilaterals,
    circles,
    "coordinate-geometry": coordinateGeometry,
    polygon,
    constructions,
  },

  mensuration: {
    "plane-figures": planeFigures,
    "surface-area": surfaceArea,
    volume,
  },

  trigonometry: {
    "trigonometric-ratios": trigonometricRatios,
    "trigonometric-identities": trigonometricIdentities,
    "heights-distances": heightsDistances,
    properties,
  },

  numberSystem: {
    "divisibility-rules": divisibilityRules,
    "hcf-lcm": hcfLcm,
    "prime-numbers": primeNumbers,
    "factors-multiples": factorsMultiples,
    remainders,
    "squares-cubes": squaresCubes,
  },
};

// Formula Service
const formulaService = {
  // Subjects
  getSubjects() {
    return subjects.map((subject) => ({
      ...subject,
      homeIcon: SUBJECT_ICONS[subject.homeIcon],
      headerIcon: SUBJECT_ICONS[subject.headerIcon],
      chapterCount: this.getChapters(subject.chaptersFile).length,
      formulaCount: this.getFormulaCount(subject.id),
    }));
  },

  getSubject(subjectId) {
    return (
      this.getSubjects().find((subject) => subject.id === subjectId) || null
    );
  },

  // Chapters
  getChapters(subjectId) {
    return chapterMap[subjectId] || [];
  },

  // Formulas
  getFormulas(subjectId, chapterId) {
    return formulaMap[subjectId]?.[chapterId] || [];
  },

  getFormula(subjectId, chapterId, formulaId) {
    const formulas = this.getFormulas(subjectId, chapterId);
    return formulas.find((formula) => formula.id === formulaId) || null;
  },

  // Counts
  getChapterFormulaCount(subjectId, chapterId) {
    return this.getFormulas(subjectId, chapterId).length;
  },

  getFormulaCount(subjectId) {
    const chapters = formulaMap[subjectId];
    if (!chapters) return 0;
    return Object.values(chapters).reduce(
      (total, formulas) => total + formulas.length,
      0,
    );
  },

  // Search
  searchFormulas(query) {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return [];
    const results = [];
    Object.entries(formulaMap).forEach(([subjectId, chapters]) => {
      Object.entries(chapters).forEach(([chapterId, formulas]) => {
        formulas.forEach((formula) => {
          let score = 0;
          const title = (formula.title || "").toLowerCase();
          const formulaText = (formula.formula || "").toLowerCase();
          const category = (formula.category || "").toLowerCase();
          const shape = (formula.shape || "").toLowerCase();
          const shapeName = (formula.shapeName || "").toLowerCase();
          const description = (formula.description || "").toLowerCase();

          if (title.startsWith(keyword)) score += 100;
          else if (title.includes(keyword)) score += 90;
          if (formulaText.includes(keyword)) score += 80;
          if (shape.includes(keyword)) score += 70;
          if (shapeName.includes(keyword)) score += 70;
          if (category.includes(keyword)) score += 55;
          if (description.includes(keyword)) score += 40;

          // Variables
          if (formula.variables?.length) {
            formula.variables.forEach((variable) => {
              if (
                variable.symbol.toLowerCase().includes(keyword) ||
                variable.meaning.toLowerCase().includes(keyword)
              ) {
                score += 60;
              }
            });
          }

          if (score > 0) {
            results.push({
              ...formula,
              score,
              subjectId,
              chapterId,
              subject: this.getSubject(subjectId),
              chapter:
                this.getChapters(subjectId).find(
                  (chapter) => chapter.id === chapterId,
                ) || null,
            });
          }
        });
      });
    });

    return results.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.title.localeCompare(b.title);
    });
  },

  // Helpers
  hasSubject(subjectId) {
    return Object.hasOwn(chapterMap, subjectId);
  },

  hasChapter(subjectId, chapterId) {
    return Boolean(formulaMap[subjectId]?.[chapterId]);
  },

  getAllFormulas() {
    const formulas = [];
    Object.entries(formulaMap).forEach(([subjectId, chapters]) => {
      Object.entries(chapters).forEach(([chapterId, chapterFormulas]) => {
        chapterFormulas.forEach((formula) => {
          formulas.push({
            ...formula,
            subjectId,
            chapterId,
            subject: this.getSubject(subjectId),
            chapter:
              this.getChapters(subjectId).find((c) => c.id === chapterId) ||
              null,
          });
        });
      });
    });

    return formulas;
  },

  getPopularSearches() {
    return ["Area of Circle", "Quadratic Formula", "Distance Formula"];
  },
};

export default formulaService;
