import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';

// import type { HeadFC, PageProps } from 'gatsby';
// import * as s from './index.module.scss';
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
							<>
								<div>
									{c.text ? (
										<div key={c.id}>{renderRichText(c.text)}</div>
									) : null}
								</div>
								<div>{c.title ? <div key={c.id}>{c.title}</div> : null}</div>
								<div>{c.intro ? renderRichText(c.intro) : null}</div>
								<div>
									{/* <GatsbyImage image={c.image} alt={c.description} /> */}
								</div>
							</>
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
							text {
								raw
							}
						}
						... on ContentfulArticle {
							id
							title
							intro {
								raw
							}
							image {
								gatsbyImageData(width: 800, placeholder: BLURRED)
								description
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
