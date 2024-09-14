import React from "react";

export function formatText(text) {
  if (!text) return null;

  const paragraphs = text.split("\n\n");

  return paragraphs.map((paragraph, index) => (
    <p key={index} className={index < paragraphs.length - 1 ? "mb-4" : ""}>
      {paragraph.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < paragraph.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
}
