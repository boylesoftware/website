import * as React from "react";
import classNames from "classnames";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Image } from "../components/image";
import IconProblem from "../images/icon-communications.svg";
import IconGoals from "../images/icon-bullseye.svg";
import { Seo } from "../components/seo";
import Layout from "../components/layout";

import * as styles from "./case-study.module.scss";

function CaseStudyTemplate({ data: { contentfulCaseStudy } }) {
  return (
    <Layout>
      <div className={styles.pageHeader}>
        <div className={styles.crumbs}>
          <Link to="/work">Work</Link> &gt;{" "}
          <Link to="/work/case-studies">Case Studies</Link>
        </div>
        <h1>{contentfulCaseStudy.title}</h1>
        {contentfulCaseStudy.caseStudyPdf && (
          <div className={styles.pill}>
            <a
              href={contentfulCaseStudy.caseStudyPdf.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Download Case Study</span>
            </a>
          </div>
        )}
      </div>

      <section className={styles.sectionContext}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeading}>Context</h2>

          {renderRichText(contentfulCaseStudy.overview)}
        </div>
        <div className={styles.contextImage}>
          <div
            className={classNames(styles.caseStudyTags, styles.articleFilters)}
          >
            {contentfulCaseStudy.industries && (
              <div className="filter-industries">
                <h3>Industries:</h3>
                <div className={styles.filters}>
                  {contentfulCaseStudy.industries?.map((industry, idx) => (
                    <Link
                      key={`caseStudyIndustry-${idx}`}
                      to={`/work/case-studies?query=${encodeURIComponent(
                        industry
                      )}&type=INDUSTRIES#cslist`}
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {contentfulCaseStudy.servicestechnologies && (
              <div className="filter-services">
                <h3>Services / Technology:</h3>
                <div className={styles.filters}>
                  {contentfulCaseStudy.servicestechnologies?.map(
                    (serviceTechnology, idx) => (
                      <Link
                        key={`caseStudyServiceTechnology-${idx}`}
                        to={`/work/case-studies?query=${encodeURIComponent(
                          serviceTechnology
                        )}&type=SERVICES#cslist`}
                      >
                        {serviceTechnology}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <Image
            media={contentfulCaseStudy.image}
            alt={contentfulCaseStudy.image?.description}
          />
        </div>
      </section>

      <section
        className={styles.withBgImage}
        style={{
          backgroundImage: `url(${contentfulCaseStudy.backgroundImage?.file.url})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div>
          <IconProblem />
          <h3>Business problem</h3>
          {contentfulCaseStudy.businessProblem &&
            renderRichText(contentfulCaseStudy.businessProblem)}
        </div>
        <div>
          <IconGoals />
          <h3>Expected goals</h3>
          {contentfulCaseStudy.expectedGoals &&
            renderRichText(contentfulCaseStudy.expectedGoals)}
        </div>
      </section>

      <section className={styles.solution}>
        <h2 className={styles.sectionHeading}>Solution</h2>
        <h3 className={styles.sectionContentHeading}>
          {contentfulCaseStudy.solutionHeading &&
            contentfulCaseStudy.solutionHeading}
        </h3>
        <div className={styles.solutionText}>
          <div>
            {contentfulCaseStudy.solutionText1 &&
              renderRichText(contentfulCaseStudy.solutionText1)}
          </div>
          <div>
            {contentfulCaseStudy.solutionText2 &&
              renderRichText(contentfulCaseStudy.solutionText2)}
          </div>
        </div>

        {contentfulCaseStudy.solutionImage && (
          <Image
            media={contentfulCaseStudy.solutionImage}
            alt={contentfulCaseStudy.solutionImage.description}
          />
        )}
      </section>

      <section className={styles.outcomes}>
        <h2 className={styles.sectionHeading}>Outcomes of the Engagement</h2>
        <h3 className={styles.sectionContentHeading}>
          {contentfulCaseStudy.outcomesHeading &&
            contentfulCaseStudy.outcomesHeading}
        </h3>
        <div className={styles.outcomesContent}>
          {contentfulCaseStudy.outcomesImage && (
            <Image
              media={contentfulCaseStudy.outcomesImage}
              alt={contentfulCaseStudy.outcomesImage.description}
            />
          )}
          <div className={styles.outcomesText}>
            <div>
              {contentfulCaseStudy.outcomesText &&
                renderRichText(contentfulCaseStudy.outcomesText)}
            </div>
          </div>
        </div>
      </section>

      {contentfulCaseStudy.caseStudyPdf && (
        <section>
          <div className={styles.pdfBlue}>
            <h2>Save this case study for future reference</h2>
            <div className={styles.pill}>
              <a
                href={contentfulCaseStudy.caseStudyPdf.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>Download Case Study</span>
              </a>
            </div>
          </div>
        </section>
      )}
      {contentfulCaseStudy.outcomesMetrics && (
        <section className={styles.sectionMetrics}>
          <h2 className={styles.sectionHeading}>
            Key project outcome metrics:
          </h2>
          <div className={styles.metricsContent}>
            {contentfulCaseStudy.outcomesMetrics?.map((metric) => (
              <div key={metric.id} className={styles.metric}>
                <Image media={metric.icon} alt={metric.icon.description} />
                <div className={styles.metricInfo}>
                  <div className={styles.metricValue}>{metric.metricValue}</div>
                  <div className={styles.metricDescription}>
                    {renderRichText(metric.metricDescription)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      slug
      # canonicalUrl
      seoTitle
      seoDescription
      caseStudyPdf {
        url
      }
      servicestechnologies
      industries
      image {
        gatsbyImageData(width: 740, placeholder: BLURRED)
        description
        file {
          contentType
          url
        }
      }
      overview {
        raw
      }
      backgroundImage {
        gatsbyImageData(width: 1366, placeholder: BLURRED)
        description
        file {
          contentType
          url
        }
      }
      businessProblem {
        raw
      }
      expectedGoals {
        raw
      }
      solutionHeading
      solutionText1 {
        raw
      }
      solutionText2 {
        raw
      }
      solutionImage {
        gatsbyImageData(width: 1366, placeholder: BLURRED)
        description
        file {
          contentType
          url
        }
      }
      outcomesHeading
      outcomesText {
        raw
      }
      outcomesImage {
        gatsbyImageData(width: 1366, placeholder: BLURRED)
        description
        file {
          contentType
          url
        }
      }
      outcomesMetrics {
        __typename
        ... on ContentfulMetric {
          __typename
          id
          metricDescription {
            raw
          }
          metricValue
          icon {
            gatsbyImageData(width: 78, placeholder: BLURRED)
            description
            file {
              contentType
              url
            }
          }
        }
      }
      # metrics {
      # 	raw
      # }
      # content {
      # 	__typename
      # 	... on ContentfulSection {
      # 		__typename
      # 		id
      # 		title
      # 		cssClass
      # 		layout
      # 		content {
      # 			... on ContentfulText {
      # 				id
      # 				cssClass
      # 				text {
      # 					raw
      # 				}
      # 			}
      # 			... on ContentfulMedia {
      # 				id
      # 				title
      # 				cssClass
      # 				media {
      # 					gatsbyImageData(width: 600, placeholder: BLURRED)
      # 					description
      # 					file {
      # 						contentType
      # 						url
      # 					}
      # 				}
      # 			}
      # 		}
      # 	}
      # 	... on ContentfulMedia {
      # 		__typename
      # 		id
      # 		title
      # 		cssClass
      # 		media {
      # 			gatsbyImageData(width: 1900, placeholder: BLURRED)
      # 			description
      # 			file {
      # 				contentType
      # 				url
      # 			}
      # 		}
      # 	}
      # 	... on ContentfulOutcomes {
      # 		__typename
      # 		id
      # 		text {
      # 			raw
      # 		}
      # 		highlights {
      # 			id
      # 			text {
      # 				raw
      # 			}
      # 		}
      # 	}
      # }
    }
  }
`;

export default CaseStudyTemplate;

export const Head = ({ data: { contentfulCaseStudy } }) => (
  <Seo
    title={contentfulCaseStudy.seoTitle}
    description={contentfulCaseStudy.seoDescription}
    canonical={contentfulCaseStudy.canonicalUrl}
  />
);
