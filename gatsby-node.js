// Use the type definitions that are included with Gatsby.
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const ArticleTemplate = path.resolve('src/templates/article.jsx');
	const PageTemplate = path.resolve('src/templates/page.jsx');

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
		}
	`);

	// handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const articles = result.data.articleContentful.edges;
	const pages = result.data.pageContentful.edges;

	// Create articles
	articles.forEach(({ node }) => {
		createPage({
			path: `/${node.slug}`,
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
};
