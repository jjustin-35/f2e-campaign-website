<script>
	import { container } from '$lib/constants/styles';
	import { outer, banner, titleImage, bannerImage } from './style';
	import data from './data';
</script>

<section class={outer}>
	<div class={container}>
		<div class={banner}>
			<img {...data.titleImg} class={titleImage} />
			<img {...data.bannerImg} class={bannerImage} />
		</div>
	</div>
</section>
