import React from "react";
import SomeDataContext, {initialSomeData, SomeData} from "./index";

type Props = {}

type State = SomeData;

class SomeDataProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialSomeData,
        };
    }

    render() {
        return (
            <SomeDataContext.Provider value={this.state}>
                {this.props.children}
            </SomeDataContext.Provider>
        );
    }
}

export default SomeDataProvider;