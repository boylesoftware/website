import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';
import { Image } from './image';
import { Link } from './link';

import { renderRichText } from 'gatsby-source-contentful/rich-text';

export function RichTextRenderer(text) {
	const options = {
		// renderMark: {
		// 	[MARKS.BOLD]: (text) => <b className='font-bold'>{text}</b>,
		// },
		renderNode: {
			[INLINES.HYPERLINK]: (node, children) => {
				const { uri } = node.data;
				return <Link to={uri}>{children}</Link>;
			},
			[BLOCKS.HEADING_2]: (node, children) => {
				return <h2>{children}</h2>;
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				return (
					<Image media={node.data.target} alt={node.data.target.description} />
				);
			},
		},
	};
	return renderRichText(text, options);
}
