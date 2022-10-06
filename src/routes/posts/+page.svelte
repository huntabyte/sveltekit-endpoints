<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	{/each}
</div>
