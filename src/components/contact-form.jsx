import React from 'react';

import * as styles from './contact-form.module.scss';

const ContactForm = () => {
	return (
		<section className={styles.contactForm}>
			<div className={styles.formHeading}>
				<h2>Let's work together</h2>
				<span>-------- Get in touch</span>
			</div>
			<form name='contact' method='POST' data-netlify='true' action='/'>
				<input type='hidden' name='contact' value='contact' />

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
					<input id='email' type='email' placeholder=' ' required='required' />
					<label for='email' className={styles.placeholder}>
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
					<label id='msgLabel' for='msg' className={styles.msgLabel}>
						Message
					</label>
					<textarea aria-labelledby='msgLabel' id='msg' name='msg'></textarea>
				</div>
				<button type='submit' className={styles.submit}>
					Submit
				</button>
			</form>
			{/* <form name='contact' method='POST' data-netlify='true' action='/'>
				<input type='hidden' name='form-name' value='contact' />
				<div className={styles.formGroup}>
					<input
						aria-labelledby='nameLabel'
						id='name'
						type='text'
						name='name'
						required='required'
					/>
					<label id='nameLabel' for='name'>
						Name:
					</label>
				</div>

				<div className={styles.formGroup}>
					<input aria-labelledby='orgLabel' id='org' type='text' name='org' />
					<label id='orgLabel' for='org'>
						Organization:
					</label>
				</div>

				<div className={styles.formGroup}>
					<input
						aria-labelledby='emailLabel'
						id='email'
						type='email'
						name='email'
						required='required'
					/>
					<label id='emailLabel' for='email'>
						Email:
					</label>
				</div>
				<div className={styles.formGroup}>
					<input
						aria-labelledby='phoneLabel'
						id='phone'
						type='tel'
						name='phone'
					/>
					<label id='phoneLabel' for='phone'>
						Phone number:
					</label>
				</div>
				<div>
					<label id='msgLabel' for='msg'>
						Message:
					</label>
					<textarea aria-labelledby='msgLabel' id='msg' name='msg'></textarea>
				</div>
				<button type='submit'>Send</button>
			</form> */}
		</section>
	);
};

export default ContactForm;
