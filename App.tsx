import React from 'react';
import {createAppContainer} from "react-navigation";
import {AppNavigator} from "./src/router/path";
import SessionProvider from "./src/context/Session/SessionProvider";
import SomeDataProvider from "./src/context/SomeData/SomeDataProvider";

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = () => {
    return (
        <SessionProvider>
            <SomeDataProvider>
                <AppContainer/>
            </SomeDataProvider>
        </SessionProvider>
    );
};

export default App;
