<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col items-start text-xl text-white p-4 gap-4 h-screen">
	<div>Ekotrope Tableau Dashboard Home Page</div>

	{#if data.user}
		<div>Welcome back {data.user.name}</div>
	{/if}
</main>
