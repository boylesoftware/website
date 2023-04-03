import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as styles from './text.module.scss';

export function Text({ text, cssClass }) {
	return <section className={styles[cssClass]}>{renderRichText(text)}</section>;
}
