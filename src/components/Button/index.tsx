import clsx from 'clsx'

import s from './button.module.scss'
import Image from 'next/image'

export type ButtonColor =
    | 'blue'
    | 'orange'
const colors: Record<ButtonColor, string> = {
    blue: s.blue,
    orange: s.orange
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor,
    radius?: boolean | string
}

const Button = ({
    color = 'orange',
    radius,
    ...props
}: Props)  => {
    const button = (
        <button
            {...props}
            className={clsx(
                props.className,
                s.button,
                colors[color],
            )}
        />
    )

    const buttonRound = (
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

    return <>{radius ? buttonRound : button}</>
}

export default Button