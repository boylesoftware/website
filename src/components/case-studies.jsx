import React from "react";
import classnames from "classnames";
import { Link } from "./link";
import { Image } from "./image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import * as styles from "./case-studies.module.scss";

export function CaseStudies({ title, content, isHomepage = false }) {
  return (
    <section
      className={classnames(styles.sectionStudies, {
        [styles.homepage]: isHomepage,
      })}
    >
      {title && <h2 className={styles.sectionHeading}>{title}</h2>}
      <div className={classnames(styles.gridStudies)}>
        {content.map((c) => (
          <div key={c.id}>
            <h3 className={styles.caseStudyCategory}>
              {c.mainServicetechnology}&nbsp;
            </h3>

            {c.image?.gatsbyImageData && (
              <Link to={`/work/case-studies/${c.slug}`}>
                <Image media={c.image} alt={c.image.description} />
              </Link>
            )}

            <h4 className={styles.studyTitle}>
              <Link to={`/work/case-studies/${c.slug}`}>{c.title}</Link>
            </h4>

            {c.intro && renderRichText(c.intro)}
          </div>
        ))}
      </div>
      <Link to="/work/case-studies" cssClass={styles.cta}>
        <span>View all case studies</span>
      </Link>
    </section>
  );
}
