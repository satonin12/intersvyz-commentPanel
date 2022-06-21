import React, {FC} from 'react';

import {CommentPageStyled} from './style';
import CommentForm from '../../components/forms/commentForm/CommentForm';
import CommentsList from '../../components/comment/CommentsList/CommentsList';

const CommentPage: FC = () => {
	return (
		<WrapperMUI>
			<CommentForm/>
			<CommentsList/>
		</WrapperMUI>

	);
};

const {WrapperMUI} = CommentPageStyled();

export default CommentPage;
