import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Seo } from '../components/seo';
import { RichTextRenderer } from '../components/richtext-renderer';

import Layout from '../components/layout';

import * as styles from './solution.module.scss';

function SolutionTemplate({ data: { contentfulSolution } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/work'>Work</Link> &gt;&nbsp;{' '}
					<Link to='/work/homegrown-solutions'>Homegrown Solutions</Link>
				</div>
				<h1>{contentfulSolution.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			<section>
				{contentfulSolution.image?.gatsbyImageData ? (
					<GatsbyImage
						image={contentfulSolution.image?.gatsbyImageData}
						alt={contentfulSolution.image?.description}
					/>
				) : (
					<img
						alt={contentfulSolution.image?.description}
						src={contentfulSolution.image?.file.url}
					/>
				)}
				{/* {renderRichText(contentfulSolution.text, options)} */}
				<RichTextRenderer
					raw={contentfulSolution.text.raw}
					references={contentfulSolution.text.references}
				/>
			</section>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulSolution(slug: { eq: $slug }) {
			title
			slug
			seoTitle
			seoDescription
			image {
				id
				gatsbyImageData(
					width: 500
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
				)
				file {
					url
				}
				description
			}
			text {
				raw
				references {
					... on ContentfulAsset {
						contentful_id
						title
						description
						gatsbyImageData(width: 600)
						__typename
						file {
							contentType
							url
						}
						svg {
							content
						}
					}
				}
			}
		}
	}
`;

export default SolutionTemplate;

export const Head = ({ data: { contentfulSolution } }) => (
	<Seo
		title={contentfulSolution.seoTitle}
		description={contentfulSolution.seoDescription}
	/>
);
