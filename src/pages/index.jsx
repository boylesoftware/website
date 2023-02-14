import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';

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
						{section.title ? <h2>{section.title}</h2> : null}
						{section.content.map((sectionContent) => (
							<>
								<div>
									{sectionContent.text ? (
										<div key={sectionContent.id}>
											{renderRichText(sectionContent.text)}
										</div>
									) : null}
								</div>
								<div>
									{sectionContent.title ? (
										<div key={sectionContent.id}>{sectionContent.title}</div>
									) : null}
								</div>
								<div>
									{sectionContent.intro
										? renderRichText(sectionContent.intro)
										: null}
								</div>
								{/* {sectionContent.image?.url ? (
									<StaticImage
										src={sectionContent.image?.url}
										alt='uwe'
										placeholder='blurred'
										layout='fixed'
										width={200}
										height={200}
									/>
								) : null} */}
								<div>
									{console.log(sectionContent.image?.gatsbyImageData)}
									<GatsbyImage
										image={sectionContent.image?.gatsbyImageData}
										alt='uwe'
									/>
								</div>
							</>
						))}
					</section>
				))}
				<form name='contact' method='POST' data-netlify='true'>
					<p>
						<label>
							Your Name: <input type='text' name='name' />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type='email' name='email' />
						</label>
					</p>
					<p>
						<label>
							Your Role:{' '}
							<select name='role[]' multiple>
								<option value='leader'>Leader</option>
								<option value='follower'>Follower</option>
							</select>
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name='message'></textarea>
						</label>
					</p>
					<p>
						<button type='submit'>Send</button>
					</p>
				</form>
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
