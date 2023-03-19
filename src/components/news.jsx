import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as styles from './news.module.scss';

export function News() {
	const {
		contentfulNews: { title },
		NEWS: { nodes },
	} = useStaticQuery(query);

	return (
		<section className={styles.newsSection}>
			<h2>{title}</h2>

			{nodes.map((article) => (
				<div key={article.id}>{article.title}</div>
			))}
		</section>
	);
}

export const query = graphql`
	query {
		contentfulNews(contentful_id: { eq: "48QQxlsN2qU7hHu50FS6Av" }) {
			title
		}
		NEWS: allContentfulArticle {
			nodes {
				id
				title
			}
		}
	}
`;
