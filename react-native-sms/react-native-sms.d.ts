// Type definitions for react-native-sms
// Project: https://github.com/tkporter/react-native-sms
// Definitions by: Goldfingr
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReactNativeSMSLibrary {

    interface SendParams {
        body?: string;
        recipients?: Array<string>;
        successTypes?: Array<string>;
    }


    interface ReactNativeSMSClass {
        send(options: SendParams, callback?: (completed, cancelled, error) => void): void;
    }
}

declare module "react-native-sms" {
    let ReactNativeSMS: ReactNativeSMSLibrary.ReactNativeSMSClass;
    export = ReactNativeSMS;
}
