<script lang="ts">
	import { button } from './style';
	import type { ButtonStyleType } from './style';

	export let text: string,
		theme: ButtonStyleType['theme'] = 'primary',
		size: ButtonStyleType['size'] = 'md',
		round: ButtonStyleType['round'] = 'rounded',
		disabled: boolean = false,
		onClick: (e?: MouseEvent) => void;

	$: buttonClass = button({ theme, size, round });
</script>

<button {disabled} on:click={onClick} class={buttonClass}>
	{text}
</button>
