import React from 'react';
import * as styles from './testimonial.module.scss';

export function Testimonial({ name, company, quote }) {
	return (
		<section className={styles.testimonial}>
			<div className={styles.quote}>"{quote.quote}"</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.company}>{company}</div>
		</section>
	);
}
