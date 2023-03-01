import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ContainerFactory } from '../components/container-factory';

import Layout from '../components/layout';

import * as styles from './service.module.scss';

function TechnologyTemplate({ data: { contentfulTechnology } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/services/'>Services</Link> &gt;&nbsp;
					<Link to={`/services/${contentfulTechnology.service.slug}`}>
						{contentfulTechnology.service.title}
					</Link>
				</div>
				<h1>{contentfulTechnology.title}</h1>
			</div>
			<section>
				{contentfulTechnology.intro
					? renderRichText(contentfulTechnology.intro)
					: null}
				{contentfulTechnology.description
					? renderRichText(contentfulTechnology.description)
					: null}
				{contentfulTechnology.image?.gatsbyImageData ? (
					<GatsbyImage
						image={contentfulTechnology.image?.gatsbyImageData}
						alt={contentfulTechnology.image?.description}
					/>
				) : (
					<img
						alt={contentfulTechnology.image?.description}
						src={contentfulTechnology.image?.file.url}
					/>
				)}
			</section>
			{contentfulTechnology.relatedCaseStudies.map((study) => (
				<section key={study.id}>faust</section>
			))}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulTechnology(slug: { eq: $slug }) {
			title
			image {
				id
				gatsbyImageData(
					width: 600
					placeholder: BLURRED
					formats: [AUTO, WEBP, AVIF]
				)
				file {
					url
				}
				description
			}
			intro {
				raw
			}
			description {
				raw
			}
			service {
				... on ContentfulService {
					title
					slug
				}
			}
			relatedCaseStudies {
				... on ContentfulCaseStudy {
					id
					title
				}
			}
		}
	}
`;

export default TechnologyTemplate;
