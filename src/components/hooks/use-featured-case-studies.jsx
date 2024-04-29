import { useStaticQuery, graphql } from "gatsby";

export const useFeaturedCaseStudies = () => {
  const { contentfulCaseStudies } = useStaticQuery(
    graphql`
      {
        contentfulCaseStudies {
          content {
            id
            title
            mainServicetechnology
            slug
            overview {
              raw
            }
            image {
              gatsbyImageData(width: 626, placeholder: BLURRED)
            }
          }
        }
      }
    `
  );

  const featuredCaseStudies = contentfulCaseStudies.content;

  return {
    featuredCaseStudies,
  };
};
