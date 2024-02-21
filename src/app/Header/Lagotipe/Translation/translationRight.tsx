import Image from 'next/image';
import React from 'react';

import '../style.scss'
import Link from 'next/link';

const TranslationRight = () => {
    return (
        <div className='flex items-center gap-8' >
           <section className='flex gap-2'>
                <Image
                    src="/icons/file.svg"
                    alt="file"
                    className='w-6 h-6'
                    width={24} height={24}
                />
                <Link href=''>ОФФЕРТА</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/icons/burgerLine.svg"
                    alt="file"
                    width={24} height={24}
                    className='w-6 h-6'
                />
                <Link href=''>Правила</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/icons/MapPin.svg"
                    alt="file"
                    className='w-6 h-6'
                    width={24} height={24}
                />
                <Link href=''>Офисы и банкоматы</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/icons/Globe.svg"
                    alt="file"
                    className='w-6 h-6'
                    width={24} height={24}
                />
                <Link href='' className='flex gap-2' >
                    Русский
                    <Image src="/icons/vectorDown.svg" alt="" width={11} height={11} />
                </Link>
           </section>
        </div>
    );
};

export default TranslationRight;