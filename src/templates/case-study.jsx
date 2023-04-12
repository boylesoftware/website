import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout';

import * as styles from './page.module.scss';

function CaseStudyTemplate({ data: { contentfulCaseStudy } }) {
	return (
		<Layout>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}></div>{' '}
				{/* Keep this empty div for layout puropose */}
				<h1>{contentfulCaseStudy.title}</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			{contentfulCaseStudy.overview ? (
				<section className={styles.overview}>
					{renderRichText(contentfulCaseStudy.overview)}
				</section>
			) : null}
			{contentfulCaseStudy.metrics ? (
				<section className={styles.metrics}>
					{renderRichText(contentfulCaseStudy.metrics)}
				</section>
			) : null}
			{/* {study.content?.map((section) => (
				<div key={section.id}>
					<ContainerFactory content={section} key={section.id} />
				</div>
			))} */}
		</Layout>
	);
}

export const query = graphql`
	query ($slug: String!) {
		contentfulCaseStudy(slug: { eq: $slug }) {
			title
			slug
			overview {
				raw
			}
			metrics {
				raw
			}
		}
	}
`;

export default CaseStudyTemplate;
