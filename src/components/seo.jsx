import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const SEO = ({
	title,
	description,
	cmsImage,
	pathname,
	children,
	canonical,
}) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata();
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: cmsImage || `${siteUrl}${image}`,
		url: `${siteUrl}/${pathname || ``}`,
		twitterUsername,
		canonical: canonical,
	};
	console.log('Canonical', canonical);

	return (
		<>
			<html lang='en' />
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:url' content={seo.url} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />
			<meta name='twitter:creator' content={seo.twitterUsername} />
			<link rel='canonical' href={`${canonical || seo.url}`} />
			<link
				rel='icon'
				href='data:image/svg+xml<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1130_1709)">
<circle cx="32" cy="32" r="30.5" stroke="url(#paint0_angular_1130_1709)" stroke-width="3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1229 29.3043C16.3896 29.3173 16.5905 29.3346 16.7914 29.3357C17.9331 29.3379 19.0781 29.3823 20.2166 29.3205C20.9323 29.2815 21.6701 29.1678 22.3463 28.937C23.8514 28.4235 24.7823 26.924 24.6627 25.378C24.5254 23.612 23.4694 22.1873 21.8259 21.9858C20.0354 21.7648 18.212 21.8081 16.4028 21.7626C16.3128 21.7594 16.136 22.001 16.1349 22.1299C16.1185 24.4939 16.1229 26.8579 16.1229 29.3043ZM16.1228 34.1886C16.1228 36.7054 16.1184 39.2179 16.137 41.7303C16.1381 41.8397 16.3544 42.0456 16.4664 42.0423C18.5786 41.9882 20.7017 42.0207 22.7974 41.7953C24.1115 41.6534 25.1226 40.8094 25.5858 39.4985C26.508 36.8918 24.8558 34.3381 22.0564 34.1713C20.1879 34.0597 18.3107 34.1215 16.4367 34.1106C16.3489 34.1095 16.26 34.1529 16.1228 34.1886ZM25.4421 46.3271C24.7527 46.4625 24.0644 46.5979 23.375 46.7334C22.7294 46.7745 22.0861 46.8157 21.4417 46.8569C18.1999 46.8504 14.9581 46.8428 11.7163 46.8363C11.4967 46.8363 11.2772 46.8363 11.0301 46.8363C11.0192 46.6088 11.0027 46.4473 11.0027 46.2848C11.0027 36.7031 11.0027 27.1213 11.0005 17.5396C11.0005 17.2471 10.9687 16.9968 11.4111 17C15.1019 17.0336 18.796 16.9914 22.4846 17.0932C24.599 17.1517 26.5125 17.9101 28.067 19.3814C29.9354 21.1495 30.4788 23.3554 30.1649 25.8212C29.8937 27.9415 28.909 29.6619 27.1788 30.9588C27.1207 31.0032 27.0767 31.0639 26.967 31.1787C27.1459 31.2795 27.2941 31.3694 27.4478 31.4485C29.7883 32.6511 31.1123 34.5547 31.5755 37.1104C31.9038 38.9306 31.6019 40.6326 30.851 42.2881C30.5908 42.6911 30.3317 43.0942 30.0716 43.4972L30.0869 43.495L29.9179 43.6207C29.5172 43.9956 29.1176 44.3693 28.718 44.7442C27.7124 45.2577 26.7079 45.7724 25.7023 46.287C25.6167 46.3054 25.5321 46.3238 25.4465 46.3412L25.4421 46.3271Z" fill="#231F20"/>
<mask id="mask0_1130_1709" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="34" y="17" width="21" height="31">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 17H54.7072V47.82H34V17Z" fill="white"/>
</mask>
<g mask="url(#mask0_1130_1709)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.897 47.8194C44.6014 47.8194 44.3058 47.8194 44.0102 47.8205C43.6407 47.7737 43.2712 47.728 42.9006 47.6823L42.9038 47.679C42.8615 47.6649 42.8191 47.6507 42.7767 47.6366C42.6626 47.6257 42.5496 47.6148 42.4355 47.6039C42.142 47.5571 41.8486 47.5114 41.5552 47.4646C41.4443 47.4221 41.3335 47.3797 41.2237 47.3372C41.0324 47.2774 40.8412 47.2164 40.6499 47.1566C40.0228 46.8888 39.3947 46.6199 38.7676 46.3511C38.6513 46.2814 38.5361 46.2118 38.421 46.1421C37.0516 45.2539 35.8127 44.2253 34.8716 42.8723C34.7966 42.7667 34.7216 42.6611 34.6466 42.5555C34.6042 42.4859 34.5619 42.4162 34.5195 42.3465C34.3478 42.045 34.1771 41.7435 34.0065 41.4409C34.0076 41.4126 34.0054 41.3832 34 41.3549C34.1467 41.2189 34.2934 41.0817 34.4391 40.9456C34.5814 40.8509 34.7238 40.7552 34.8662 40.6605C35.7649 40.0085 36.6702 39.3652 37.5581 38.699C37.8482 38.4813 37.9993 38.5172 38.2275 38.8046C38.7785 39.5001 39.3306 40.2087 39.9728 40.815C40.7955 41.5933 41.7367 42.2224 42.8789 42.4652C43.2875 42.5414 43.6961 42.6176 44.1036 42.6938C44.5872 42.6861 45.0709 42.6785 45.5534 42.6709C47.127 42.5131 48.893 41.5748 48.6778 39.5633C48.6854 38.8318 48.4246 38.1918 47.953 37.6519C47.2031 36.7952 46.2424 36.2249 45.223 35.747C45.1784 35.7242 45.1339 35.7002 45.0904 35.6774C44.9817 35.6327 44.8731 35.5892 44.7644 35.5446C44.547 35.4357 44.3286 35.328 44.1112 35.2191C43.7407 35.0591 43.3701 34.8991 43.0006 34.738C42.0257 34.2623 41.0357 33.8128 40.0783 33.3034C37.695 32.0342 35.7399 30.3666 34.9824 27.628C34.9509 27.5148 34.9205 27.4016 34.889 27.2884C34.8781 27.2144 34.8672 27.1393 34.8564 27.0652C34.8412 26.9139 34.8259 26.7626 34.8107 26.6124C34.7901 25.8723 34.7705 25.1332 34.751 24.393C34.7836 24.2428 34.8162 24.0915 34.8477 23.9402C34.8868 23.7116 34.9248 23.483 34.964 23.2545C35.04 23.0389 35.115 22.8234 35.1911 22.609C35.6627 21.3833 36.4202 20.3504 37.3385 19.4273C37.9645 19.0093 38.5905 18.5914 39.2165 18.1745C39.2893 18.1342 39.3621 18.095 39.436 18.0558C40.3217 17.7489 41.2063 17.443 42.092 17.1371C42.1703 17.1415 42.2474 17.1448 42.3257 17.1491C42.6169 17.1154 42.9071 17.0816 43.1984 17.0479L43.2125 17.025L43.2201 17.0403C43.958 17.0272 44.697 17.0131 45.4349 17C45.9098 17.0708 46.3869 17.1274 46.8597 17.2123C49.6059 17.7075 51.8696 19.0431 53.6802 21.1624C53.7497 21.2462 53.8193 21.33 53.8888 21.4138C54.0421 21.6261 54.1953 21.8383 54.3486 22.0506C54.4203 22.2117 54.492 22.3728 54.5648 22.5371C54.2942 22.7657 54.0453 22.9758 53.7965 23.1848C52.7923 23.9609 51.787 24.7359 50.7383 25.5457C49.356 23.6659 47.716 22.216 45.3154 21.9439C44.9959 21.9428 44.6764 21.9417 44.3569 21.9406C43.9406 21.9853 43.5244 22.031 43.1082 22.0756C42.8343 22.1747 42.5441 22.2411 42.2898 22.3771C40.3163 23.4286 39.9392 25.685 41.5008 27.2851C41.9301 27.7249 42.4931 28.0329 42.9951 28.4019C43.4418 28.6577 43.8895 28.9124 44.3373 29.1682C44.4873 29.2422 44.6383 29.3162 44.7894 29.3913C44.8926 29.4425 44.9948 29.4948 45.0969 29.547C45.4969 29.7299 45.8914 29.9236 46.2956 30.0923C49.0984 31.2657 51.7414 32.6612 53.5628 35.2267C53.9323 36.2641 54.3029 37.3014 54.6724 38.3387C54.6833 38.5684 54.6941 38.7981 54.705 39.0277C54.705 39.0854 54.7061 39.1431 54.7072 39.2008C54.7061 39.3946 54.705 39.5883 54.7039 39.7821C54.7017 39.8572 54.6996 39.9312 54.6985 40.0052C54.6974 40.0803 54.6963 40.1543 54.6963 40.2294C54.542 41.6042 54.0519 42.8538 53.2976 44.0043C53.1249 44.222 52.9521 44.4397 52.7793 44.6563C52.338 45.0514 51.8979 45.4465 51.4567 45.8417C51.4262 45.8689 51.3947 45.8961 51.3643 45.9233L51.3491 45.9342C50.6764 46.2923 50.0048 46.6504 49.3321 47.0085C49.0397 47.1119 48.7485 47.2142 48.4561 47.3177C47.4291 47.4755 46.4032 47.6344 45.3762 47.7933C45.2165 47.802 45.0567 47.8107 44.897 47.8194Z" fill="#231F20"/>
</g>
</g>
<defs>
<radialGradient id="paint0_angular_1130_1709" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 24.5) rotate(90) scale(36.5)">
<stop stop-color="#3DC55D"/>
<stop offset="0.567708" stop-color="#157EFA"/>
<stop offset="1" stop-color="#3DC55D"/>
</radialGradient>
<clipPath id="clip0_1130_1709">
<rect width="64" height="64" rx="32" fill="white"/>
</clipPath>
</defs>
</svg>
'
			/>
			{children}
		</>
	);
};
