export interface Banner {
    id: number;
    title: string;
    key_1: string;
    key_2: string;
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
  
export interface Blocks {
    id: number;
    title: string;
    text: string;
    image: string;
    image_mobile: string;
    action_text: string;
    action_url: string;
    action_hex_color: string;
    background_image: string | null;
    background_color: string;
    latitude: number | null;
    longitude: number | null;
    created_at: string;
}