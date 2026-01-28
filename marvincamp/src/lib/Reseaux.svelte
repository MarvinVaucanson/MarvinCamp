<script>
	import externalLinks from '../assets/externalLink.json';
</script>

<div>
	<h2>Mes Réseaux</h2>
	<ul>
		{#each externalLinks.reseauxSociaux as reseau}
			<li>
				<a href={reseau.url} target="_blank">{reseau.label}</a>
			</li>
		{/each}
	</ul>
</div>