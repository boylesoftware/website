import React from 'react';
import * as styles from './testimonial.module.scss';

export function Testimonial({ name, company, quote }) {
	console.log(name);
	return <section className={styles.testimonial}>{quote.quote}</section>;
}
