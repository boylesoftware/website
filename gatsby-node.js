// Use the type definitions that are included with Gatsby.
const path = require('path');

const toKabobCase = (string) =>
	string
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/-$/, '');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const ArticleTemplate = path.resolve('src/templates/article.jsx');
	const CaseStudyTemplate = path.resolve('src/templates/case-study.jsx');
	const PageTemplate = path.resolve('src/templates/page.jsx');
	const ServiceTemplate = path.resolve('src/templates/service.jsx');
	const SolutionTemplate = path.resolve('src/templates/solution.jsx');

	// const TagsTemplate = path.resolve('src/templates/tags.jsx');
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
			tagsGroup: allContentfulArticle(limit: 2000) {
				group(field: { tags: SELECT }) {
					fieldValue
				}
			}
			caseStudyContentful: allContentfulCaseStudy(limit: 2000) {
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
			solutionContentful: allContentfulSolution(limit: 2000) {
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
	const caseStudies = result.data.caseStudyContentful.edges;
	const pages = result.data.pageContentful.edges;
	const services = result.data.serviceContentful.edges;
	const solutions = result.data.solutionContentful.edges;
	const technologies = result.data.technologyContentful.edges;
	// const tags = result.data.tagsGroup.group;

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
	// Create case studies
	caseStudies.forEach(({ node }) => {
		createPage({
			path: `/work/case-studies/${node.slug}`,
			component: CaseStudyTemplate,
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
	// Create solutions
	solutions.forEach(({ node }) => {
		createPage({
			path: `/work/homegrown-solutions/${node.slug}`,
			component: SolutionTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
	// Create technologies
	technologies.forEach(({ node }) => {
		createPage({
			path: `/${node.slug}`,
			component: TechnologyTemplate,
			context: {
				slug: node.slug,
			},
		});
	});
	// Create tag pages
	// tags.forEach((tag) => {
	// 	const tagSlug = toKabobCase(tag.fieldValue);

	// 	createPage({
	// 		path: `/tag/${tagSlug}`,
	// 		component: TagsTemplate,
	// 		context: {
	// 			tag: tag.fieldValue,
	// 			slug: tagSlug,
	// 		},
	// 	});
	// });
};
