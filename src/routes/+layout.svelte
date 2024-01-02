<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;

	const handleSignOut = () => {
		signOut({ callbackUrl: '/' });
	};

	const handleSignIn = () => {
		signIn('auth0', {
			redirect: true,
			callbackUrl: 'http://localhost:3000/',
		});
	};
</script>

<nav class="flex gap-4 items-center justify-end p-4 text-white text-lg">
	<a href="/" class="border-white border-2 p-2 rounded-lg">Home</a>
	<a href="/builder/meritage" class="border-white border-2 p-2 rounded-lg">Dashboards</a>
	<button
		class="border-white border-2 p-2 rounded-lg"
		on:click={() => {
			data.user ? handleSignOut() : handleSignIn();
		}}
	>
		{data.user ? 'Sign Out' : 'Sign In'}
	</button>
	<!-- need to add types cause red squiggly here -->
	<!-- So login doesn't fully work yet, when creating a new account it just kinda breaks oops -->
</nav>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.eko-blue);
	}
</style>

<!-- https://dev-qjniq0w4oibi0hii.us.auth0.com/login?state=hKFo2SB1SDQyamtiNnBtRlg3cHRiYXVTT1hzVENQT1U2ZmRwdKFupWxvZ2luo3RpZNkgNW1uOUN3ejNCdzJUdnhMM2cwMDYySmNzSE1mQ0t5OWajY2lk2SBKa0x1UkV2ekJ0ZmZwczVDUE9XVjc4TmNVb0NWU0pVOA&client=JkLuREvzBtffps5CPOWV78NcUoCVSJU8&protocol=oauth2&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback%2Fauth0&code_challenge=3DfWaT38kl-5nElfVSxUBp9Bg-5uP13cCgbOgQla8-4&code_challenge_method=S256&scope=openid%20profile%20email -->
<!-- https://dev-qjniq0w4oibi0hii.us.auth0.com/login?state=hKFo2SB1SDQyamtiNnBtRlg3cHRiYXVTT1hzVENQT1U2ZmRwdKFupWxvZ2luo3RpZNkgNW1uOUN3ejNCdzJUdnhMM2cwMDYySmNzSE1mQ0t5OWajY2lk2SBKa0x1UkV2ekJ0ZmZwczVDUE9XVjc4TmNVb0NWU0pVOA&client=JkLuREvzBtffps5CPOWV78NcUoCVSJU8&protocol=oauth2&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback%2Fauth0&code_challenge=3DfWaT38kl-5nElfVSxUBp9Bg-5uP13cCgbOgQla8-4&code_challenge_method=S256&scope=openid%20profile%20email -->