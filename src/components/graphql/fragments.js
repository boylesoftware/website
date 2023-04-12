import { graphql } from 'gatsby';

export const contentfulGrid = graphql`
	fragment contentfulGrid on ContentfulGrid {
		__typename
		id
		title
		cssClass
		ctaLink
		ctaLabel
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
		__typename
		id
		title
		jobTitle
		url
		media {
			id
			gatsbyImageData(width: 762, placeholder: BLURRED)
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
		cssClass
	}
`;
