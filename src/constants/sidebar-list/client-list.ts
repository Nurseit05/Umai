import { IMenu } from '@/types/common'

export const CLIENT_LIST: IMenu[] = [
    {
        title: 'Частным клиентам',
        children: [
            {
                title: 'Депозиты',
                value: '/'
            },
            {
                title: 'Денежные переводы',
                value: '/'
            },
            {
                title: 'Кредиты',
                value: '/'
            },
            {
                title: 'Платежные карты',
                value: '/'
            },
            {
                title: 'Рассчетно-кассовое обслуживание',
                value: '/'
            },
            {
                title: 'Экстроу счет',
                value: '/'
            },
            {
                title: 'Индивидуальные сейфы',
                value: '/'
            },
            {
                title: 'Тарифы',
                value: '/'
            },
        ],
    }
]
