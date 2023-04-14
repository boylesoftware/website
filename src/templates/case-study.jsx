import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

import * as styles from './page.module.scss';

function CaseStudyTemplate({ data: { contentfulCaseStudy } }) {
	console.log(contentfulCaseStudy.content);

	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/work'>Work</Link> &gt;{' '}
					<Link to='/case-studies'>Case Studies</Link>
				</div>{' '}
				{/* Keep this empty div for layout puropose */}
				<h1>{contentfulCaseStudy.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			{contentfulCaseStudy.overview ? (
				<section className={styles.overview}>
					{renderRichText(contentfulCaseStudy.overview)}
				</section>
			) : null}
			{contentfulCaseStudy.metrics ? (
				<section className={styles.metrics}>
					{renderRichText(contentfulCaseStudy.metrics)}
				</section>
			) : null}
			{contentfulCaseStudy.content?.map((section) => (
				<div key={section.id}>
					<ContainerFactory content={section} key={section.id} />
				</div>
			))}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulCaseStudy(slug: { eq: $slug }) {
			title
			slug
			overview {
				raw
			}
			metrics {
				raw
			}
			content {
				__typename
				... on ContentfulSection {
					__typename
					id
					title
					cssClass
					content {
						... on ContentfulText {
							id
							cssClass
							text {
								raw
							}
						}
						... on ContentfulMedia {
							id
							title
							media {
								gatsbyImageData(width: 600, placeholder: BLURRED)
								description
								file {
									contentType
									url
								}
							}
						}
					}
				}
				... on ContentfulMedia {
					__typename
					id
					title
					media {
						gatsbyImageData(width: 1900, placeholder: BLURRED)
						description
						file {
							contentType
							url
						}
					}
				}
				... on ContentfulOutcomes {
					__typename
					id
					text {
						raw
					}
					highlights {
						id
						text {
							raw
						}
					}
				}
			}
		}
	}
`;

export default CaseStudyTemplate;
