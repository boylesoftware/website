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
					{allContentfulCaseStudy.edges.map(({ node: article }) => (
						<li key={article.id} className={styles.article}>
							<div className={styles.articleImage}>
								{article.image && (
									<Link to={`/case-study/${article.slug}`}>
										<Image
											media={article.image}
											alt={article.image.description}
										/>
									</Link>
								)}
							</div>
							<div className={styles.articleInfo}>
								<span className={styles.published}>{article.publishDate}</span>
								{/* <div className={styles.tags}>
									<label htmlFor='tags-list'>Tags</label>
									<ul id='tags-list'>
										{article.tags?.map((tag) => (
											<li key={tag}>
												<Link
													className={styles.tag}
													to={
														// @ts-ignore
														`/tag/${toKabobCase(tag)}`
													}>
													{tag}
												</Link>
												<span>•</span>
											</li>
										))}
									</ul>
								</div> */}
								<h2 className={styles.articleTitle}>
									<Link to={`/case-study/${article.slug}`}>
										{article.title}
									</Link>
								</h2>
								{/* <div className={styles.intro}>
									{article.intro ? renderRichText(article.intro) : null}
								</div> */}
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
