import React, {FC, useContext} from 'react';
import CommentItem from '../CommentItem/CommentItem';
import {CommentCTX} from '../../../store/Context/CommentProvider';

const CommentsList : FC = () => {

	const {
		comment
	} = useContext(CommentCTX);

	console.log('comment: ', comment);

	return (
		<>
			{[1, 2].map(i => (
				<CommentItem key={i} />
			))}
		</>
	);
};

export default React.memo(CommentsList);
