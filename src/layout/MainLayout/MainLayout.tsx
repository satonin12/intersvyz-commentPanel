import React, {FC} from 'react';

import ContentLayout from '../ContentLayout/ContentLayout';

import {MainLayoutStyled} from './style';
import {IChildren} from '../../types';

const MainLayout : FC<IChildren> = ({ children }) => {
	return (
		<MainLayoutMUI>
			<ContentLayout>
				{children}
			</ContentLayout>
		</MainLayoutMUI>
	);
};

const {
	MainLayoutMUI,
} = MainLayoutStyled();

export default MainLayout;
