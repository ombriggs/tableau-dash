<script>

	import { signIn } from "@auth/sveltekit/client";

</script>
<div class="flex flex-col items-start justify-center text-xl text-white p-4 gap-4">
	<div>Ekotrope Tableau Dashboard Home Page</div>

	<button
	class="border-white border-2 p-2 rounded-lg"
	on:click={() =>
		signIn('auth0', {
			redirect: true,
			callbackUrl: 'http://localhost:3000/',
			prompt: 'login'
		},
	)}
>
	<!-- So login doesn't fully work yet, when creating a new account it just kinda breaks oops -->
	Sign In
</button>
</div>
