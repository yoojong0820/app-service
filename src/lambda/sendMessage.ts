import {SERVERLESS_API_ENDPOINT} from "../constants/Credentials";

export type SendMessageRequest = {
    userName: string
}

export type SendMessageResponse = {
    output: string,
    exitCode: number,
    message: string
}

export const sendMessage = (data: SendMessageRequest, handler: (output: string) => void) => {
    fetch(SERVERLESS_API_ENDPOINT +  "send-message", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((response: SendMessageResponse) => {
            if (response.exitCode !== 200) {
                throw new Error('send-message API call failed with message: ' + response.message)
            }
            handler(response.output);
        })
};
