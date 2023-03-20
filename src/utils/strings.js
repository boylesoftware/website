// String-based utilities

// create a "hash" for a given string
// export const getHashFromString = (str) => {
// 	let hash = 0;
// 	for (let i = 0; i < str.length; i += 1) {
// 		const char = str.charCodeAt(i);
// 		// eslint-disable-next-line no-bitwise
// 		hash = (hash << 5) - hash + char;
// 		// eslint-disable-next-line no-bitwise
// 		hash &= hash; // Convert to 32bit integer
// 	}
// 	return `T${hash}`;
// };

export const toKabobCase = (string) =>
	string
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/-$/, '');
