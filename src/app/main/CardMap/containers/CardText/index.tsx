import React from 'react';

import s from './cardText.module.scss'
import Image from 'next/image';

const CardText = () => {
    return (
        <div className={s.containerPadding}>
            <div className={s.wrapperText}>
                <p>Обновления</p>
                <button className={s.wrapperButton}>
                    <span>ВСЕ </span>
                    <span>ОБНОВЛЕНИЯ</span>
                    <Image src='/icons/rightLineYellow.svg' alt=''
                        width={24} height={24}
                    />
                </button>
            </div>
            <div className={s.text}>
                <p>
                    Контролируйте Ваши расходы. Не можете вспомнить когда и какие счета Вы оплачивали? Это сложно. Оплачивая счета через кошелек UMAI, Вы всегда можете просмотреть Ваш «Журнал Транзакций» и убедится в том, что все Ваши счета оплачены и Ваши деньги работают на Вас.
                </p>
                <span>02.05.2022</span>
            </div>    
        </div>
    );
};

export default CardText;