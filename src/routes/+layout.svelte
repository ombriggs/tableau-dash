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
			prompt: 'login'
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
