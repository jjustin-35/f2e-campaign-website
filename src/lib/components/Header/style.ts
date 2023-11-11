import { css } from '@emotion/css';
import { colors } from '../../constants/styles';

export const header = css`
	background-color: ${colors.primary};
	color: ${colors.white};
	position: sticky;

	a {
		color: ${colors.white};
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
