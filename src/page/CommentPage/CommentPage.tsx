import React, { FC } from 'react';

import { CommentPageStyled } from './style';
import CommentForm from '../../components/forms/commentForm/CommentForm';
import CommentsList from '../../components/comment/CommentsList/CommentsList';

/**
 * Страница комментариев
 * CommentForm - форма добавления комментария
 * CommentsList - отображение списка всех комментариев
 * @constructor
 */
const CommentPage: FC = () => {
	return (
		<WrapperMUI>
			<CommentForm />
			<CommentsList />
		</WrapperMUI>
	);
};

const { WrapperMUI } = CommentPageStyled();

export default React.memo(CommentPage);
