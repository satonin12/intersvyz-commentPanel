import React, {FC} from 'react';

import {CommentFormStyled} from './style';
import {useCommentForm} from './useCommentForm';
import CommentFormFields from './CommentFormFields/CommentFormFields';

const CommentForm: FC = () => {
	const {
		useForm: {
			// control,
			onSubmit,
			handleSubmit,
		},
	} = useCommentForm();

	return (
		<ContainerMUI>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CommentFormFields />
			</form>
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = CommentFormStyled();

export default React.memo(CommentForm);
