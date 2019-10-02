import * as React from "react";
import SessionContext, {initialSession, Session} from "./index";

type Props = {}

type State = Session;

class SessionProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialSession,
            setGeolocation: this.setGeolocation
        };
        this.setGeolocation = this.setGeolocation.bind(this);
    }

    setGeolocation = (location: any, postalAddress: any, callback?: () => void) => {
        this.setState({
            geolocation: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                location:  postalAddress.street + ', ' + postalAddress.city + ', ' + postalAddress.region + ', ' + postalAddress.country
            }
        });
    };

    render() {
        return (
            <SessionContext.Provider value={this.state}>
                {this.props.children}
            </SessionContext.Provider>
        );
    }
}

export default SessionProvider;
