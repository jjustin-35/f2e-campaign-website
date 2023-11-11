import type { ImageType } from '$lib/constants/types/global';

type ItemType = {
	text: string;
	link: string;
};

type SocialType = {
	icon: ImageType;
	link: string;
};

type DataType = {
	logo: ImageType;
	menu: ItemType[];
	social: SocialType[];
};

const data: DataType = {
	logo: {
		src: '/images/logo.svg',
		alt: 'img-logo'
	},
	menu: [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'About',
			link: '/about'
		},
		{
			text: 'Contact',
			link: '/contact'
		}
	],
	social: [
		{
			icon: { src: '', alt: 'ic-facebook' },
			link: 'https://www.facebook.com/'
		},
		{
			icon: { src: '', alt: 'ic-twitter' },
			link: 'https://twitter.com/'
		},
		{
			icon: { src: '', alt: 'ic-instagram' },
			link: 'https://www.instagram.com/'
		}
	]
};

export default data;
