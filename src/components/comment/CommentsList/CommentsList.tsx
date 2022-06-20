import React, {FC} from 'react';
import CommentItem from '../CommentItem/CommentItem';
import{useCommentsList} from './useCommentsList';

const CommentsList: FC = () => {
	const {
		values: {
			comment
		},
		handlers: {
			toggleRatingUp,
			toggleRatingDown
		}
	} = useCommentsList();

	return (
		<>
			{comment.map(item => (
				<CommentItem
					key={item.id}
					id={item.id}
					name={item.name}
					date={item.time}
					rating={item.rating}
					comment={item.comment}
					increment={toggleRatingUp}
					dicrement={toggleRatingDown}

				/>
			))}
		</>
	);
};

export default React.memo(CommentsList);
