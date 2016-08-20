// Type definitions for PubNub 4.x
// Project: https://github.com/pubnub/javascript
// Definitions by: Georg Goettlich <https://github.com/dvine-multimedia>, based on http://codegists.com/snippet/typescript/pubnubdts_akankov_typescript
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PubNubLibrary {

    interface InitParams {
        subscribeKey: string;
        publishKey?: string;
        secretKey?: string;
        cipherKey?: string;
        authKey?: string;
        logVerbosity?: boolean;
        uuid?: string;
        ssl?: boolean;
        origin?: string;
        presenceTimeout?: number;
        heartbeatInterval?: number;
    }


    interface SubscribeParams {
        channel?: Array<string>;
        channelGroups?: Array<string>;
        withPresence?: boolean;
    }


    interface PublishParams {
        channel: string;
        message: JSON;
        storeInHistory?: boolean;
        sendByPost?: boolean;
        meta?: any;
    }

    interface UnsubscribeParams {
        channels?: Array<string>;
        channelGroups?: Array<string>;
    }

    interface ListenerParams {
        status?: (statusEvent) => void;
        message?: (message) => void;
        presence?: (presenceEvent) => void;
    }

    interface HistoryParams {
        channel: string;
        reverse?: boolean;
        count?: number;
        start?: number;
        end?: number;
        includeTimeToken?: boolean;
    }


    interface PubNubClass {
        new(params: InitParams): PubNubClass;
        publish(pubnubNotification: PublishParams, callback?: (status, response) => void): void;
        subscribe(params: SubscribeParams): void;
        unsubscribe(params: UnsubscribeParams): void;
        addListener(params: ListenerParams): void;
        history(params: HistoryParams, callback?: (status, response) => void): void;
    }
}

declare module "pubnub" {
    let PubNub: PubNubLibrary.PubNubClass;
    export = PubNub;
}