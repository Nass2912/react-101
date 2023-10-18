import React, {useState} from 'react'

// // function syntax in JS ()=>{} or function(){}

// const Counter = (props) => {

//     const [counter, setCounter] = useState("class")
//     const Updatename = (event) => {
//         setCounter(event.target.value)
//     }

//     return (
//         <>
//             <h1>Hello {counter}, welcome to {props.workshop} </h1>
//             <input type='text' onChange={Updatename}></input>
//         </>
//     )
// }

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: "class"
        }
    }
    updatename(event){
        this.setState({counter: event.target.value})
    }

    render(){
        return(
            <>
                <h1>Hello {this.state.counter}, welcome to React 101 </h1>
                <input type='text' onChange={this.updatename}></input>
            </>
        )
    }
}

export default Counter;