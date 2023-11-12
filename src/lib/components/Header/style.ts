import { css } from '@emotion/css';
import { colors, fontSizes } from '../../constants/styles';

export const header = css`
	background-color: ${colors.white};
	position: sticky;

	a {
		color: ${colors.black};
	}
`;

export const wrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
`;

export const logo = css`
	width: 194px;
`;

export const menu = css`
	display: flex;
	align-items: center;
	gap: 40px;
`;

export const menuItem = ({ isActive }: { isActive: boolean }) => css`
	font-size: ${fontSizes.md};
	font-weight: 700;
	cursor: pointer;
	transition: color 0.3s;
	padding: 10px 0;
	transition: border-bottom 0.3s;

	${isActive &&
	css`
		border-bottom: 3px solid ${colors.primary};
	`}

	&:hover {
		border-bottom: 3px solid ${colors.primary};
	}
`;
