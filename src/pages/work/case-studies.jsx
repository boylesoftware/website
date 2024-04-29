import React from "react";
import { graphql, Link } from "gatsby";

import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../../components/layout";
import CaseStudiesFeatured from "../../components/case-studies-featured";
import CaseStudiesListWithFilter from "../../components/case-studies-list-with-filter";

import * as styles from "./case-studies.module.scss";

const CaseStudiesPage = ({ data: { contentfulCaseStudies }, location }) => (
  <Layout>
    <div className={styles.pageHeader}>
      <div className={styles.crumbs}>
        <Link to="/work">Work</Link>
      </div>
      {/* Keep the empty crumbs div for layout purpose */}
      <h1>{contentfulCaseStudies.title}</h1>
      <div></div> {/* Keep this empty div for layout purpose */}
    </div>

    <section className={styles.caseStudiesLandingPage}>
      {contentfulCaseStudies.intro && (
        <div className={styles.caseStudiesLandingIntro}>
          {renderRichText(contentfulCaseStudies.intro)}
        </div>
      )}
      <CaseStudiesFeatured />
      <CaseStudiesListWithFilter location={location} />
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
    }
  }
`;

export default CaseStudiesPage;
