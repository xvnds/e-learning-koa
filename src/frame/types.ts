export interface ICreateFrameBody {
    title: string;
    text: string;
    fromButtonId: number;
    storyId: number;
    frameTypeId?: number;
    buttons: Button[];
    bgUri?: string;
}

export interface Button {
    text: string;
    score: number;
    destinationId?: number;
    frameId?: number;
    buttonTypeId?: number;
}