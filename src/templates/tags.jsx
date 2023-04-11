import React from 'react';
// import PropTypes from 'prop-types';

// Components
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Image } from '../components/image';

import * as styles from './tags.module.scss';

function TagsTemplate({ pageContext, data }) {
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
						const { slug, title, image } = node;

						return (
							<li>
								<div className={styles.articleImage}>
									{node.image && (
										<Link to={`/news/${node.slug}`}>
											<Image media={node.image} alt={node.image.description} />
										</Link>
									)}
								</div>
								{node.title}
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

export const pageQuery = graphql`
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
`;
