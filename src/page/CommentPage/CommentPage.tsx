import React, {FC} from 'react';

import {CommentPageStyled} from './style';
import CommentForm from '../../components/forms/commentForm/CommentForm';
import CommentsList from '../../components/comment/CommentsList/CommentsList';
import CommentProvider from '../../store/Context/CommentProvider';

const CommentPage: FC = () => {
	return (
		<CommentProvider>
			<WrapperMUI>
				<CommentForm/>
				<CommentsList/>
			</WrapperMUI>
		</CommentProvider>

	);
};

const {WrapperMUI} = CommentPageStyled();

export default CommentPage;
