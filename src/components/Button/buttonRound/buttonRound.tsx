import clsx from 'clsx'

import s from '../button.module.scss'
import Image from 'next/image'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

const ButtonRound = ({
    active,
    ...props
}: Props) => {

    const button = (
        <button
            {...props}
            className={clsx(
                s.button,
                props.className
            )}
        >
            {props.children}
            <div className={s.roundDiv}  >
                <Image src='/rightButton.png' 
                    width={11} height={5.5} alt='>'
                />
            </div>
        </button>
    )

    return <>{button}</>
}

export default ButtonRound