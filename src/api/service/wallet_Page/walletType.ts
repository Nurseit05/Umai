export interface BannerTS {
    title: string;
    text: string;
    image: string;
    background: string;
    action_1_path: string;
    action_1_text: string;
    action_1_color: string;
    action_1_image: string;
    action_2_path: string;
    action_2_text: string;
    action_2_color: string;
    action_2_image: string;
    download_text: string;
}

export interface ServicesTS {
    id?: number | string;
    title: string;
    text: string;
    image: string;
    background: string;
    // background_mobile: string;
}
  
export interface AdvantagesTS {
    title: string;
    wallet_advantages: WalletAdvantageTS[];
}

export interface WalletAdvantageTS {
    id: number;
    image: string;
    text: string;
}
  