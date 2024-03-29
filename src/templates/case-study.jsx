import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { SEO } from '../components/seo';

import Layout from '../components/layout';

import * as styles from './case-study.module.scss';

function CaseStudyTemplate({ data: { contentfulCaseStudy } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/work'>Work</Link> &gt;{' '}
					<Link to='/work/case-studies'>Case Studies</Link>
				</div>{' '}
				{/* Keep this empty div for layout puropose */}
				<h1>{contentfulCaseStudy.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			{contentfulCaseStudy.overview ? (
				<section>
					<h2 className={styles.sectionHeading}>Overview</h2>
					{renderRichText(contentfulCaseStudy.overview)}
				</section>
			) : null}
			{contentfulCaseStudy.metrics ? (
				<section className={styles.metrics}>
					<h2 className={styles.sectionHeading}>Project Outcome Metrics</h2>
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
			canonicalUrl
			seoTitle
			seoDescription
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
					layout
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
							cssClass
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
				# ... on ContentfulImageWithText {
				# 	__typename
				# 	title
				# 	ctaLink
				# 	ctaLabel
				# 	cssClass
				# 	layout
				# 	image {
				# 		id
				# 		gatsbyImageData(
				# 			width: 564
				# 			placeholder: BLURRED
				# 			formats: [AUTO, WEBP, AVIF]
				# 		)
				# 		description
				# 	}
				# 	text {
				# 		raw
				# 	}
				# }
				... on ContentfulMedia {
					__typename
					id
					title
					cssClass
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

export const Head = ({ data: { contentfulCaseStudy } }) => (
	<SEO
		title={contentfulCaseStudy.seoTitle}
		description={contentfulCaseStudy.seoDescription}
		canonical={contentfulCaseStudy.canonicalUrl}
	/>
);
