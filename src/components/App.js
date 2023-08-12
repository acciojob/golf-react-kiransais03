import React, {useState } from "react";
import '../styles/App.css';
import Ball from "./Ball";


//Class Based React

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;

const App = ()=>{

    let [btnclicked,setBtnclicked] = useState(false);
    
    return (<div className="playground">
         {(!btnclicked) && <button className="start" onClick={()=>{setBtnclicked(true)}}>Start</button>}
         <Ball btnclicked={btnclicked} setBtnclicked={setBtnclicked} />
    </div>)
}

export default App;