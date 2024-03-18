'use client'

import ListDropDown from '@/shared/components/ListDropDown';
import { CLIENT_LIST } from '@/shared/constants/sidebar-list/client-list';
import { INFORMATION_LIST } from '@/shared/constants/sidebar-list/information-list';

import { IMenu } from '@/types/common'; 

import { useRouter } from 'next/navigation';

const RenderListDrop = () => {

    const navigate = useRouter();

    const goToPage = (path: { title: string; value: string }) => {
        navigate.push(path.value)
    }

    const renderMenuItem = (item: IMenu) => {
        if (item?.children?.length) {
            return (
                <ListDropDown
                    key={item.title}
                    onClick={goToPage}
                    icon={item.icon}
                    title={item.title}
                    list={item?.children}
                />
            )
        }
    }

    return (
        <div>
            {CLIENT_LIST.map(item => renderMenuItem(item))}
            <hr className='mt-2 mb-2' />
            {INFORMATION_LIST.map(item => renderMenuItem(item))}
        </div>
    );
};

export default RenderListDrop;