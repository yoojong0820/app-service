import React from "react";
import {Button, Text, View} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";
import {sendMessage} from "../../../lambda/sendMessage";


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

class Landing extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            buttonResponse: ''
        }
    }

    _trigger = () => {
        const {userName} = this.props;
        sendMessage({userName: userName}, output => this.setState({buttonResponse: output}));
    };

    render() {
        const {fieldA, userName, geolocation} = this.props;
        const {latitude, longitude, location} = geolocation;
        const message = `geolocation\n latitude: ${latitude}\n longitude: ${longitude}\n location: ${location}`;

        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{'Received values are below...'}</Text>
                    <Text style={styles.value}>{'fieldA value here: ' + fieldA.join('_')}</Text>
                    <Text style={styles.value}>{'userName: ' + userName}</Text>
                    <Text style={{...styles.value, paddingHorizontal: 30, lineHeight: 30}}>{message}</Text>
                    <Button title={"Trigger API"} onPress={this._trigger}/>
                    <Text style={styles.apiResult}>{this.state.buttonResponse}</Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
