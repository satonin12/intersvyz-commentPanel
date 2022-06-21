import {createSlice} from '@reduxjs/toolkit';
import {IComment} from '../../../types';

interface ICommentState {
	comments: IComment[] | []
}

const initialState : ICommentState = {
	comments: []
}

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment: (state, action) => {
			state.comments = [...state.comments, action.payload]
		},
		increment: (state, action) => {
			// TODO: refactor with immer
			const fArr = Object.assign([], state.comments);
			state.comments = fArr.map((item: IComment) => {
				return item.id === action.payload ? {...item, rating: item.rating + 1} : item
			})
		},
		decrement: (state, action) => {
			const fArr = Object.assign([], state.comments);
			state.comments = fArr.map((item: IComment) => {
				return item.id === action.payload ? {...item, rating: item.rating - 1} : item
			})
		}
	}
})

export const {addComment, increment, decrement} = commentSlice.actions
export default commentSlice.reducer
