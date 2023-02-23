import React, { memo } from 'react';
import { Test } from './section-test';
import { TypeName } from './type-name';

export const ContainerFactory = memo(({ content, ...rest }) => {
	if (!content) return null;
	switch (content.__typename) {
		case TypeName.SECTION:
			return <Test {...content} />;
		default:
			return null;
	}
});
