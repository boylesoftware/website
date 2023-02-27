import React, { memo } from 'react';
import { Grid } from './grid';
import { Section } from './section';
import { ServiceList } from './services-list-item';

import { TypeName } from './type-name';

export const ContainerFactory = memo(({ content, ...rest }) => {
	if (!content) return null;
	switch (content.__typename) {
		case TypeName.GRID:
			return <Grid {...content} />;
		case TypeName.SECTION:
			return <Section {...content} />;
		case TypeName.SERVICE:
			return <ServiceList {...content} />;
		default:
			return null;
	}
});
