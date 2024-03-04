import clsx from 'clsx';
import { forwardRef } from 'react';

import s from './icon.module.scss';
import Image from 'next/image';

interface Props {
    className?: string;
    width?: number;
    height?: number;
    alt?: string;
    srcImg: string;
    onClick?(): void;
    style?: React.CSSProperties;
}

const Icon = forwardRef<HTMLSpanElement, Props>(
    (
        { className, width = 20, height = 20, srcImg, alt, onClick, ...props }: Props,
        ref
    ) => {
        return (
            <span ref={ref} {...props} onClick={onClick} className={className}>
                <Image  
                    width={width} height={height}
                    className={clsx(s.icon, onClick && s.pointer)}
                    src={srcImg} alt={alt || ''}
                />
            </span>
        );
    }
);

// Установите displayName для компонента
Icon.displayName = 'Icon';

export default Icon;
