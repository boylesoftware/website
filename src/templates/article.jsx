import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from '../components/link';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

import * as styles from './article.module.scss';

function ArticleTemplate({ data: { contentfulArticle } }) {
	const image = getImage(contentfulArticle.image);
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/news/'>News</Link>
				</div>
				<h1 className={styles.heading}>{contentfulArticle.title}</h1>
				<div className={styles.published}>{contentfulArticle.publishDate}</div>
			</div>
			<article>
				<GatsbyImage
					image={image}
					alt={image?.description}
					className={styles.articleImage}
				/>
				{contentfulArticle.intro ? (
					<div className={styles.articleIntro}>
						{renderRichText(contentfulArticle.intro)}
					</div>
				) : null}
				<div
					dangerouslySetInnerHTML={{
						__html: contentfulArticle.body.childMarkdownRemark.html,
					}}
				/>
			</article>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulArticle(slug: { eq: $slug }) {
			title
			slug
			seoTitle
			seoDescription
			image {
				gatsbyImageData(width: 250, placeholder: BLURRED)
				description
			}
			intro {
				raw
			}
			body {
				childMarkdownRemark {
					html
				}
			}
			publishDate(formatString: "D MMM, YYYY")
		}
	}
`;

export default ArticleTemplate;

export const Head = ({ data: { contentfulArticle } }) => (
	<SEO
		title={contentfulArticle.seoTitle}
		description={contentfulArticle.seoDescription}
		cmsImage={contentfulArticle.image}
	/>
);
