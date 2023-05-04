import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { SEO } from '../components/seo';

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
			<section className={styles.text}>
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
				{renderRichText(contentfulSolution.text)}
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
			}
		}
	}
`;

export default SolutionTemplate;

export const Head = ({ data: { contentfulSolution } }) => (
	<SEO
		title={contentfulSolution.seoTitle}
		description={contentfulSolution.seoDescription}
	/>
);
