import {useCallback, useContext} from 'react';
import {CommentCTX} from '../../../store/Context/CommentProvider';

export const useCommentsList = () => {
	const {
		comment, setComment
	} = useContext(CommentCTX);

	console.log('comment: ', comment);

	const toggleRatingUp = useCallback((id: string): () => void => {
		return () => {
			const filteredArr = comment.map(item => {
				return item.id === id ? {...item, rating: item.rating++} : item
			})
			console.log('toggleRatingUp: ', filteredArr);
			setComment(filteredArr);
		}
	}, [comment])

	const toggleRatingDown = (id: string): () => void => {
		return () => {
			const filteredArr = comment.map(item => {
				return item.id === id ? {...item, rating: item.rating--} : item
			})
			console.log('toggleRatingDown: ', filteredArr);
			setComment(filteredArr);
		}
	}

	return {
		values: {
			comment
		},
		handlers: {
			toggleRatingUp,
			toggleRatingDown
		}
	}
}
