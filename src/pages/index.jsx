import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/layout';

// import type { HeadFC, PageProps } from 'gatsby';
import * as styles from './index.module.scss';

const IndexPage = () => {
	const {
		contentfulHomepage: { title, intro, content },
	} = useStaticQuery(query);

	return (
		<Layout>
			<>
				<section>
					<h1 className={styles.pageHeading}>{title}</h1>
					<div className={styles.intro}>
						{intro ? renderRichText(intro) : null}
					</div>
				</section>
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
			title
			intro {
				raw
			}
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
				...contentfulGrid
			}
		}
	}
`;

export default IndexPage;
