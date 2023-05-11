import React from 'react';
import { RichTextRenderer } from '../components/richtext-renderer';

import * as styles from './text.module.scss';

export function Text({ text, cssClass }) {
	return (
		<section className={styles[cssClass]}>
			<RichTextRenderer raw={text.raw} references={text.references} />
		</section>
	);
}
