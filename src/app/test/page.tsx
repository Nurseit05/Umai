import { clientApi } from '@/api/config/axios'
import { getMainPage } from '@/api/service/main_Page'
import React, { cache } from 'react';

interface Props {
    url: string;
    test: string
}


const page = async () => {

    const getData = cache(async () => {
        let faq
    
        try {
            const { data } = await clientApi.get<Props>(`mainpage/get_main/`)
            faq = data.test
            return faq
        } catch (e) {}
    })
    
    const revalidate = 60 * 60 * 100
    

    const data = await getData()

    console.log(data)
    return (
        <div>
            {data?.branches?.title}
        </div>
    );
};

export default page;