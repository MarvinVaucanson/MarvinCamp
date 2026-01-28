<script>
	import externalLinks from '../assets/externalLink.json';
</script>

<div>
	<h2>Plus de contenues</h2>
	<ul>
		{#each externalLinks.website as website}
			<li>
				<a href={website.url} target="_blank">{website.label}</a>
			</li>
		{/each}
	</ul>
</div>