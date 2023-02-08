import React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

function ArticleTemplate({ data: { contentfulArticle } }) {
	const image = getImage(contentfulArticle.mainImage);
	// const options = {
	// 	renderMark: {
	// 		[MARKS.BOLD]: (text) => <b className='font-bold'>{text}</b>,
	// 	},
	// 	renderNode: {
	// 		[INLINES.HYPERLINK]: (node, children) => {
	// 			const { uri } = node.data;
	// 			return (
	// 				<a href={uri} className='underline'>
	// 					{children}
	// 				</a>
	// 			);
	// 		},
	// 		[BLOCKS.HEADING_2]: (node, children) => {
	// 			return <h2>{children}</h2>;
	// 		},
	// 	},
	// };

	return (
		<Layout>
			<h1>{contentfulArticle.title}</h1>
			<GatsbyImage image={image} alt={image.description} />
			{renderRichText(contentfulArticle.intro)}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulArticle(slug: { eq: $slug }) {
			title
			mainImage {
				gatsbyImageData(width: 800, placeholder: BLURRED)
				description
			}
			intro {
				raw
			}
		}
	}
`;

export default ArticleTemplate;
