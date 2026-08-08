import React from "react";

import CHAPTER_ILLUSTRATIONS from "../../constants/chapterIllustrations";

export default function ChapterIllustration({
  chapter,
  size = 90,
  color = "#2563EB",
}) {
  const Illustration = CHAPTER_ILLUSTRATIONS[chapter];

  if (!Illustration) {
    return null;
  }

  return <Illustration size={size} color={color} />;
}
