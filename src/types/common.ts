export interface IMenu {
    title: string
    href?: string
    icon?: React.ReactNode
    key?: string | number
    children?: {
        title: string
        value: string | number
        key?: string | number
    }[]
}