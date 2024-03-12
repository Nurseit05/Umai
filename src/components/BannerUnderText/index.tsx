import React from 'react';
import DOMPurify from "isomorphic-dompurify";

import s from './bannerUnderText.module.scss'

interface Props {
    title: string,
    text: string
}

const BannerUnderText = ({
    title, text
}: Props) => {

    const cleanedHTML = DOMPurify.sanitize(text);

    return (
        <div className={s.container} >
            <h5>{title}</h5>
            <p dangerouslySetInnerHTML={{__html: cleanedHTML}}  />
        </div>
    );
};

export default BannerUnderText;