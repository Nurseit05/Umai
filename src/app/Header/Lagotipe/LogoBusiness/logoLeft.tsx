import Image from 'next/image';
import React from 'react';

import '../style.scss'
import Link from 'next/link';

const LogoLeft = () => {
    return (
        <div className='flex items-center gap-6'> 
            <Link href='/'>
                <Image
                    src="/icons/logo.svg"
                    alt="Umai Logo"
                    width={99}
                    height={36.73}
                    // priority
                />
            </Link>
            <div className='line-divider'></div>
        </div>
    )
};

export default LogoLeft;
