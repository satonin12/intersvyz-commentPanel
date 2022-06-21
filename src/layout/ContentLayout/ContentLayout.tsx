import React, { FC } from 'react';
import { IChildren } from '../../types';

import { ContentLayoutStyled } from './style';

const ContentLayout: FC<IChildren> = ({ children }) => {
	return <ContentLayoutMUI>{children}</ContentLayoutMUI>;
};

const { ContentLayoutMUI } = ContentLayoutStyled();

export default ContentLayout;
