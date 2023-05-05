import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export function Link({ children, to }) {
	const internal = /^\/(?!\/)/.test(to);

	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return <GatsbyLink to={to}>{children}</GatsbyLink>;
	}
	return (
		<a href={to} target='_blank' rel='nofollow'>
			{children}
		</a>
	);
}
