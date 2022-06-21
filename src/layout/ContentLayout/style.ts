import { styled } from '@mui/material';

export const ContentLayoutStyled = () => {
	const ContentLayoutMUI = styled('div')(() => ({
		margin: '0 auto',
		padding: '100px 0',
		maxWidth: '1440px',

		// border: '1px solid green',
	}));

	return {
		ContentLayoutMUI,
	};
};
