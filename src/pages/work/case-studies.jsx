import React from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Image } from "../../components/image";
import Layout from "../../components/layout";
import CaseStudiesListWithFilter from "../../components/case-studies-list-with-filter";

import * as styles from "../news.module.scss";

const CaseStudiesPage = ({ data: { contentfulCaseStudies } }) => (
  <Layout>
    <div className={styles.pageHeader}>
      <div className={styles.crumbs}>
        <Link to="/work">Work</Link>
      </div>
      {/* Keep the empty crumbs div for layout purpose */}
      <h1>{contentfulCaseStudies.title}</h1>
      <div></div> {/* Keep this empty div for layout purpose */}
    </div>
    <section>
      {contentfulCaseStudies.intro &&
        renderRichText(contentfulCaseStudies.intro)}
      <div>
        <h2 className={styles.sectionContentHeading}>Featured Case Studies</h2>
        <ul className={styles.featuredCaseStudies}>
          {contentfulCaseStudies.content.map((featuredCaseStudy) => (
            <li key={featuredCaseStudy.id}>
              <h3 className={styles.caseStudyCategory}>
                {featuredCaseStudy.mainServicetechnology}
              </h3>

              <div className={styles.caseStudyImage}>
                {featuredCaseStudy.image && (
                  <Link to={`/work/case-studies/${featuredCaseStudy.slug}`}>
                    <Image
                      media={featuredCaseStudy.image}
                      alt={featuredCaseStudy.image.description}
                    />
                  </Link>
                )}
              </div>

              <div>
                <h4 className={styles.caseStudyTitle}>
                  {featuredCaseStudy.title && (
                    <Link to={`/work/case-studies/${featuredCaseStudy.slug}`}>
                      {featuredCaseStudy.title}
                    </Link>
                  )}
                </h4>
                {featuredCaseStudy.overview &&
                  renderRichText(featuredCaseStudy.overview)}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CaseStudiesListWithFilter />
    </section>
  </Layout>
);

export const query = graphql`
  query CaseStudiesLandingPage {
    contentfulCaseStudies {
      title
      intro {
        raw
      }
      content {
        id
        title
        mainServicetechnology
        slug
        overview {
          raw
        }
        image {
          gatsbyImageData(width: 325, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default CaseStudiesPage;
