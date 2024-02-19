import Image from 'next/image';
import React from 'react';

import '../style.scss'
import Link from 'next/link';

const TranslationRight = () => {
    return (
        <div className='flex items-center gap-8' >
           <section className='flex gap-2'>
                <Image
                    src="/file.svg"
                    alt="file"
                    className='img'
                    width={24} height={24}
                />
                <Link href=''>ОФФЕРТА</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/burgerLine.svg"
                    alt="file"
                    width={24} height={24}
                    className='img'
                />
                <Link href=''>Правила</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/MapPin.svg"
                    alt="file"
                    className='img'
                    width={24} height={24}
                />
                <Link href=''>Офисы и банкоматы</Link>
           </section>
           <section className='flex gap-2'>
                <Image
                    src="/Globe.svg"
                    alt="file"
                    className='img'
                    width={24} height={24}
                />
                <Link href='' className='flex gap-2' >
                    Русский
                    <Image src="/Vector.svg" alt="" width={11} height={11} />
                </Link>
           </section>
        </div>
    );
};

export default TranslationRight;