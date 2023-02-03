import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import * as s from './index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
	return <main>hello matt, how are you today?</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
