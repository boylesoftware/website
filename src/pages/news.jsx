import React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from '../components/image';

import * as styles from './news.module.scss';
import Layout from '../components/layout';

const NewsPage = ({ data: { allContentfulArticle } }) => (
	<Layout>
		<>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}></div>
				{/* Keep the empty crumbs div for layout puropose */}
				<h1>News</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			<section>
				<ul className={styles.articleList}>
					{allContentfulArticle.edges.map(({ node: article }) => (
						<li key={article.id} className={styles.article}>
							<div className={styles.articleImage}>
								{article.image && (
									<Link to={`/news/${article.slug}`}>
										<Image
											media={article.image}
											alt={article.image.description}
										/>
									</Link>
								)}
							</div>
							<div className={styles.articleInfo}>
								<span className={styles.published}>{article.publishDate}</span>
								<h2 className={styles.articleTitle}>
									<Link to={`/news/${article.slug}`}>{article.title}</Link>
								</h2>
								<div>
									{article.intro ? renderRichText(article.intro) : null}
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	</Layout>
);

export const query = graphql`
	{
		allContentfulArticle(sort: { publishDate: DESC }) {
			edges {
				node {
					id
					title
					slug
					publishDate(formatString: "D MMM, YYYY")
					intro {
						raw
					}
					image {
						gatsbyImageData(width: 325, placeholder: BLURRED)
						description
						file {
							url
						}
					}
				}
			}
		}
	}
`;

export default NewsPage;
