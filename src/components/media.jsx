import React from 'react';
import { Image } from './image';

import * as styles from './media.module.scss';

export function Media({ media, cssClass }) {
	return (
		<div className={styles[cssClass]}>
			<Image media={media} alt={media.description} />
		</div>
	);
}
