import { Box, styled, Typography } from '@mui/material';

export const CommentItemStyled = () => {
	const CardMUI = styled('div')(() => ({
		display: 'flex',

		padding: '5px',
		marginBottom: '5px',
		border: ' 1px solid rgb(253, 224, 255)',
	}));

	const RatingMUI = styled(Box)(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const BodyMUI = styled(Box)(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',

		padding: '5px 0 5px 10px',
	}));

	const HeaderMUI = styled(Box)(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const NameMUI = styled(Typography)(() => ({
		fontWeight: '700',
		fontStyle: 'normal',
		fontSize: '100%',

		marginRight: '10px',
	}));

	const TimeMUI = styled(Typography)(() => ({
		fontWeight: '500',
		fontSize: '12px',
		color: '#687a86',
	}));

	const TextMUI = styled(Typography)(() => ({
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '100%',
	}));

	const ArrowMUI = styled(Box)(() => ({
		display: 'inline-block',
		width: '25px',
		height: '25px',

		'&: hover': {
			backgroundColor: '#ffc0cb2e',
		},
	}));

	return {
		CardMUI,
		ArrowMUI,
		RatingMUI,
		BodyMUI,
		HeaderMUI,
		TextMUI,
		NameMUI,
		TimeMUI,
	};
};
