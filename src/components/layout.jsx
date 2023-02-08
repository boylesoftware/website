/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.module.scss';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div itemScope itemType='https://schema.org/WebPage'>
			<Header siteTitle={data.site.siteMetadata.title} />

			<main>{children}</main>
			<footer>© {new Date().getFullYear()}</footer>
		</div>
	);
};

export default Layout;
