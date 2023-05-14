import React from 'react';
import { graphql, Link } from 'gatsby';
import { Image } from '../../components/image';

import * as styles from '../news.module.scss';
import Layout from '../../components/layout';

const CaseStudiesPage = ({ data: { allContentfulCaseStudy } }) => (
	<Layout>
		<>
			<div className={styles.pageHeader}>
				<div className={styles.crumbs}>
					<Link to='/work'>Work</Link>
				</div>
				{/* Keep the empty crumbs div for layout puropose */}
				<h1>Case Studies</h1>
				<div></div> {/* Keep this empty div for layout puropose */}
			</div>
			<section>
				<ul className={styles.articleList}>
					{allContentfulCaseStudy.edges.map(({ node: cs }) => (
						<li key={cs.id} className={styles.article}>
							<div className={styles.articleImage}>
								{cs.image && (
									<Link to={`/work/case-studies/${cs.slug}`}>
										<Image media={cs.image} alt={cs.image.description} />
									</Link>
								)}
							</div>
							<div className={styles.articleInfo}>
								<h2 className={styles.articleTitle}>
									<Link to={`/work/case-studies/${cs.slug}`}>{cs.title}</Link>
								</h2>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	</Layout>
);

export const query = graphql`
	{
		allContentfulCaseStudy(sort: { updatedAt: DESC }) {
			edges {
				node {
					id
					updatedAt
					title
					slug
					image {
						gatsbyImageData(width: 325, placeholder: BLURRED)
						description
						file {
							url
						}
					}
				}
			}
		}
	}
`;

export default CaseStudiesPage;
