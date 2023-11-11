<script lang="ts">
	import { container } from '$lib/constants/styles';
	import { header, wrapper, logo, menu } from './style';
	import data from './data';
</script>

<header class={header}>
	<div class={container}>
		<div class={wrapper}>
			<img src="" alt="" class={logo} />
			<nav class={menu}>
				{#each data.menu as item}
					<a href={item.link}>{item.text}</a>
				{/each}
			</nav>
			<nav class={menu}>
				{#each data.social as socialItem}
					<a href={socialItem.link}>
						<img {...socialItem.icon} />
					</a>
				{/each}
			</nav>
		</div>
	</div>
</header>
