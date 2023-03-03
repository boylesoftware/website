import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';

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
				{content.map((section) => (
					<div key={section.id}>
						<ContainerFactory content={section} />
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
					cssClass
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
							slug
							intro {
								raw
							}
							image {
								gatsbyImageData(width: 400, placeholder: BLURRED)
								description
								file {
									url
								}
								svg {
									content
								}
							}
						}
					}
				}
				... on ContentfulGrid {
					title
					linkGridItems
					cssClass
					intro {
						raw
					}
					content {
						... on ContentfulTechnology {
							id
							title
							slug
							image {
								gatsbyImageData(width: 400, placeholder: BLURRED)
								description
								file {
									contentType
									url
								}
								svg {
									content
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
