<<<<<<< HEAD
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContainerFactory } from '../components/container-factory';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
=======
import * as React from "react";
import { graphql } from "gatsby";
import { ContainerFactory } from "../components/container-factory";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
>>>>>>> ce74c97031dcc60f87a66b6a8ae1268bbb44240b

import * as styles from "./index.module.scss";

function IndexPage({ data: { contentfulHomepage } }) {
  return (
    <Layout>
      <>
        <section className={styles.mainSection}>
          <h1 className={styles.pageHeading}>{contentfulHomepage.title}</h1>
          <div className={styles.intro}>
            {contentfulHomepage.intro &&
              renderRichText(contentfulHomepage.intro)}
          </div>
        </section>
        {contentfulHomepage.content.map((section) => (
          <div key={section.id}>
            <ContainerFactory content={section} isHomepage />
          </div>
        ))}
      </>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulHomepage(contentful_id: { eq: "49ydOphXmgEVDUS2M9TyZg" }) {
      title
      seoTitle
      seoDescription
      intro {
        raw
      }
      content {
        __typename
        ... on ContentfulSection {
          id
          title
          cssClass
          content {
            ... on ContentfulText {
              id
              text {
                raw
              }
            }
          }
        }
        ...contentfulGrid
        ... on ContentfulCaseStudies {
          __typename
          id
          title
          content {
            ... on ContentfulCaseStudy {
              __typename
              id
              title
              slug
              mainServicetechnology
              image {
                id
                gatsbyImageData(
                  width: 564
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
                description
              }
            }
          }
        }
        # ... on ContentfulFeaturedList {
        # 	title
        # 	cssClass
        # 	content {
        # 		... on ContentfulArticle {
        # 			__typename
        # 			id
        # 			title
        # 			slug
        # 			image {
        # 				gatsbyImageData(width: 400, placeholder: BLURRED)
        # 				description
        # 				file {
        # 					url
        # 				}
        # 			}
        # 		}
        # 		... on ContentfulService {
        # 			__typename
        # 			id
        # 			title
        # 			slug
        # 			intro {
        # 				raw
        # 			}
        # 			image {
        # 				gatsbyImageData(width: 400, placeholder: BLURRED)
        # 				description
        # 				file {
        # 					url
        # 				}
        # 			}
        # 		}
        # 	}
        # }
      }
    }
  }
`;

export default IndexPage;

export const Head = ({ data: { contentfulHomepage } }) => (
<<<<<<< HEAD
	<Seo
		title={contentfulHomepage.seoTitle}
		description={contentfulHomepage.seoDescription}
	/>
=======
  <Seo
    title={contentfulHomepage.seoTitle}
    description={contentfulHomepage.seoDescription}
  />
>>>>>>> ce74c97031dcc60f87a66b6a8ae1268bbb44240b
);
