<script>
	export let id;
	export let product_name;
	export let product_description;
	export let primary_image;

	// console.log(id + product_name + product_description + primary_image)
</script>

<main>
	<div class="bg-slate-100 rounded-xl p-4 my-18 w-52 card border-4 border-zinc-300">
		<!-- <li>{id}</li> -->
		

		<!-- check of the primary image is present or not -->
		{#if primary_image}
			<img
				class="rounded border-4 border-slate-300 mt-4"
				src={primary_image}
				alt={product_description}
			/>
		{/if}

		<p class="text-gray-500 mt-3">{product_name}</p>
		<!-- <p>{product_description}</p> -->
	</div>
</main>

<style>
	.card {
		filter: drop-shadow(0px 5px 22px rgba(0, 0, 0, 0.25));
	}
</style>
