import React, { FC } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import { useCommentsList } from './useCommentsList';
import { IComment } from '../../../types';

import { CommentListStyled } from './style';

const CommentsList: FC = () => {
	const {
		values: { comments },
		handlers: { toggleRatingUp, toggleRatingDown },
	} = useCommentsList();

	return (
		<ContainerMUI>
			{comments.map((item: IComment) => (
				<CommentItem
					key={item.id}
					commentItem={item}
					increment={toggleRatingUp}
					dicrement={toggleRatingDown}
				/>
			))}
		</ContainerMUI>
	);
};

const { ContainerMUI } = CommentListStyled();

export default React.memo(CommentsList);
