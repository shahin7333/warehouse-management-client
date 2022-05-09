import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitles = ({title}) => {
    return (
        <Helmet>
            <title>{title}-Bicycle Warehouse</title>
        </Helmet>
    );
};

export default PageTitles;