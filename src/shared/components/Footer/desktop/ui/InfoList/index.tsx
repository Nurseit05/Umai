import Image from 'next/image';

import s from './infoList.module.scss'

const arrayList = [
  {
    title: 'Частным клиентам',
    items: [
      'Депозиты',
      'Денежные переводы',
      'Кредиты',
      'Платежные карты',
      'Рассчетно-кассовое обслуживание',
      'Экстроу счет',
      'Индивидуальные сейфы',
      'Тарифы'
    ],
  },
  {
    title: 'Информация',
    items: [
      'Пользовательское соглашение',
      'Правила платежной системы UMAI',
      'Руководство пользователя'
    ],
  }
];

const InfoList = () => {
  return (
    <div className={s.container}>
      {arrayList.map((item) => (
        <section key={item.title} className={s.wrapper}>
          <div className={s.text}>
            <h3>{item.title}</h3>
            <Image src='/icons/rightLine.png' width={20} height={20} alt='>' />
          </div>
          <ul className={s.list}>
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default InfoList;
