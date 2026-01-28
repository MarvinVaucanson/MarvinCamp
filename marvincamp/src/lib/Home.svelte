<script>
	import { onMount } from 'svelte';
    import Extlink from './Extlink.svelte'
    import Footbar from './footbar.svelte';

	let backgroundImage = '';

	onMount(() => {
		const photos = [
			'background169.jpg',
			'cham169.jpg',
			'IMG_20250819_095439171_HDR_1.jpg',
			'parcours.jpg',
            'IMG_20250515_114237.jpg',
            'IMG_20250515_114359.jpg',
            'P1010470.JPG'
		];

		const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
		backgroundImage = `/src/assets/photos/${randomPhoto}`;
	});
</script>

<div style="background-image: url('{backgroundImage}'); background-size: cover; background-position: center; min-height: 100vh; display: flex; flex-direction: column;">
    <!-- <h1 class='color-white'>Hello World {backgroundImage}</h1> -->
        <div style="flex: 1;">
            <Extlink></Extlink>
        </div>
    <footer style="margin-top: auto;">
        <Footbar></Footbar>
    </footer>
</div>
