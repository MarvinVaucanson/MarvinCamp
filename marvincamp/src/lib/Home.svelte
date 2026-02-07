<script>
	import { onMount } from 'svelte'
    import Extlink from './Extlink.svelte'
    import Footbar from './Footbar.svelte'
    import Deezer from './Deezer.svelte';
	let backgroundImage = ''

	onMount(() => {
		const photos = [
			'background169.jpg',
			'cham169.jpg',
			'IMG_20250819_095439171_HDR_1.jpg',
			'parcours.jpg',
            'venise.jpg',
            'IMG_20250515_114359.jpg',
            'P1010470.JPG'
		];

		const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
		backgroundImage = `/src/assets/photos/${randomPhoto}`;
	});
</script>

<div class="bg-cover bg-center min-h-screen flex flex-col" style="background-image: url('{backgroundImage}');">
    <div class="flex-1">
        <h1 class="flex justify-center items-center">Welcome to baptiste.rousselot.name</h1>
    </div>
    <div class="flex-2">
        <Extlink></Extlink>
    </div>
    <!-- <Deezer></Deezer> -->
    <Footbar></Footbar>
</div>
