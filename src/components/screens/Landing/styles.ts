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
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 40,
    marginBottom: 50,
    color: '#000',
    fontSize: 16,
};

const apiResult: TextStyle = {
    marginTop: 40,
    color: '#000',
    fontSize: 16,
};

export const styles = StyleSheet.create({
    imageBackground,
    container,
    wrapper,
    title,
    value,
    apiResult
});
