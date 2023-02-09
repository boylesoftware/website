import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import type { HeadFC, PageProps } from 'gatsby';
import * as s from './index.module.scss';
import '../css/all.scss';

import Layout from '../components/layout';

const IndexPage = () => {
	const {
		contentfulHomepage: { content },
	} = useStaticQuery(query);

	return (
		<Layout>
			<>
				<h1 className='visually-hidden'>Homepage</h1>
				{content.map((c) => (
					<section key={c.id} className={c.class}>
						{c.title ? <h2>{c.title}</h2> : null}
						{c.content.map((c) => (
							<div key={c.id} className={s.test}>
								{renderRichText(c.text)}
							</div>
						))}
					</section>
				))}
			</>
		</Layout>
	);
};

export const query = graphql`
	query {
		contentfulHomepage(contentful_id: { eq: "49ydOphXmgEVDUS2M9TyZg" }) {
			content {
				__typename
				... on ContentfulSection {
					id
					title
					class
					content {
						... on ContentfulText {
							id
							internalTitle
							text {
								raw
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
