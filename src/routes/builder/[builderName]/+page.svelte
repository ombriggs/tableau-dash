<script lang="ts">
	import type { PageData } from './$types.js';
	
	export let data: PageData;
	let dashboardTitle = 'ESG Dashboard';
</script>

<!-- we want to check if a user is logged in here, else we redirect to login page -->
<main class="flex flex-col gap-8 h-fit">
	<div class="flex items-center justify-between px-32 pt-4 text-white">
		<div class="capitalize text-6xl font-bold">{data.builderName} homes</div>
		<div class="flex gap-4">
			<div class="text-xl font-bold">Switch to...</div>
			<button
				class="p-4 bg-eko-orange rounded-lg text-lg font-bold"
				on:click={() => {
					dashboardTitle = 'Construction Spec Dashboard';
				}}
			>
				Construction Spec Dashboard
			</button>
			<button
				class="p-4 bg-eko-orange rounded-lg text-lg font-bold capitalize"
				on:click={() => {
					dashboardTitle = `${data.builderName} Homes Compliance Overview`;
				}}>{data.builderName} Home Overview</button
			>
		</div>
	</div>

	<div class="text-5xl font-bold text-white self-center capitalize">{dashboardTitle}</div>

	<div class="flex items-center text-white justify-around">
		<div>Powered by Ekotrope</div>
		<a
			href="https://www.ekotrope.com/dashboard-feedback-and-help"
			class="bg-gray-400 rounded-lg p-2"
		>
			Click to learn how to filter and download data
		</a>
	</div>

	<iframe
		title="Data Vizualization"
		id="tableau-viz"
		name="tableau-viz"
		class=" bg-white w-4/6 self-center rounded-xl h-[1000px]"
		allowfullscreen
		allowtransparency
		src="https://prod-useast-b.online.tableau.com/t/ekotrope/views/BuilderESGDashboard/TrendsDashboard?%3Aembed=y&%3AapiID=embhost0&%3AapiInternalVersion=1.142.0&%3AapiExternalVersion=3.8.0&navType=0&navSrc=Opt&%3AdisableUrlActionsPopups=n&%3Atabs=n&%3Atoolbar=top&%3Adevice=default&mobile=n&%3AhideEditButton=n&%3AhideEditInDesktopButton=n&%3AsuppressDefaultEditBehavior=n&%3Ajsdebug=n"
	/>
	<div />
</main>
