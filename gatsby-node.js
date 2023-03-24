// Use the type definitions that are included with Gatsby.
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const ArticleTemplate = path.resolve('src/templates/article.jsx');
	const PageTemplate = path.resolve('src/templates/page.jsx');
	const ServiceTemplate = path.resolve('src/templates/service.jsx');
	const TechnologyTemplate = path.resolve('src/templates/technology.jsx');

	const result = await graphql(`
		{
			articleContentful: allContentfulArticle(limit: 2000) {
				edges {
					node {
						slug
					}
				}
			}
			pageContentful: allContentfulPage(limit: 2000) {
				edges {
					node {
						slug
					}
				}
			}
			serviceContentful: allContentfulService(limit: 2000) {
				edges {
					node {
						slug
					}
				}
			}
			technologyContentful: allContentfulTechnology(limit: 2000) {
				edges {
					node {
						slug
						service {
							... on ContentfulService {
								slug
							}
						}
					}
				}
			}
		}
	`);

	// handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const articles = result.data.articleContentful.edges;
	const pages = result.data.pageContentful.edges;
	const services = result.data.serviceContentful.edges;
	const technologies = result.data.technologyContentful.edges;

	// Create articles
	articles.forEach(({ node }) => {
		createPage({
			path: `/news/${node.slug}`,
			component: ArticleTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
	// Create pages
	pages.forEach(({ node }) => {
		createPage({
			path: `/${node.slug}`,
			component: PageTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
	// Create services
	services.forEach(({ node }) => {
		createPage({
			path: `/services/${node.slug}`,
			component: ServiceTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
	// Create technologies
	technologies.forEach(({ node }) => {
		createPage({
			path: `/services/${node.service.slug}/${node.slug}`,
			component: TechnologyTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
};
