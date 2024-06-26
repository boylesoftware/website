import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { Seo } from '../components/seo';
import { RichTextRenderer } from '../components/richtext-renderer';

import Layout from '../components/layout';

import * as styles from './page.module.scss';

function PageTemplate({ data: { contentfulPage } }) {
	const category =
		contentfulPage.category?.charAt(0).toUpperCase() +
		contentfulPage.category?.slice(1);
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					{contentfulPage.category ? (
						<Link to={`/${contentfulPage.category}`}>{category}</Link>
					) : (
						' '
					)}
				</div>
				<h1>{contentfulPage.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			{contentfulPage.intro ? (
				<section className={styles.intro}>
					<RichTextRenderer
						raw={contentfulPage.intro.raw}
						references={contentfulPage.intro.references}
					/>
				</section>
			) : null}
			{contentfulPage.content?.map((section) => (
				<div key={section.id}>
					<ContainerFactory content={section} key={section.id} />
				</div>
			))}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
			slug
			seoTitle
			seoDescription
			intro {
				raw
			}
			category
			content {
				... on ContentfulSection {
					__typename
					title
					cssClass
					content {
						...contentfulMedia
						...contentfulText
					}
				}
				# ... on ContentfulImageWithText {
				# 	__typename
				# 	title
				# 	ctaLink
				# 	ctaLabel
				# 	cssClass
				# 	layout
				# 	image {
				# 		id
				# 		gatsbyImageData(
				# 			width: 564
				# 			placeholder: BLURRED
				# 			formats: [AUTO, WEBP, AVIF]
				# 		)
				# 		description
				# 	}
				# 	text {
				# 		raw
				# 	}
				# }
				... on ContentfulService {
					__typename
					id
					title
					slug
					intro {
						raw
					}
					highlights {
						raw
					}
					image {
						id
						gatsbyImageData(
							width: 564
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
						description
					}
				}
				... on ContentfulContactForm {
					__typename
				}
				... on ContentfulCaseStudies {
					__typename
					id
					title
					content {
						... on ContentfulCaseStudy {
							__typename
							id
							title
							slug
							mainServicetechnology
							image {
								id
								gatsbyImageData(
									width: 564
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
								)
								description
							}
						}
					}
				}
				...contentfulTestimonial
				...contentfulText
				...contentfulGrid
			}
		}
	}
`;

export default PageTemplate;

export const Head = ({ data: { contentfulPage } }) => (
	<>
		<body className='page' />
		<Seo
			title={contentfulPage.seoTitle}
			description={contentfulPage.seoDescription}
		/>
	</>
);
