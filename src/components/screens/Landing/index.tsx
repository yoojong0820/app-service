import React from "react";
import {Text, View} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";


type Props = NavigationInjectedProps & {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    geolocation: Geolocation
}

type State = {}

class Landing extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{'Received values are below...'}</Text>
                    <Text style={styles.value}>{'fieldA value here: ' + this.props.fieldA.join('_')}</Text>
                    <Text style={{...styles.value, paddingHorizontal: 30}}>{
                        'geolocation value here\n\n' +
                        'latitude: ' + this.props.geolocation.latitude + '\n\n' +
                        'longitude: ' + this.props.geolocation.longitude + '\n\n' +
                        'location: ' + this.props.geolocation.location
                    }</Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
