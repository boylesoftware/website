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
			...contentfulMedia
		}
	}
`;

export const contentfulMedia = graphql`
	fragment contentfulMedia on ContentfulMedia {
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
`;

export const contentfulTestimonial = graphql`
	fragment contentfulTestimonial on ContentfulTestimonial {
		__typename
		name
		company
		quote {
			quote
		}
	}
`;

export const contentfulText = graphql`
	fragment contentfulText on ContentfulText {
		__typename
		text {
			raw
		}
	}
`;
