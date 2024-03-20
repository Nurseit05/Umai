import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const LogoLeft = () => {
    return (
        <Link href='/'>
            <Image
                src="/icons/logo.svg"
                alt="Umai Logo"
                width={99}
                height={36.73}
                priority={true}
            />
        </Link>
    )
};

export default LogoLeft;
