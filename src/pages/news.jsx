import React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from '../components/image';
import { toKabobCase } from '../utils/strings';

import * as styles from './news.module.scss';
import Layout from '../components/layout';

const NewsPage = ({ data: { allContentfulArticle } }) => (
	<Layout>
		<>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}></div>
				<h1>News</h1>
			</div>
			<section className={styles.newsList}>
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
								<div className={styles.published}>{article.publishDate}</div>

								<div className={styles.tags}>
									<label htmlFor='tags-list'>Tags</label>
									<ul id='tags-list'>
										{article.tags.map((tag) => (
											<li key={tag}>
												<Link
													className={styles.tag}
													to={
														// @ts-ignore
														`/tag/${toKabobCase(tag)}`
													}>
													{tag}
												</Link>
												<span>•</span>
											</li>
										))}
									</ul>
								</div>

								<h2 className={styles.articleTitle}>
									<Link to={`/news/${article.slug}`}>{article.title}</Link>
								</h2>
								<div className={styles.intro}>
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
		allContentfulArticle(sort: { fields: [publishDate], order: DESC }) {
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
					tags
				}
			}
		}
	}
`;

export default NewsPage;
