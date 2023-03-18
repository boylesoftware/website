import { graphql } from 'gatsby';

export const contentfulGrid = graphql`
	fragment contentfulGrid on ContentfulGrid {
		__typename
		id
		title
		cssClass
		intro {
			raw
		}
		content {
			# ... on ContentfulTechnology {
			# 	id
			# 	title
			# 	slug
			# 	image {
			# 		gatsbyImageData(width: 400, placeholder: BLURRED)
			# 		description
			# 		file {
			# 			contentType
			# 			url
			# 		}
			# 		svg {
			# 			content
			# 		}
			# 	}
			# }
			... on ContentfulMedia {
				id
				title
				url
				media {
					id
					gatsbyImageData(width: 400, placeholder: BLURRED)
					description
					file {
						contentType
						url
					}
					svg {
						content
					}
				}
			}
		}
	}
`;
