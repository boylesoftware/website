import { useStaticQuery, graphql } from "gatsby";

const fields = {
  INDUSTRIES: "industries",
  SERVICES: "servicestechnologies",
};

const sortArray = (arr) =>
  arr.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a === b) return 0;
    return a < b ? -1 : 1;
  });

const getAllFilters = (caseStudies) => {
  let industries = [],
    servicesTechnologies = [];
  caseStudies.forEach(({ node: caseStudy }) => {
    if (caseStudy[fields.INDUSTRIES]) {
      industries.push(...caseStudy[fields.INDUSTRIES]);
    }

    if (caseStudy[fields.SERVICES]) {
      servicesTechnologies.push(...caseStudy[fields.SERVICES]);
    }
  });

  return {
    industries: Array.from(new Set(industries)),
    servicesTechnologies: Array.from(new Set(servicesTechnologies)),
  };
};

export const useCaseStudies = () => {
  const { allContentfulCaseStudy } = useStaticQuery(
    graphql`
      {
        allContentfulCaseStudy(sort: { updatedAt: DESC }) {
          edges {
            node {
              id
              updatedAt
              title
              slug
              servicestechnologies
              industries
              image {
                gatsbyImageData(width: 464, placeholder: BLURRED)
                description
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  const caseStudies = allContentfulCaseStudy.edges;
  const { industries, servicesTechnologies } = getAllFilters(caseStudies);

  return {
    caseStudies,
    industries: sortArray(industries),
    servicesTechnologies: sortArray(servicesTechnologies),
  };
};

export const filterCaseStudies = (filterTerm, caseStudies, field) => {
  const results = caseStudies.filter(({ node: caseStudy }) => {
    const contentfulField = fields[field];
    if (caseStudy[contentfulField]) {
      return caseStudy[contentfulField].includes(filterTerm);
    }

    return false;
  });

  return results;
};
