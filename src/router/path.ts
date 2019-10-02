import {createStackNavigator} from "react-navigation-stack";
import SplashHandler from "../components/screens/Splash/context";
import {LandingHandler} from "../components/screens/Landing/context";

export const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashHandler,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Landing: {
        screen: LandingHandler,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    }
});