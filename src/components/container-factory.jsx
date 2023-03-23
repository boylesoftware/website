import React, { memo } from 'react';
import ContactForm from './contact-form';
import { Grid } from './grid';
import { News } from './news';
import { Section } from './section';
import { ServiceList } from './service-summary';
import { Testimonial } from './testimonial';
import { Text } from './text';

import { TypeName } from './type-name';

export const ContainerFactory = memo(({ content, ...rest }) => {
	if (!content) return null;
	switch (content.__typename) {
		case TypeName.CONTACT_FORM:
			return <ContactForm {...content} />;
		case TypeName.GRID:
			return <Grid {...content} />;
		case TypeName.NEWS:
			return <News {...content} />;
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
