import React from 'react';
import { Image } from './image';

import * as styles from './text.module.scss';

export function Media({ title, media, cssClass }) {
	return <Image media={media} alt={media.description} />;
}
