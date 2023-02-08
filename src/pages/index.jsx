import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import type { HeadFC, PageProps } from 'gatsby';
import * as s from './index.module.scss';
import Layout from '../components/layout';

const IndexPage = () => {
	const {
		contentfulHomepage: { content },
	} = useStaticQuery(query);

	return (
		<Layout>
			<>
				<h1 className={s.test}>hello matt, how are you today?</h1>
				{content.map((c) => (
					<div key={c.id}>
						<div>{c.title}</div>
						{c.content.map((c) => (
							<div key={c.id} className={s.test}>
								{renderRichText(c.text)}
							</div>
						))}
					</div>
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
