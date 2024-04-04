import React from 'react';
// import PropTypes from 'prop-types';

// Components
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from '../components/layout';
import { Image } from '../components/image';

import * as styles from './tags.module.scss';

function TagsTemplate({ pageContext }) {
	const data = useStaticQuery(graphql`
    query ($tag: String) {
		allContentfulArticle(
			limit: 2000
			sort: { publishDate: DESC }
			filter: { tags: { in: [$tag] } }
		) {
			totalCount
			edges {
				node {
					id
					slug
					title
					publishDate
					image {
						id
						gatsbyImageData(
							width: 564
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
						description
					}
				}
			}
		}
	}
  `);
	const { tag } = pageContext;
	const { edges } = data.allContentfulArticle;
	const tagHeader = `${tag}`;

	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}></div>{' '}
				{/* Keep this empty div for layout puropose */}
				<h1>{tagHeader}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			<section>
				<ul className={styles.articleList}>
					{edges.map(({ node }) => {
						return (
							<li key={node.id} className={styles.article}>
								<div className={styles.articleImage}>
									{node.image && (
										<Link to={`/news/${node.slug}`}>
											<Image media={node.image} alt={node.image.description} />
										</Link>
									)}
								</div>
								<div className={styles.articleInfo}>
									<h2 className={styles.articleTitle}>
										<Link to={`/news/${node.slug}`}>{node.title}</Link>
									</h2>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
}

// Tags.propTypes = {
// 	pageContext: PropTypes.shape({
// 		tag: PropTypes.string.isRequired,
// 	}),
// 	data: PropTypes.shape({
// 		allContentfulArticle: PropTypes.shape({
// 			totalCount: PropTypes.number.isRequired,
// 			edges: PropTypes.arrayOf(
// 				PropTypes.shape({
// 					node: PropTypes.shape({
// 						title: PropTypes.string.isRequired,
// 						slug: PropTypes.string.isRequired,
// 					}),
// 				}).isRequired
// 			),
// 		}),
// 	}),
// };

export default TagsTemplate;
