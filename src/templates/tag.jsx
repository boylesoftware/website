import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

import style from './tag.module.css';

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges } = data.allContentfulArticle;
	const tagHeader = `${tag}`;

	return (
		<Layout>
			<h1 className={style.header}>{tagHeader}</h1>
			<div className='g-photos'>
				{edges.map(({ node }) => {
					const { slug, title, image } = node;

					return { title };
				})}
			</div>
			<Link to='/tags' className={style.tags}>
				All tags
			</Link>
		</Layout>
	);
};

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allContentfulStory: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						title: PropTypes.string.isRequired,
						slug: PropTypes.string.isRequired,
					}),
				}).isRequired
			),
		}),
	}),
};

export default Tags;

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
