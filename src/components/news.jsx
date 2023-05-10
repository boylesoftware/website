import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from './link';
// import { toKabobCase } from '../utils/strings';

import * as styles from './news.module.scss';

export function News() {
	const {
		contentfulNews: { title },
		NEWS: { nodes },
	} = useStaticQuery(query);
	return (
		<section className={styles.newsSection}>
			<h2>{title}</h2>
			<ul className={styles.articleList}>
				{nodes.map((article) => (
					<li key={article.id} className={styles.article}>
						<div className={styles.published}>{article.publishDate}</div>
						{article.image?.gatsbyImageData ? (
							<Link to={`/news/${article.slug}`}>
								<Image media={article.image} alt={article.image.description} />
							</Link>
						) : null}
						<h3>
							<Link to={`/news/${article.slug}`}>{article.title}</Link>
						</h3>
					</li>
				))}
			</ul>
			<Link to='/news' cssClass={styles.cta}>
				<span>More news</span>
			</Link>
		</section>
	);
}

export const query = graphql`
	query {
		contentfulNews(contentful_id: { eq: "48QQxlsN2qU7hHu50FS6Av" }) {
			title
		}
		NEWS: allContentfulArticle(limit: 6, sort: { publishDate: DESC }) {
			nodes {
				id
				title
				slug
				publishDate(formatString: "D MMM, YYYY")
				intro {
					raw
				}
				image {
					gatsbyImageData(width: 400, placeholder: BLURRED)
					description
					file {
						url
					}
				}
			}
		}
	}
`;
