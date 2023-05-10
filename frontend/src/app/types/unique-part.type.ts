export interface KeyValueData {
    key: string;
    value: string;
}

export interface LinkData {
    name: string;
    url: string;
}

export interface ImageData {
    alt: string;
    src: string;
}

export interface UniquePart {
    id: string;
    data: KeyValueData[] | LinkData[] | ImageData[]; 
}

export interface UniquePartUpdateDto {
    id: string;
    data: KeyValueData[] | LinkData[] | ImageData[]; 
}

export interface UniquePartDeleteDto {
    id: string;
}
