import React, { memo } from "react";
import ContactForm from "./contact-form";
import { CaseStudies } from "./case-studies";
import { Media } from "./media";
import { FeaturedList } from "./featured-list";
import { Grid } from "./grid";
import { ImageWithText } from "./image-with-text";
import { News } from "./news";
import { Outcomes } from "./outcomes";
import { Section } from "./section";
import { ServiceList } from "./service-summary";
import { Testimonial } from "./testimonial";
import { Text } from "./text";

import { TypeName } from "./type-name";

export const ContainerFactory = memo(({ content, ...rest }) => {
  const { isHomepage = false } = rest;

  if (!content) return null;
  switch (content.__typename) {
    case TypeName.CONTACT_FORM:
      return <ContactForm {...content} />;
    case TypeName.CASE_STUDIES:
      return <CaseStudies {...content} isHomepage={isHomepage} />;
    case TypeName.FEATURED_LIST:
      return <FeaturedList {...content} />;
    case TypeName.GRID:
      return <Grid {...content} />;
    case TypeName.IMAGE_WITH_TEXT:
      return <ImageWithText {...content} />;
    case TypeName.MEDIA:
      return <Media {...content} />;
    case TypeName.NEWS:
      return <News {...content} />;
    case TypeName.OUTCOMES:
      return <Outcomes {...content} />;
    case TypeName.SECTION:
      return <Section {...content} />;
    case TypeName.SERVICE:
      return <ServiceList {...content} />;
    case TypeName.TESTIMONIAL:
      return <Testimonial {...content} />;
    case TypeName.TEXT:
      return <Text {...content} />;
    default:
      return null;
  }
});
