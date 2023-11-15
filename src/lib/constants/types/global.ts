import type { ButtonStyleType } from '$lib/components/Button/style';

export type ImageType = {
	src: string;
	alt: string;
};

export type ButtonType = ButtonStyleType & {
	text: string;
};
