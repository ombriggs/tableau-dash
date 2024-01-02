import type { PageServerLoad } from './$types';

// Load functions run every time the page loads, getSession is exposed by Sveltekit Auth
// We can then use the PageData in +page.sveltes
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.getSession();
	return {...session};
};
