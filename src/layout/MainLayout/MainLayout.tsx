import React, {FC} from 'react';
import { Provider } from 'react-redux';

import ContentLayout from '../ContentLayout/ContentLayout';

import {MainLayoutStyled} from './style';
import {IChildren} from '../../types';
import {store} from '../../store/store';

const MainLayout : FC<IChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<MainLayoutMUI>
				<ContentLayout>
					{children}
				</ContentLayout>
			</MainLayoutMUI>
		</Provider>
	);
};

const {
	MainLayoutMUI,
} = MainLayoutStyled();

export default MainLayout;
