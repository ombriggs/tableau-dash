<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-start justify-center text-xl text-white p-4 gap-4">
	<div>Ekotrope Tableau Dashboard Home Page</div>

	{#if data.user}
		<div>Welcome back {data.user.email}</div>
	{/if}
</div>
