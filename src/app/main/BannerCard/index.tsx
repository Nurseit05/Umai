import InfoCards from '@/components/CardsList/cards';

import s from './bannerCards.module.scss'

const BannerCard = () => {
    return (
        <div className='container mx-auto' >
            <section className='gap-x-6' >
                <InfoCards
                    title='Банерная и наружная рекламы'
                    desc='Реклама с UMAI это эффективно, интерактивно, удобно и не дорого!Сегодня сеть UMAI охватывает более 4 000 платежных терминалов по всей стране, ежемесячный размер аудитории составляет более 3,2 миллиона пользователей.'
                    className={s.atm} classText={s.atmText} imgSrc='/ATM.png' button='Узнать подробнее' roundButton={false}
                />
            </section>
            <section className='flex gap-x-6'>
                <InfoCards
                    title='Провайдерам' 
                    desc='UMAI помогает организовывать широкую сеть по сбору денег от населения без дополнительных затрат.'
                    roundButton={false} 
                    className={s.bgColor} classText={s.provader}
                    imgSrc='/statistic.png'
                    button='Узнать подробнее'
                />
                <InfoCards
                    title='Интернет Эквайринг' desc='Приём онлайн-платежей банковскими картами, электронными кошельками и через QR-код на вашем сайте и в мобильном приложении.'
                    roundButton={false} className={s.bgColor} imgSrc='/cards.png' classText={s.card} button='Узнать подробнее'
                />
            </section>
        </div>
    );  
};

export default BannerCard;