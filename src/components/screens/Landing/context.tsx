import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import SessionContext from "../../../context/Session";
import SomeDataContext from "../../../context/SomeData";
import Landing from ".";

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const LandingHandler: React.FC<Props> = (props: Props) => {
    return (
        <SomeDataContext.Consumer>
            {({fieldA, fieldB, fieldC, userName}) => {
                return (
                    <SessionContext.Consumer>
                        {({geolocation}) => {
                            return <Landing
                                fieldA={fieldA}
                                fieldB={fieldB}
                                fieldC={fieldC}
                                userName={userName}
                                geolocation={geolocation}
                            />
                        }}
                    </SessionContext.Consumer>
                )
            }}
        </SomeDataContext.Consumer>
    );
};
