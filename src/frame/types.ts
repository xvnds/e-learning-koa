export interface ICreateFrameBody {
    title: string;
    text: string;
    fromButtonId: number;
    storyId: number;
    frameTypeId?: number;
    buttons: Button[];
    frameBG?: FrameBG[];
}

export interface FrameBG {
    uri: string;
    type: string;
}

export interface Button {
    text: string;
    score: number;
    destinationId?: number;
    frameId?: number;
    buttonTypeId?: number;
}