import React, { FC } from 'react';

import { CommentFormStyled } from './style';
import { useCommentForm } from './useCommentForm';
import CommentFormFields from './CommentFormFields/CommentFormFields';

const CommentForm: FC = () => {

	const {
		useForm: { control, onSubmit, handleSubmit },
	} = useCommentForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ContainerMUI>
				<CommentFormFields control={control} />
			</ContainerMUI>
		</form>
	);
};

const { ContainerMUI } = CommentFormStyled();

export default React.memo(CommentForm);
