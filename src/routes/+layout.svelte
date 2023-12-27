<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import '../app.css';
	import { page } from '$app/stores';
</script>

<nav class="flex gap-4 items-center justify-end p-4 text-white text-lg">
	<a href="/" class="border-white border-2 p-2 rounded-lg">Home</a>
	<a href="/builder/meritage" class="border-white border-2 p-2 rounded-lg">Dashboards</a>
	<button class="border-white border-2 p-2 rounded-lg" on:click={() => signOut({callbackUrl: '/'})}>
		Sign Out
	</button>
</nav>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.eko-blue);
	}
</style>
