export interface Banner {
    id: number;
    title: string;
    key_1: string;
    key_2: string;
    text?: string,
    value_1: string;
    value_2: string;
    action_text: string;
    action_url: string;
    action_hex_color: string;
    image: string;
    background: string;
    image_mobile: string;
    background_mobile: string;
}

export interface MainPageAll {
    title: string,
    text: string,
    image: string,
    action_text?: string,
    action_path?: void,
    created_at?: string,
    background_image?: string,
    image_mobile?: string
}