import React from "react";
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { Image } from "./image";
import { useFeaturedCaseStudies } from "./hooks/use-featured-case-studies";

import * as styles from './case-studies-featured.module.scss';

const CaseStudiesFeatured = () => {
  const { featuredCaseStudies } = useFeaturedCaseStudies();

  return (
    <div className={styles.featuredCaseStudiesContainer}>
      <h2 className={styles.sectionContentHeading}>Featured Case Studies</h2>
      <ul className={styles.featuredCaseStudies}>
        {featuredCaseStudies.map((featuredCaseStudy) => (
          <li key={featuredCaseStudy.id}>
            <h3 className={styles.caseStudyCategory}>
              {featuredCaseStudy.mainServicetechnology}&nbsp;
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

            <div className={styles.caseStudiesDetails}>
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
  );
};

export default CaseStudiesFeatured;