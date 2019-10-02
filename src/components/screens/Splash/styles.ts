import {StyleSheet, TextStyle, ViewStyle} from "react-native";

const imageBackground: ViewStyle = {
    flex: 1,
};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    marginTop: 100,
    alignItems: 'center',
};

const title: TextStyle = {
    color: '#fff',
    fontSize: 48,
    marginBottom: 20
};

const subtitle: TextStyle = {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 20,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
};

export const styles = StyleSheet.create({
    imageBackground,
    container,
    wrapper,
    title,
    subtitle,
    value
});
