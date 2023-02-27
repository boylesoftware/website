import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export function Section({ title, content }) {
	return (
		<>
			<h2>{title}</h2>
			{content.map((sectionContent) => (
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
			))}
		</>
	);
}
