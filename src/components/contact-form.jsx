import React from 'react';

import * as styles from './contact-form.module.scss';

const ContactForm = () => {
	return (
		<section className={styles.contactForm}>
			<h2 className={styles.formHeading}>Let's work together</h2>
			-------- Get in touch
			<form name='contact' method='POST' data-netlify='true' action='/'>
				<input type='hidden' name='form-name' value='contact' />
				<div>
					<label id='nameLabel' for='name'>
						Name:
					</label>
					<input
						aria-labelledby='nameLabel'
						id='name'
						type='text'
						name='name'
					/>
				</div>

				<div>
					<label id='orgLabel' for='org'>
						Organization:
					</label>
					<input aria-labelledby='orgLabel' id='org' type='text' name='org' />
				</div>

				<div>
					<label id='emailLabel' for='email'>
						Email:
					</label>
					<input
						aria-labelledby='emailLabel'
						id='email'
						type='email'
						name='email'
					/>
				</div>
				<div>
					<label id='phoneLabel' for='phone'>
						Phone number:
					</label>
					<input
						aria-labelledby='phoneLabel'
						id='phone'
						type='tel'
						name='phone'
					/>
				</div>
				<div>
					<label id='msgLabel' for='msg'>
						Message:
					</label>
					<textarea aria-labelledby='msgLabel' id='msg' name='msg'></textarea>
				</div>
				<button type='submit'>Send</button>
			</form>
		</section>
	);
};

export default ContactForm;
