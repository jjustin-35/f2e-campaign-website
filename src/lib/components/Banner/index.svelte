<script>
	import { container } from '$lib/constants/styles';
	import { outer, banner, titleImage, bannerImage, rightBgLetter, leftBgLetter } from './style';
	import data from './data';
</script>

<section class={outer}>
	<div class={container}>
		<div class={banner}>
			<img {...data.titleImg} class={titleImage} />
			<img {...data.bannerImg} class={bannerImage} />
			<img {...data.rightLetterImg} class={rightBgLetter} />
			<img {...data.leftLetterImg} class={leftBgLetter} />
		</div>
	</div>
</section>
