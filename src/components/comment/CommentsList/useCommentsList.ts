import {useCallback} from 'react';
import {UseCommentSlice} from '../../../hooks/useCommentSlice';
import {useAppDispatch} from '../../../hooks/useReduxHooks';
import {decrement, increment} from '../../../store/reducers/commentReducer/commentSlice';

export const useCommentsList = () => {
	const dispatch = useAppDispatch();

	const {
		comments
	} = UseCommentSlice();

	const toggleRatingUp = useCallback((id: string): () => void => {
		return () => {
			dispatch(increment(id))
		}
	}, [])

	const toggleRatingDown = (id: string): () => void => {
		return () => {
			dispatch(decrement(id))
		}
	}

	return {
		values: {
			comments
		},
		handlers: {
			toggleRatingUp,
			toggleRatingDown
		}
	}
}
