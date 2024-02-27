import CardsBanner from './containers/CardsBanner';
import FixedPhone from './containers/FixedPhone';

import s from './bannerCards.module.scss'

const BannerCard = () => {
    return (
        <div className={s.container}>
            <section>
                <CardsBanner
                    title='Банерная и наружная рекламы'
                    subtitle='Реклама с UMAI это эффективно, интерактивно, удобно и не дорого!Сегодня сеть UMAI охватывает более 4 000 платежных терминалов по всей стране, ежемесячный размер аудитории составляет более 3,2 миллиона пользователей.'
                    className={s.atm} classText={s.atmText} imgSrc='/ATM.png'
                />
            </section>
            <FixedPhone/>
            <section className='flex gap-x-6'>
                <CardsBanner
                    title='Провайдерам' 
                    subtitle='UMAI помогает организовывать широкую сеть по сбору денег от населения без дополнительных затрат.'
                    className={s.bgColor} classText={s.provader}
                    imgSrc='/statistic.png'
                />
                <CardsBanner
                    title='Интернет ' titleBlue='Эквайринг' subtitle='Приём онлайн-платежей банковскими картами, электронными кошельками и через QR-код на вашем сайте и в мобильном приложении.'
                    className={s.bgColor} imgSrc='/cards.png' classText={s.card}
                />
            </section>
        </div>
    );
};

export default BannerCard;