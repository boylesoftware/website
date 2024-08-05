import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export function Link({ children, to, cssClass, ariaLabel }) {
	const internal = /^\/(?!\/)/.test(to);

	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<GatsbyLink to={to} className={cssClass}>
				{children}
			</GatsbyLink>
		);
	}
	return (
		<a href={to} rel='noreferrer' className={cssClass}>
			{children}
		</a>
	);
}
