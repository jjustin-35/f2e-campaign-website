import { css } from '@emotion/css';
import { colors, fontSizes } from '../../constants/styles';

export type ButtonStyleType = {
	theme?: keyof typeof buttonColors;
	size?: keyof typeof sizes;
	round?: 'normal' | 'rounded';
};

const buttonColors = {
	primary: {
		default: colors.primary,
		hover: 'transparent',
		text: colors.white,
		hoverText: colors.primary,
		border: colors.primary,
		hoverBorder: colors.primary
	}
};

const sizes = {
	sm: {
		fontSize: fontSizes.md,
		padding: '12px 20px'
	},
	md: {
		fontSize: fontSizes.md,
		padding: '15px 30px'
	},
	lg: {
		fontSize: fontSizes.xl,
		padding: '20px 30px'
	}
};

export const button = ({ theme = 'primary', size = 'md', round = 'rounded' }: ButtonStyleType) => css`
	display: inline-block;
	font-weight: 700;
	border-radius: ${round === 'normal' ? '4px' : '50px'};
	transition: all 0.3s;
	cursor: pointer;
	font-size: ${sizes[size].fontSize};
	padding: ${sizes[size].padding};
	background-color: ${buttonColors[theme].default};
	color: ${buttonColors[theme].text};
	border: 2px solid ${buttonColors[theme].border};
	text-decoration: none;

	&:hover {
		background-color: ${buttonColors[theme].hover};
		color: ${buttonColors[theme].hoverText};
		border: 2px solid ${buttonColors[theme].hoverBorder};
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;
