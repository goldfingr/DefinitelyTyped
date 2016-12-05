// Type definitions for react-native-sms
// Project: https://github.com/tkporter/react-native-sms
// Definitions by: Goldfingr
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-native-sms" {
    interface SendParams {
        body?: string;
        recipients?: Array<string>;
        successTypes?: Array<string>;
    }

    export function send(
        options: SendParams,
        callback?: (completed, cancelled, error) => void
    ): void;
}
