import React,{Component} from "react";
import "./Botti";
import BottiPic from "./NewBot.png";

class Botti extends Component {
    constructor() {
        super();
        this.state = {
            shown: true
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
            hidden : !this.state.hidden
        });
    }

    render() {
        let hidden = {
            display: this.state.hidden ? "block" : "none"
        };

        return (
            <div>
                <a className="toggle-a" onClick={this.toggle.bind(this)}>
                    <img  className="botti"  alt="botti" src={BottiPic} width="340" height="340"/></a>
                <p>Aloita botille juttelu klikkaamalla logoa</p>
                <div style={hidden}>
                    <div title="presentBot" className="container-fluid tausta-4 text-center">
                        <h3>Kysy minulta lahjoista!</h3><br/>
                            <iframe title="presentbot"
                                allow="microphone;"
                                width="350"
                                height="430"
                                src="https://console.dialogflow.com/api-client/demo/embedded/d3a63bf6-ccf8-4ac3-8584-2403a551aa89"/>
                        </div>
                </div>
                    <div className="botti"></div>
                    <br></br><br></br><br></br><br></br>
                    </div>

        );
    }
}

export default Botti;