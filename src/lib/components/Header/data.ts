import type { ImageType } from '$lib/constants/types/global';
import logo from '$lib/images/common/logo.svg';

type ItemType = {
	text: string;
	target: string;
};

type DataType = {
	logo: ImageType;
	menu: ItemType[];
};

const data: DataType = {
	logo: {
		src: logo,
		alt: 'img-logo'
	},
	menu: [
		{
			text: '候選人主張',
			target: 'proposal'
		},
		{
			text: '最新活動',
			target: 'activity'
		},
		{
			text: '政策議題',
			target: 'issue'
		},
		{
			text: '民眾服務信箱',
			target: 'mailbox'
		}
	]
};

export default data;
