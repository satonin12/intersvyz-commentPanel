import { useCallback, MouseEventHandler } from 'react';
import { UseCommentSlice } from '../../../hooks/useCommentSlice';
import { useAppDispatch } from '../../../hooks/useReduxHooks';
import {
	decrement,
	increment,
} from '../../../store/reducers/commentReducer/commentSlice';

export const useCommentsList = () => {
	const dispatch = useAppDispatch();

	const { comments } = UseCommentSlice();

	const toggleRatingUp = useCallback(
		(id: string): MouseEventHandler<HTMLDivElement> => {
			return (): void => {
				dispatch(increment(id));
			};
		},
		[comments]
	);

	const toggleRatingDown = useCallback(
		(id: string): MouseEventHandler<HTMLDivElement> => {
			return (): void => {
				dispatch(decrement(id));
			};
		},
		[comments]
	);

	return {
		values: {
			comments,
		},
		handlers: {
			toggleRatingUp,
			toggleRatingDown,
		},
	};
};
