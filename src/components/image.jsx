import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { CSSProperties, ReactElement } from 'react';

export function Image({ alt = '', media, loading = 'lazy' }) {
	const img = Array.isArray(media) ? media[0] : media;

	if (!img) {
		return null;
	}

	const image = img.gatsbyImageData && getImage(img.gatsbyImageData);

	if (!image) {
		const { file, svg } = img;

		if (file?.contentType === 'image/svg+xml') {
			if (svg?.content) {
				return (
					<span
						title={img?.description}
						dangerouslySetInnerHTML={{ __html: svg.content }}
					/>
				);
			}

			// SVGs that can/should not be inlined
			return <img src={file.url} alt={alt} loading={loading} />;
		}

		if (file?.contentType === 'image/png') {
			return (
				<div>
					<img src={file.url} alt={alt} loading={loading} />
				</div>
			);
		}

		if (file?.contentType === 'image/jpeg') {
			return (
				<div>
					<img src={file.url} alt={alt} loading={loading} />
				</div>
			);
		}
	}
	return image ? (
		<GatsbyImage image={image} alt={alt} loading={loading} />
	) : null;
}
