<script lang="ts">
	export let data;
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center justify-between px-32 pt-4 text-white">
		<div class="capitalize text-6xl font-bold">{data.builderName} homes</div>
		<div class="flex gap-4">
			<div class="text-xl font-bold">Switch to...</div>
			<button class="p-4 bg-eko-orange rounded-lg text-lg font-bold"
				>Construction Spec Dashboard</button
			>
			<button class="p-4 bg-eko-orange rounded-lg text-lg font-bold">Meritage Home Overview</button>
		</div>
	</div>

	<div class="text-7xl font-bold text-white self-center">ESG Dashboard</div>

	<div class="flex items-center text-white justify-around">
		<div>Powered by Ekotrope</div>
		<a
			href="https://www.ekotrope.com/dashboard-feedback-and-help"
			class="bg-gray-400 rounded-lg p-2"
		>
			Click to learn how to filter and download data
		</a>
	</div>
</div>
