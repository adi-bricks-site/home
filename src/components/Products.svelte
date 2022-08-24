<script>
	import ProductCard from "./ProductCard.svelte";

	let url =
		"https://api.airtable.com/v0/appE99jFhnqLXnEJm/Table%201?id=tbls0VnR15vXEiP2w";

	let options = {
		method: "GET",
		headers: {
			Authorization: "Bearer keyNsZ0hHEcrleEvY",
		},
	};

	let promise = fetch(url, options).then((res) => res.json());
</script>

<main>
	{#await promise}
		<p
			class="bg-red-200 p-2 rounded m-4 text-white flex justify-center font-bold"
		>
			Loading...
		</p>
	{:then data}
		<!-- promise was fulfilled -->
		<h1>Our Products</h1>
		<div class="grid-wrapper">
			{#each data.records as product}
				{#if product.fields.status != "not-available"}
					<ProductCard
						id={product.id}
						product_name={product.fields.Product_name}
						product_description={product.fields.Product_description}
						primary_image={product.fields.primary_image[0]
							.thumbnails.large.url}
					/>
				{/if}
			{/each}
		</div>
	{:catch error}
		<p>Oops: something went wrong...</p>
		<p>Please Refresh</p>
	{/await}
</main>

<style>
	.grid-wrapper {
		display: grid;
		grid-auto-columns: 1fr 1fr 1fr;
		grid-auto-rows: 1fr;
		gap: 0px 0px;
	}
</style>
