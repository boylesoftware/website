import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './article.module.scss';

function ArticleTemplate({ data: { contentfulArticle } }) {
	console.log(contentfulArticle);
	const image = getImage(contentfulArticle.image);

	// const renderBody = useMemo(() => {
	// 	if (!contentfulArticle.body) {
	// 		return null;
	// 	}

	// 	return (
	// 		<div
	// 			dangerouslySetInnerHTML={{
	// 				__html: contentfulArticle.body.internal.content,
	// 			}}
	// 		/>
	// 	);
	// }, [contentfulArticle]);

	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/news/'>News</Link>
				</div>
				<div className={styles.heading}>Article</div>
			</div>
			<article>
				<h1 className={styles.articleHeading}>{contentfulArticle.title}</h1>
				<div className={styles.published}>{contentfulArticle.publishDate}</div>

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
				<div className={styles.articleBody}>
					{contentfulArticle.body.childMarkdownRemark.internal.content}
				</div>
			</article>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulArticle(slug: { eq: $slug }) {
			title
			image {
				gatsbyImageData(width: 800, placeholder: BLURRED)
				description
			}
			intro {
				raw
			}
			body {
				childMarkdownRemark {
					internal {
						content
					}
				}
			}
			publishDate(formatString: "D MMM, YYYY")
		}
	}
`;

export default ArticleTemplate;
