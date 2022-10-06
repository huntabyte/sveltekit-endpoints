<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<h1>{post.title}</h1>
		<p>{post.body}</p>
	{/each}
</div>
