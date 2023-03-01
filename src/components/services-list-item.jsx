import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';

export function ServiceList({ title, image, slug, intro, highlights }) {
	return (
		<>
			<h2>{title}</h2>
			<Link to={slug}>
				{/* <GatsbyImage image={image?.gatsbyImageData} alt={image?.description} /> */}
				<Image media={image} alt={image.description} />
			</Link>
			{intro ? renderRichText(intro) : null}
			{highlights ? renderRichText(highlights) : null}

			<Link to={slug}>Learn more</Link>
			{/* {content.map((sectionContent) => (
				<>
					<div key={sectionContent.id}>{sectionContent.title}</div>
					{sectionContent.logo?.gatsbyImageData ? (
						<GatsbyImage
							image={sectionContent.logo?.gatsbyImageData}
							alt={sectionContent.logo?.description}
						/>
					) : (
						<img
							alt={sectionContent.logo?.description}
							src={sectionContent.logo?.file.url}
						/>
					)}

					{sectionContent.text ? renderRichText(sectionContent.text) : null}
				</>
			))} */}
		</>
	);
}
