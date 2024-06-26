import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from '../components/link';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ContainerFactory } from '../components/container-factory';
import { Seo } from '../components/seo';

import Layout from '../components/layout';

import * as styles from './service.module.scss';

function ServiceTemplate({ data: { contentfulService } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/services'>Services</Link>
				</div>
				<h1>{contentfulService.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			<section className={styles.serviceMain}>
				{contentfulService.description ? (
					<div className={styles.serviceDescription}>
						{renderRichText(contentfulService.description)}
					</div>
				) : null}
				<div className={styles.serviceImage}>
					<GatsbyImage
						image={contentfulService.image.gatsbyImageData}
						alt={contentfulService.image.description}
					/>
				</div>
			</section>
			{contentfulService.content.map((section) => (
				<div key={section.id} className={section.class}>
					<ContainerFactory content={section} />
				</div>
			))}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulService(slug: { eq: $slug }) {
			title
			seoTitle
			seoDescription
			intro {
				raw
			}
			description {
				raw
			}
			image {
				id
				gatsbyImageData(
					width: 600
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
				)
				description
			}
			content {
				__typename
				...contentfulGrid
			}
		}
	}
`;

export default ServiceTemplate;

export const Head = ({ data: { contentfulService } }) => (
	<Seo
		title={contentfulService.seoTitle}
		description={contentfulService.seoDescription}
	/>
);
