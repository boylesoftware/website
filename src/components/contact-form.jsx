import React, { useEffect } from 'react';

import * as styles from './contact-form.module.scss';

const ContactForm = () => {
	// const msg = 'no';
	// const handleSubmit = () => {
	// 	msg = 'ja';
	// 	return msg;
	// };
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const url = window.location.href;
	// 	}
	// }, []);

	return (
		<section className={styles.contactForm}>
			<div className={styles.formHeading}>
				<h2>Let's work together</h2>
				<span>-------- Get in touch</span>
			</div>
			<form
				name='contact'
				method='POST'
				data-netlify='true'
				action='/thank-you'>
				<input type='hidden' name='form-name' value='contact' />
				<div className={styles.hiddenField}>
					<label for='bot-field' id='botField'>
						Don't fill this out if you're human:
						<input aria-labelledby='botField' name='bot-field' id='bot-field' />
					</label>
				</div>

				<div className={styles.formGroup}>
					<input
						aria-labelledby='nameLabel'
						id='name'
						type='text'
						name='name'
						required='required'
						placeholder=' '
					/>
					<label id='nameLabel' for='name' className={styles.placeholder}>
						Name
					</label>
				</div>
				<div className={styles.formGroup}>
					<input
						aria-labelledby='orgLabel'
						id='org'
						type='text'
						name='org'
						placeholder=' '
					/>
					<label id='orgLabel' for='org' className={styles.placeholder}>
						Organization
					</label>
				</div>
				<div className={styles.formGroup}>
					<input
						aria-labelledby='emailLabel'
						id='email'
						type='email'
						placeholder=' '
						name='email'
						required='required'
					/>
					<label id='emailLabel' for='email' className={styles.placeholder}>
						Email address
					</label>
				</div>
				<div className={styles.formGroup}>
					<input
						aria-labelledby='phoneLabel'
						id='phone'
						type='tel'
						name='phone'
						placeholder=' '
					/>
					<label id='phoneLabel' for='phone' className={styles.placeholder}>
						Phone number
					</label>
				</div>
				<div className={styles.msg}>
					<label id='msgLabel' for='msg'>
						Message
					</label>
					<textarea aria-labelledby='msgLabel' id='msg' name='msg'></textarea>
				</div>
				<button type='submit' className={styles.submit}>
					Submit
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
