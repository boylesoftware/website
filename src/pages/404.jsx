import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './news.module.scss';

const Custom404 = () => (
	<Layout>
		<div className={styles.pageHeader}>
			<div className={styles.crumbs}></div>
			{/* Keep the empty crumbs div for layout puropose */}
			<h1>Page not found</h1>
			<div></div> {/* Keep this empty div for layout puropose */}
		</div>
		<section>
			<p>Sorry, we couldn't find what you were looking for.</p>
			<Link to='/'>Go home</Link>.
		</section>
	</Layout>
);

export default Custom404;
