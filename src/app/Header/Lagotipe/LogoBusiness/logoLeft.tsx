import Image from 'next/image';
import React from 'react';

import '../style.scss'
import Link from 'next/link';

const LogoLeft = () => {
    return (
        <div className='flex items-center gap-6'> 
            <Image
                src="/logo.svg"
                alt="Umai Logo"
                width={99}
                height={36.73}
                // priority
            />
            <div className='line-divider'></div>
            <div className='flex justify-between gap-6'> 
                <Link href=''>ДЛЯ ВАС</Link>
                <Link href=''>ДЛЯ БИЗНЕСА</Link>
            </div>
        </div>
    )
};

export default LogoLeft;
