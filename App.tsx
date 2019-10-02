import React from 'react';
import {createAppContainer} from "react-navigation";
import {AppNavigator} from "./src/router/path";
import SessionProvider from "./src/context/Session/SessionProvider";
import SomeDataProvider from "./src/context/SomeData/SomeDataProvider";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <SessionProvider>
                <SomeDataProvider>
                    <AppContainer/>
                </SomeDataProvider>
            </SessionProvider>
        );
    }
}
