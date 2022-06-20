import React, {FC} from 'react';
import CommentItem from '../CommentItem/CommentItem';

const CommentsList : FC = () => {
	return (
		<>
			{[1, 2].map(i => (
				<CommentItem key={i} />
			))}
		</>
	);
};

export default React.memo(CommentsList);
