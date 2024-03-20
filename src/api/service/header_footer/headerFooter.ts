export type HeaderFooter = {
    header_sub_items: HeaderSubItemTS[]
    footer_social: FooterSocialTS[]
    footer_contacts: FooterContactTS[]
}
  
export type HeaderSubItemTS = {
    id: number
    title: string
    path: string
}
  
export type FooterSocialTS = {
    id: number
    image: string
    path: string
}
  
export type FooterContactTS = {
    id: number
    image: string
    title: string
    text: string
    path: string
}