import { useForm } from 'react-hook-form';
import { IComment, TCommentForm } from '../../../types';
import uniqid from 'uniqid';
import { useAppDispatch } from '../../../hooks/useReduxHooks';
import { addComment } from '../../../store/reducers/commentReducer/commentSlice';

/**
 * хук для работы с формой (вся логика компонента)
 */
export const useCommentForm = () => {
	const dispatch = useAppDispatch();
	const { control, handleSubmit, reset } = useForm<TCommentForm>({
		defaultValues: {
			comment: '',
			name: '',
			email: '',
		},
	});

	const onSubmit = async (data: TCommentForm) => {
		try {
			const id = uniqid();
			// получаем url рандомного аватара
			const avatarUrl = await fetch(
				`https://avatars.dicebear.com/api/male/${id}.svg`
			);

			const sendObject = {
				...data,
				id: id,
				time: Date.now(),
				rating: 0,
				avatar: avatarUrl.url,
			} as IComment;
			dispatch(addComment(sendObject));
			reset();
		} catch (e) {
			console.log('onSubmit-error: ', e);
		}
	};

	return {
		useForm: {
			control,
			onSubmit,
			handleSubmit,
		},
		formValues: {},
		formHandlers: {},
	};
};
