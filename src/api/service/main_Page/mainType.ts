export interface BannerMainTS {
    id: number;
    title: string;
    key_1: string;
    key_2: string;
    text?: string,
    value_1: string;
    value_2: string;
    action_text: string;
    action_path: string;
    action_url: string;
    action_hex_color: string;
    image: string;
    background: string;
    image_mobile: string;
    background_mobile: string;
}

export interface ServicesMainTS {
    id: number;
    title: string;
    text: string;
    image: string;
    action_text: string;
    action_path: string;
    background: string;
    background_image: string;
}

export interface AdditionalServicesMainTS {
    title: string;
    text: string;
    image: string;
    image_mobile: string;
    action_text: string;
    action_path: string;
}

export interface UpdatesMainTS {
    title: string;
    text: string;
    action_text: string;
    action_path: string;
    created_at: string;
}

export interface BranchesMainTS {
    title: string;
    image: string;
    action_text: string;
    action_path: string;
    background_image: string;
}