import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from 'gatsby';
import { toKabobCase } from '../utils/strings';

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
				<div key={article.id}>
					{article.title}
					<div className={styles.tags}>
						<section className={styles.tags}>
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
									</li>
								))}
							</ul>
						</section>
					</div>

					{article.image?.gatsbyImageData ? (
						<Link to={article.slug}>
							<Image media={article.image} alt={article.image.description} />
						</Link>
					) : null}
				</div>
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
				image {
					gatsbyImageData(width: 400, placeholder: BLURRED)
					description
					file {
						url
					}
				}
				tags
			}
		}
	}
`;
