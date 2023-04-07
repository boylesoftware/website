import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import * as styles from './technology.module.scss';

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
			{contentfulTechnology.relatedCaseStudies ? (
				<section className={styles.relatedCaseStudies}>
					<h2 className={styles.sectionHeading}>Related case studies</h2>
					<div className={styles.gridStudies}>
						{contentfulTechnology.relatedCaseStudies.map((study) => (
							<div className={styles.study} key={study.id}>
								<GatsbyImage
									image={study.image?.gatsbyImageData}
									alt={study.image?.description}
								/>
								<h3 className={styles.studyTitle}>{study.title}</h3>
							</div>
						))}
					</div>
				</section>
			) : null}
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
					image {
						id
						gatsbyImageData(
							width: 500
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
						file {
							url
						}
						description
					}
				}
			}
		}
	}
`;

export default TechnologyTemplate;
