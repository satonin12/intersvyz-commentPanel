import React, {FC} from 'react';

import MainLayout from './layout/MainLayout/MainLayout';
import CommentPage from './page/CommentPage/CommentPage';

import './App.css';

const App: FC = () => {
	return (
		<MainLayout>
			<CommentPage/>
		</MainLayout>
	);
};

export default App;
