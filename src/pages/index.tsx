import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import type { HeadFC, PageProps } from 'gatsby';
import * as s from './index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
	const {
		contentfulHomepage: { content },
	} = useStaticQuery(query);

	return (
		<main>
			<h1>hello matt, how are you today?</h1>
			{content.map((c: any) => (
				<div key={c.id}>{c.title}</div>
			))}
		</main>
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
				}
			}
		}
	}
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
