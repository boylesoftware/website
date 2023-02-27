import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';

export function Grid({ title, intro, cssClass, content }) {
	return (
		<>
			<h2>[GRID] {title}</h2>
			{content.map((sectionContent) => (
				<>
					<div key={sectionContent.id}>{sectionContent.title}</div>
					{sectionContent.logo?.gatsbyImageData ? (
						<Link to={sectionContent.slug}>
							<GatsbyImage
								image={sectionContent.logo?.gatsbyImageData}
								alt={sectionContent.logo?.description}
							/>
						</Link>
					) : (
						<Link to={sectionContent.slug}>
							<img
								alt={sectionContent.logo?.description}
								src={sectionContent.logo?.file.url}
							/>
						</Link>
					)}

					{sectionContent.text ? renderRichText(sectionContent.text) : null}
					<Link to={sectionContent.slug}>Learn more</Link>
				</>
			))}
		</>
	);
}
