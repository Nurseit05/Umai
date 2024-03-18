import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

import s from './bannerUnderText.module.scss'
import clsx from 'clsx';

interface Props {
    title: string;
    text: string;
    classContainer?: string;
}

const BannerUnderText = ({
    title, text, classContainer
}: Props) => {

    const cleanedHTML = DOMPurify.sanitize(text);

    return (
        <div className={clsx(s.container, classContainer)} >
            <h5>{title}</h5>
            <p dangerouslySetInnerHTML={{__html: cleanedHTML}}  />
        </div>
    );
};

export default BannerUnderText;