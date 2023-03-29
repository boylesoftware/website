import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export function Text({ text }) {
	return <section>{renderRichText(text)}</section>;
}
