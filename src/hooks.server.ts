import { SvelteKitAuth } from '@auth/sveltekit';
import Auth0Provider from '@auth/core/providers/auth0';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import {
	SECRET_AUTH0_CLIENT_ID,
	SECRET_AUTH0_CLIENT_SECRET,
	SECRET_AUTH0_DOMAIN,
	SECRET_TOKEN
} from '$env/static/private';


const defaultHook: Handle = async ({ event, resolve }) => {
	return await resolve(event) // default behavior of how handle function works (added in case we want to and any other middleware later on)
};

const svelteKitAuthHook: Handle = SvelteKitAuth({
	providers: [
		Auth0Provider({
			id: 'auth0',
			clientId: SECRET_AUTH0_CLIENT_ID,
			clientSecret: SECRET_AUTH0_CLIENT_SECRET,
			issuer: SECRET_AUTH0_DOMAIN,
			wellKnown: `${SECRET_AUTH0_DOMAIN}.well-known/openid-configuration`
		})
	],
	secret: SECRET_TOKEN
});

// Allows us to use the SvelteKit Auth hook provided and also add any additional hooks that we might need
export const handle: Handle = sequence(svelteKitAuthHook, defaultHook);