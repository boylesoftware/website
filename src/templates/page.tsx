import React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

function PageTemplate({ data: { contentfulPage } }) {
	return (
		<Layout>
			<h1>{contentfulPage.title}</h1>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
		}
	}
`;

export default PageTemplate;
