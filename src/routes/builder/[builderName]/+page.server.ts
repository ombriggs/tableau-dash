import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.getSession();
	if (!session?.user) {
		throw redirect(303, '/auth/signin');
	}
	return { ...params, ...session };
};
