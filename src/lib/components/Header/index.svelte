<script lang="ts">
	import { container } from '$lib/constants/styles';
	import { header, wrapper, logo, menu, menuItem } from './style';
	import data from './data';

	export let activeBlock: string = data.menu[0].target;

	const onMenuClick = (target: string) => {
		const element = document.getElementById(target);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<header class={header}>
	<div class={container}>
		<div class={wrapper}>
			<img {...data.logo} class={logo} />
			<nav class={menu}>
				{#each data.menu as item}
					<button
						on:click={() => onMenuClick(item.target)}
						class={menuItem({ isActive: activeBlock === item.target })}
					>
						{item.text}
					</button>
				{/each}
			</nav>
		</div>
	</div>
</header>
