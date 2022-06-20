import React, {FC, useState, createContext} from 'react';
import { IChildren } from '../../types';

export const CommentCTX = createContext({});

const CommentProvider : FC<IChildren> = ({children}) => {
	const [comment, setComment] = useState([]);

	return (
		<CommentCTX.Provider value={{comment, setComment}}>
			{children}
		</CommentCTX.Provider>
	);
};

export default CommentProvider;
