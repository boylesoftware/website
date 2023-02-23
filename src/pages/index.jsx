import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';
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
					<section key={section.id} className={section.class}>
						<ContainerFactory content={section} />

						{section.title ? <h2>{section.title}</h2> : null}
						{section.content.map((sectionContent) => (
							<div key={sectionContent.id}>
								<GatsbyImage
									image={sectionContent.image?.gatsbyImageData}
									alt='uwe'
								/>
								{sectionContent.title ? <h3>{sectionContent.title}</h3> : null}

								{sectionContent.text
									? renderRichText(sectionContent.text)
									: null}
								{sectionContent.intro
									? renderRichText(sectionContent.intro)
									: null}
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
								url
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
