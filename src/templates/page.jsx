import React from 'react';
import { graphql } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';

import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

import * as styles from './page.module.scss';

function PageTemplate({ data: { contentfulPage } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}></div>
				<h1>{contentfulPage.title}</h1>
			</div>
			{contentfulPage.intro ? renderRichText(contentfulPage.intro) : null}
			{contentfulPage.content?.map((section) => (
				<section key={section.id} className={section.cssClass}>
					<ContainerFactory content={section} />
				</section>
			))}

			<form name='contact' method='POST' data-netlify='true' action='/'>
				<input type='hidden' name='form-name' value='contact' />
				<p>
					<label>
						Your Name: <input type='text' name='name' />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type='email' name='email' />
					</label>
				</p>
				<p>
					<label>
						Your Role:{' '}
						<select name='role[]' multiple>
							<option value='leader'>Leader</option>
							<option value='follower'>Follower</option>
						</select>
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name='message'></textarea>
					</label>
				</p>
				<p>
					<button type='submit'>Send</button>
				</p>
			</form>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
			intro {
				raw
			}
			content {
				... on ContentfulService {
					__typename
					title
					slug
					intro {
						raw
					}
					highlights {
						raw
					}
					image {
						id
						gatsbyImageData(
							width: 564
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
						description
					}
				}
			}
		}
	}
`;

export default PageTemplate;
