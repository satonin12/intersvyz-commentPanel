import React, {FC} from 'react';
import { Button } from '@mui/material';

import {CommentFormStyled} from './style';
import {useCommentForm} from './useCommentForm';
import CommentFormFields from './CommentFormFields/CommentFormFields';

const CommentForm: FC = () => {
	const {
		useForm: {
			control,
			onSubmit,
			handleSubmit,
		},
	} = useCommentForm();

	return (
		<ContainerMUI>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CommentFormFields control={control} />
				<Button variant="contained" type="submit">
					Отправить
				</Button>
			</form>
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = CommentFormStyled();

export default React.memo(CommentForm);
