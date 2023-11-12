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
	primary: '#4527A0',
	secondary: '#26A69A',
	auxiliary: '#FFB300',
	decorate: '#EC407A',
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
    xxl: '36px',
    xxxl: '44px'
};

export const container = css`
	max-width: 1200px;
	margin: 0 auto;

	@media ${device.tablet} {
		max-width: 960px;
	}

	@media ${device.mobile} {
		max-width: 668px;
		padding: 0 16px;
	}
`;
