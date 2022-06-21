import { styled } from '@mui/material';

export const MainLayoutStyled = () => {
	const MainLayoutMUI = styled('div')(() => ({
		padding: '0',
		margin: '0',
		width: '100%',
		height: '100vh',

		boxSizing: 'border-box',

		// border: '1px solid blue',
	}));

	return {
		MainLayoutMUI,
	};
};
