import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from '../components/image';
import IconProblem from '../images/icon-communications.svg';
import IconGoals from '../images/icon-bullseye.svg';
import { Seo } from '../components/seo';
import Layout from '../components/layout';

import * as styles from './case-study.module.scss';

function CaseStudyTemplate({ data: { contentfulCaseStudy } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/work'>Work</Link> &gt;{' '}
					<Link to='/work/case-studies'>Case Studies</Link>
				</div>
				<h1>{contentfulCaseStudy.title}</h1>
				{contentfulCaseStudy.caseStudyPdf && (
					<div className={styles.pill}>
						<a href={contentfulCaseStudy.caseStudyPdf.url}>
							Download Case Study
						</a>
					</div>
				)}
			</div>

			<section>
				<h2 className={styles.sectionHeading}>Context</h2>
				<div className={styles.sectionContent}>
					{renderRichText(contentfulCaseStudy.context)}
				</div>
				<Image
					media={contentfulCaseStudy.image}
					alt={contentfulCaseStudy.image.description}
				/>
			</section>

			<section
				className={styles.withBgImage}
				style={{
					backgroundImage: `url(${contentfulCaseStudy.backgroundImage?.file.url})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
				}}>
				<div>
					<IconProblem />
					<h3>Business problem</h3>
					{contentfulCaseStudy.businessProblem &&
						renderRichText(contentfulCaseStudy.businessProblem)}
				</div>
				<div>
					<IconGoals />
					<h3>Expected goals</h3>
					{contentfulCaseStudy.expectedGoals &&
						renderRichText(contentfulCaseStudy.expectedGoals)}
				</div>
			</section>

			<section className={styles.solution}>
				<h2 className={styles.sectionHeading}>Solution</h2>
				<h3 className={styles.sectionContentHeading}>
					{contentfulCaseStudy.solutionHeading &&
						contentfulCaseStudy.solutionHeading}
				</h3>
				<div className={styles.solutionText}>
					<div>
						{contentfulCaseStudy.solutionText1 &&
							renderRichText(contentfulCaseStudy.solutionText1)}
					</div>
					<div>
						{contentfulCaseStudy.solutionText2 &&
							renderRichText(contentfulCaseStudy.solutionText2)}
					</div>
				</div>

				{contentfulCaseStudy.solutionImage && (
					<Image
						media={contentfulCaseStudy.solutionImage}
						alt={contentfulCaseStudy.solutionImage.description}
					/>
				)}
			</section>

			<section className={styles.outcomes}>
				<h2 className={styles.sectionHeading}>Outcomes of the Engagement</h2>
				<h3 className={styles.sectionContentHeading}>
					{contentfulCaseStudy.outcomesHeading &&
						contentfulCaseStudy.outcomesHeading}
				</h3>
				{contentfulCaseStudy.outcomesImage && (
					<Image
						media={contentfulCaseStudy.outcomesImage}
						alt={contentfulCaseStudy.outcomesImage.description}
					/>
				)}
				<div className={styles.outcomesText}>
					<div>
						{contentfulCaseStudy.outcomesText &&
							renderRichText(contentfulCaseStudy.outcomesText)}
					</div>
				</div>
			</section>

			{contentfulCaseStudy.caseStudyPdf && (
				<section className={styles.pdfBlue}>
					<h2>Save this case study for future reference</h2>
					<div className={styles.pill}>
						<a href={contentfulCaseStudy.caseStudyPdf.url}>
							Download Case Study
						</a>
					</div>
				</section>
			)}
			{contentfulCaseStudy.metrics && (
				<section className={styles.metrics}>
					<h2 className={styles.sectionHeading}>
						Key project outcome metrics:
					</h2>

					{contentfulCaseStudy.outcomeMetrics?.map((metric) => (
						<div key={metric.id}>Metric</div>
					))}
				</section>
			)}
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
			caseStudyPdf {
				url
			}
			image {
				gatsbyImageData(width: 740, placeholder: BLURRED)
				description
				file {
					contentType
					url
				}
			}
			context {
				raw
			}
			backgroundImage {
				gatsbyImageData(width: 1366, placeholder: BLURRED)
				description
				file {
					contentType
					url
				}
			}
			businessProblem {
				raw
			}
			expectedGoals {
				raw
			}
			solutionHeading
			solutionText1 {
				raw
			}
			solutionText2 {
				raw
			}
			solutionImage {
				gatsbyImageData(width: 1366, placeholder: BLURRED)
				description
				file {
					contentType
					url
				}
			}
			outcomesHeading
			outcomesText {
				raw
			}
			outcomesImage {
				gatsbyImageData(width: 1366, placeholder: BLURRED)
				description
				file {
					contentType
					url
				}
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
	<Seo
		title={contentfulCaseStudy.seoTitle}
		description={contentfulCaseStudy.seoDescription}
		canonical={contentfulCaseStudy.canonicalUrl}
	/>
);
