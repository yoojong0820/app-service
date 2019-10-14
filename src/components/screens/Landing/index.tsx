import React from "react";
import {Button, Text, View} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";
import {SERVER_API_ENDPOINT, SERVERLESS_API_ENDPOINT} from "../../../constants/Credentials";


type Props = NavigationInjectedProps & {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    userName: string,
    geolocation: Geolocation
}

type State = {
    buttonResponse: string
}

type SendMessageRequest = {
    userName: string
}

type SendMessageResponse = {
    output: string,
    exitCode: number,
    message: string
}

class Landing extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            buttonResponse: ''
        }
    }

    _trigger = () => {
        let bodyValue: SendMessageRequest = {userName: this.props.userName};
        fetch(SERVER_API_ENDPOINT +  "send-message", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bodyValue)
        })
            .then(response => response.json())
            .then((response: SendMessageResponse) => {
                if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                }
                this.setState({buttonResponse: response.output});
            })
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{'Received values are below...'}</Text>
                    <Text style={styles.value}>{'fieldA value here: ' + this.props.fieldA.join('_')}</Text>
                    <Text style={styles.value}>{'userName: ' + this.props.userName}</Text>
                    <Text style={{...styles.value, paddingHorizontal: 30}}>{
                        'geolocation value here\n\n' +
                        'latitude: ' + this.props.geolocation.latitude + '\n\n' +
                        'longitude: ' + this.props.geolocation.longitude + '\n\n' +
                        'location: ' + this.props.geolocation.location
                    }</Text>
                    <Button title={"Trigger API"} onPress={this._trigger}/>
                    <Text style={styles.apiResult}>{this.state.buttonResponse}</Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
