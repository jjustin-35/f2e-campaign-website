import { css } from '@emotion/css';

export const outer = css`
	background-color: #afafaf;
`;

export const banner = css`
	display: flex;
	align-items: center;
	width: 100%;
	position: relative;
`;

export const titleImage = css`
	max-width: 700px;
`;

export const bannerImage = css`
	position: relative;
	margin-left: -72px;
	z-index: 1;
`;

export const rightBgLetter = css`
	position: absolute;
	top: 5%;
	right: 5%;
`;

export const leftBgLetter = css`
	position: absolute;
	bottom: 2%;
	left: 3%;
`;
