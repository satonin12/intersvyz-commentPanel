import { useAppSelector } from './useReduxHooks';

/**
 * хук для работы со слайсом комментариев
 * @constructor
 */
export const UseCommentSlice = () => {
	const comments = useAppSelector((state) => state.comments);

	return {
		...comments,
	};
};
