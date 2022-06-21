import { styled } from '@mui/material';

export const CommentFormFieldsStyled = () => {
	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		marginBottom: '20px',
	}));

	const TextFieldSx = {
		width: '600px',
		marginRight: '15px',
	};

	return {
		ContainerMUI,
		TextFieldSx,
	};
};
