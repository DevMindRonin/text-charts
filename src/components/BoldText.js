import React from 'react';

function highlightText(text, wordsToHighlight) {
  const entityChoosen = []
    wordsToHighlight.map((entity, index) => {
    return entityChoosen[index] = entity.entityId
  })

  const regex = new RegExp(`\\b(${entityChoosen.join('|')})\\b`, 'gi');
  const highlightedText = text.replace(regex, '<strong>$1</strong>');
  return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
}

const HighlightedText = ({text, wordsToHighlight}) => {
  return highlightText(text, wordsToHighlight);
};

export default HighlightedText;
