export interface bannerProcessing {
    title: string;
    text: string;
    image: string;
    background: string;
}

export interface underBannerText {
    title_top: string;
    text_top: string;
    title_bottom: string;
    text_bottom: string;
}

export interface Interfaces_titleTS {
    title: string;
    sub_title: string;
    image: string;
    interfaces: Interfaces[];
}

export interface Interfaces {
    id?: string;
    image: string;
    title: string;
    content: string;
}

export interface AdvantagesTS {
    title: string;
    image: string;
    advantages_block: AdvantageDetailTS[];
}

export interface AdvantageDetailTS {
    id?: number | string;
    text: string;
}

export interface ProcessingServicesTS {
    id: number;
    title: string;
    image: string;
    content: string;
}

export interface ParticipantsTitleTS {
    title: string;
    processing_participants: ParticipantTS[];
}

export interface ParticipantTS {
    id?: number;
    image: string;
    title: string;
    text: string;
}

export interface SchemeTitleTS {
    title: string;
    sub_title: string;
    scheme_processing:  schemeProcessingTS[]
}

export interface schemeProcessingTS {
    id?: string | number;
    content: string;
}

export interface SystemsTitleTS {
    title: string;
    sub_title: string;
    text_bottom: string;
    types_systems: ProcessingSystemTS[];
}

export interface ProcessingSystemTS {
    id?: number;
    image: string;
    text: string;
}