import { SvelteKitAuth } from '@auth/sveltekit';
import Auth0Provider from '@auth/core/providers/auth0';
import {
	SECRET_AUTH0_CLIENT_ID,
	SECRET_AUTH0_CLIENT_SECRET,
	SECRET_AUTH0_DOMAIN,
	SECRET_TOKEN
} from '$env/static/private';

export const handle = SvelteKitAuth({
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
