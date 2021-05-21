<script lang="typescript">
	import { onMount } from "svelte";
	import Title from "./Title.svelte";

	let count: number = 0;
	onMount(() => {
		const interval = setInterval(() => count++, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<main class="min-h-screen flex justify-center items-center">
	<div class="justify-items-center">
		<Title />
	</div>
</main>