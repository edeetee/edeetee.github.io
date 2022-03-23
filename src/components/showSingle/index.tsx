import { Component, Key, ReactNode } from "react";

interface ShowSingleState{
    selectedItem?: JSX.Element
}

interface ShowSingleProps extends ShowSingleState{
    
}

export class ShowSingle extends Component<ShowSingleProps, ShowSingleState>{
    // elements: Element[]

    constructor(props: ShowSingleProps = {}){
        super(props)
        this.state = {
            selectedItem: props.selectedItem
        }
        // this.elements = props.items
    }

    setSelectedItem(element: JSX.Element){
        this.setState({selectedItem: element})
    }

    render() {
        return <div>{this.state.selectedItem}</div> || <div></div>
    }
}