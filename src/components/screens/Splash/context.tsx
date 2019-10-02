import React from "react";
import Splash from "./index";
import SomeDataContext from "../../../context/SomeData";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import SessionContext from "../../../context/Session";

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

class SplashHandler extends React.Component<Props> {

    render() {
        return (
            <SomeDataContext.Consumer>
                {({fieldA, fieldB, fieldC}) => {
                    return (
                        <SessionContext.Consumer>
                            {({geolocation, setGeolocation}) => {
                                return <Splash
                                    fieldA={fieldA}
                                    fieldB={fieldB}
                                    fieldC={fieldC}
                                    geolocation={geolocation}
                                    setGeolocation={setGeolocation}
                                />
                            }}
                        </SessionContext.Consumer>
                    )
                }}
            </SomeDataContext.Consumer>
        );
    };
}

export default SplashHandler;
