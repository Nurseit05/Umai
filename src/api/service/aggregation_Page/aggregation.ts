export interface bannerAggregationTS {
    title: string;
    text: string;
    image: string;
    image_mobile: string;
}

export interface underBannerTextAggregationTS {
    title_top: string;
    text_top: string;
    title_bottom: string;
    text_bottom: string;
}

export interface advantagesTitleAggregationTS {
    title: string;
    advantages: advantagesAggregationTS[];
}

export interface advantagesAggregationTS {
    id?: string;
    image: string;
    title: string;
    text: string;
}

export interface forProvidersAggregationTS {
    title: string;
    text_top: string;
    text_middle: string;
    text_bottom: string;
    image: string;
}

export interface additionalAdvantagesAggregationTS {
    title: string;
    additional_advantages: additionalAdvantagesArrayTS[]
}

export interface additionalAdvantagesArrayTS {
    id?: string;
    text: string;
    image: string;
}

export interface forAdvertisersAggregationTS {
    title: string;
    text_1: string;
    text_2: string;
    audience: AudienceAggregationArrayTS[];
    text_3: string;
    text_4: string;
}

export interface AudienceAggregationArrayTS {
    id?: string | number;
    title: string;
    text: string;
}

export interface terminalAdvantagesAggregationTS {
    title: string;
    text: string;
    image: string;
}