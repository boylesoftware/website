import React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

import './page.module.scss';

function PageTemplate({ data: { contentfulPage } }) {
	return (
		<Layout>
			<h1>{contentfulPage.title}</h1>
			<p>{renderRichText(contentfulPage.intro)}</p>
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
			intro {
				raw
			}
		}
	}
`;

export default PageTemplate;
