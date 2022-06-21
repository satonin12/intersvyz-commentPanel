import { useAppSelector } from './useReduxHooks';

export const UseCommentSlice = () => {
	const comments = useAppSelector((state) => state.comments);

	return {
		...comments,
	};
};
