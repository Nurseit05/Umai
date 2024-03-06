import React, { useEffect, useState } from 'react';

import s from './cardText.module.scss'
import Image from 'next/image';
import { getMainPage } from '@/api/service/main_Page';

export interface UpDates {
    title: string,
    text: string,
    action_text: string,
    action_path: void,
    created_at: string
}

const CardText = ({sizeDesktop}) => {

    const [upDates, setupDates] = useState<UpDates | undefined>(undefined);

    async function fetchData() {
        try {
            const res = await getMainPage();
            setupDates(res.data.updates);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (!upDates) {
        return null;
    }

    const createdAtDate = new Date(upDates.created_at);
    const formattedDate = `${String(createdAtDate.getDate()).padStart(2, '0')}.${String(createdAtDate.getMonth() + 1).padStart(2, '0')}.${createdAtDate.getFullYear()}`;

    return (
        <section className={s.containerPadding}>
            <div className={s.wrapperText}>
                <p>{upDates.title}</p>
                <button className={s.wrapperButton}>
                    {sizeDesktop && ( 
                        <>
                            <span>{upDates.action_text}</span>
                        </>
                        )  
                    }
                    <Image src='/icons/rightLineYellow.svg' alt=''
                        width={24} height={24}
                    />
                </button>
            </div>
            <div className={s.text}>
                <p>
                    {upDates.text}
                </p>
                <span>{formattedDate}</span>
            </div>    
        </section>
    );
};

export default CardText;