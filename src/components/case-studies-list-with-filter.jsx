import React, { useRef, useState } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useCaseStudies, filterCaseStudies } from "./hooks/use-case-studies";
import { Link } from "./link";
import { Image } from "./image";

import * as styles from "./case-studies-list-with-filter.module.scss";
import classNames from "classnames";

const CaseStudiesListWithFilter = () => {
  const {
    caseStudies = [],
    industries = [],
    servicesTechnologies = [],
  } = useCaseStudies();

  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filterRefs = useRef([]);

  const filterResults = (ev) => {
    ev?.preventDefault();

    const { value: term = "", name: field = "" } = ev?.target;
    setSelectedFilter(term);

    const results = filterCaseStudies(term, caseStudies, field);
    setFilteredCaseStudies(results);
  };

  const resetFilter = (ev) => {
    ev?.preventDefault();

    setFilteredCaseStudies(caseStudies);
    setSelectedFilter(null);
  };

  const isActive = (i) => {
    return selectedFilter === filterRefs[i]?.value;
  };

  return (
    <div className={styles.caseStudiesWithFilter}>
      <nav className={styles.articleFilters}>
        {/* <div className={styles.filterHeader}>
          <button
            className={styles.filterResultsBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Filter Case Studies</span>
          </button>
        </div> */}
        <form
          className={classNames(styles.filterCaseStudiesForm, {
            [styles.showAllFilters]: isOpen
            // [styles.showFilterHeaders]: isOpen
          })}
        >
          <div className="filter-all">
            <div className={styles.filters}>
              <button
                className={classNames({ [styles.active]: !selectedFilter })}
                onClick={resetFilter}
                ref={(el) => (filterRefs[0] = el)}
              >
                All
              </button>
            </div>
          </div>
          <div className="filter-industries">
            <h2>Industries</h2>
            <div className={styles.filters}>
              {industries.map((industry, idx) => (
                <button
                  key={`caseStudyIndustry-${idx}`}
                  className={classNames({
                    [styles.active]: isActive(idx + 1),
                  })}
                  onClick={filterResults}
                  name="INDUSTRIES"
                  value={industry}
                  ref={(el) => (filterRefs[idx + 1] = el)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-services">
            <h2>Services / Technologies</h2>
            <div className={styles.filters}>
              {servicesTechnologies.map((serviceTechnology, idx) => (
                <button
                  key={`caseStudyServiceTechnology-${idx}`}
                  className={classNames({
                    [styles.active]: isActive(industries.length + idx + 1),
                  })}
                  onClick={filterResults}
                  name="SERVICES"
                  value={serviceTechnology}
                  ref={(el) => (filterRefs[industries.length + idx + 1] = el)}
                >
                  {serviceTechnology}
                </button>
              ))}
            </div>
          </div>
        </form>
      </nav>

      <ul className={styles.articleList}>
        {filteredCaseStudies.map(({ node: cs }) => (
          <li key={cs.id} className={styles.article}>
            <div className={styles.articleImage}>
              {cs.image && (
                <Link to={`/work/case-studies/${cs.slug}`}>
                  <Image media={cs.image} alt={cs.image.description} />
                </Link>
              )}
            </div>
            <div className={styles.articleInfo}>
              <h2 className={styles.articleTitle}>
                <Link to={`/work/case-studies/${cs.slug}`}>{cs.title}</Link>
              </h2>
              <div className={styles.articleCopy}>
                {cs.overview && renderRichText(cs.overview)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudiesListWithFilter;
