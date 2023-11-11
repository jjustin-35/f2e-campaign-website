import { css } from '@emotion/css';

export const breakpoints = {
	desktop: 1440,
	tablet: 1024,
	mobile: 768
};

export const device = {
	desktop: `(max-width: ${breakpoints.desktop}px)`,
	tablet: `(max-width: ${breakpoints.tablet}px)`,
	mobile: `(max-width: ${breakpoints.mobile}px)`
};

export const colors = {
	primary: '#1D3D6C',
	secondary: '#D8B06C',
	auxiliary: '#F5F4EF',
	decorate_orange: '#FF9737',
	decorate_yellow: '#FFE48B',
	white: '#FFFFFF',
	black: '#000000',
	text: '#3D3A35'
};

export const fontSizes = {
    xxs: '14px',
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    xxl: '32px',
    xxxl: '40px'
};

export const container = css`
	max-width: 1080px;
	margin: 0 auto;

	@media ${device.tablet} {
		max-width: 960px;
	}

	@media ${device.mobile} {
		max-width: 668px;
		padding: 0 16px;
	}
`;
