export interface bannerAcquiringTS {
    title: string;
    text: string;
    image: string;
}

export interface internetAcquiringTS {
    title: string;
    text: string;
    text_2: string;
    image: string;
}

export interface advantagesTitleAcquiringTS {
    title: string;
    acquiring_advantages: acquiringAdvantagesArrayTS[];
}

interface acquiringAdvantagesArrayTS {
    id?: number;
    text: string;
    image: string;
}

export interface possiblitesAcquiringTS {
    title: string;
    text: string;
    image: string;
}