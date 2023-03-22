import type { GatsbyConfig } from 'gatsby';
const dotenv = require('dotenv');
dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
	siteMetadata: {
		title: `bs23`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	// graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.GATSBY_CONTENTFUL_HOST,
				environment: process.env.CONTENTFUL_ENVIRONMENT,
				pageLimit: 200,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-inline-svg',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
	],
};

export default config;
