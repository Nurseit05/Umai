import InfoCards from '@/components/CardsList/cards';

import s from './bannerCards.module.scss'
import clsx from 'clsx';

const BannerCards = () => {
    return (
        <div className='container mx-auto' >
            <section className='gap-x-6 ' >
                <InfoCards
                    title='Банерная и наружная рекламы'
                    desc='Реклама с UMAI это эффективно, интерактивно, удобно и не дорого!Сегодня сеть UMAI охватывает более 4 000 платежных терминалов по всей стране, ежемесячный размер аудитории составляет более 3,2 миллиона пользователей.'
                    className={s.atm} classText={s.atmText} src='/ATM.png' button='Узнать подробнее' radius={false}
                />
            </section>
            <section className='flex gap-x-6 '>
                <InfoCards
                    title='Провайдерам' desc='UMAI помогает организовывать широкую сеть по сбору денег от населения без дополнительных затрат.'
                    radius={false} src='/statistic.png' classText={s.provader} button='Узнать подробнее'
                />
                <InfoCards
                    title='Интернет Эквайринг' desc='Приём онлайн-платежей банковскими картами, электронными кошельками и через QR-код на вашем сайте и в мобильном приложении.'
                    radius={false} src='/cards.png' classText={s.card} button='Узнать подробнее'
                />
            </section>
            <section className='flex gap-x-6'>
                <InfoCards
                    title='Обновления' desc='Контролируйте Ваши расходы. Не можете вспомнить когда и какие 
                    счета Вы оплачивали? Это сложно. Оплачивая счета через кошелек UMAI,
                    Вы всегда можете просмотреть Ваш «Журнал Транзакций» и убедится в том, что все
                    Ваши счета оплачены и Ваши деньги работают на Вас.'
                    className={clsx(s.newData)}
                />
                <InfoCards
                    title='Ближайшие' subtitle='Филиалы' color='blue'
                    className={clsx(s.cardMap)} button='Смотреть на карте' src='/map.png'
                />
            </section>
        </div>
    );  
};

export default BannerCards;