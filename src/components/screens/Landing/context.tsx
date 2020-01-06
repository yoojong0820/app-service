import React from "react";
import SessionContext from "../../../context/Session";
import SomeDataContext from "../../../context/SomeData";
import Landing from ".";

export const LandingHandler: React.FC = () => {
    return (
        <SomeDataContext.Consumer>
            {({fieldA, fieldB, fieldC, userName}) =>
                <SessionContext.Consumer>
                    {({geolocation}) =>
                        <Landing
                            fieldA={fieldA}
                            fieldB={fieldB}
                            fieldC={fieldC}
                            userName={userName}
                            geolocation={geolocation}
                        />
                    }
                </SessionContext.Consumer>
            }
        </SomeDataContext.Consumer>
    );
};
