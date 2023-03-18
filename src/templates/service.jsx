import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ContainerFactory } from '../components/container-factory';

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
			</div>
			<section>
				{contentfulService.intro ? (
					<p>{renderRichText(contentfulService.intro)}</p>
				) : null}
				{contentfulService.description ? (
					<p>{renderRichText(contentfulService.description)}</p>
				) : null}
				<GatsbyImage
					image={contentfulService.image.gatsbyImageData}
					alt={contentfulService.image.description}
				/>
			</section>
			{contentfulService.content.map((section) => (
				<section key={section.id} className={section.class}>
					<ContainerFactory content={section} />
				</section>
			))}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulService(slug: { eq: $slug }) {
			title
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
