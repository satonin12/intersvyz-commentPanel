import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../../types';

interface ICommentState {
	comments: IComment[] | [];
}

/**
 * хранит массив комментариев вида IComment
 */
const initialState: ICommentState = {
	comments: [{
		avatar: "https://avatars.dicebear.com/api/male/:seed.svg",
		comment: "Повседневная практика показывает, что новая модель организационной деятельности требует определения и уточнения направлений прогрессивного развития.",
		email: "test@mail.ru",
		id: "l4o3otg0",
		name: "User 1",
		rating: 10,
		time: 1655811960335,
	}, {
			avatar: "https://avatars.dicebear.com/api/male/:seed.svg",
			comment: "Повседневная практика показывает, что новая модель организационной деятельности требует определения и уточнения направлений прогрессивного развития.\n" +
				"\n" +
				"Не следует, однако, забывать о том, что сложившаяся структура организации обеспечивает актуальность модели развития!",
			email: "test2@mail.ru",
			id: "l4o3otg0",
			name: "User 2",
			rating: -15,
			time: 1655811960335,
	}],
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment: (state, action) => {
			state.comments = [...state.comments, action.payload];
		},
		increment: (state, action) => {
			// TODO: refactor with immer
			const fArr = Object.assign([], state.comments);
			state.comments = fArr.map((item: IComment) => {
				return item.id === action.payload
					? { ...item, rating: item.rating + 1 }
					: item;
			});
		},
		decrement: (state, action) => {
			const fArr = Object.assign([], state.comments);
			state.comments = fArr.map((item: IComment) => {
				return item.id === action.payload
					? { ...item, rating: item.rating - 1 }
					: item;
			});
		}
	}
});

export const { addComment, increment, decrement } = commentSlice.actions;
export default commentSlice.reducer;
