import React,{Component} from "react";
import './TheMap.css';

class TheMap extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid tausta-4 text-center">
                        <h3>Kirpputorit, kierrätyskeskukset, kontit ja Sorttiasemat</h3><br/>
                        <div><iframe className="map-component" src="https://www.google.com/maps/d/embed?mid=1Ad3ThL2WNF6NgCMawXBaFSNvLjx992er"></iframe></div>
                    <br></br><br></br><br></br><br></br>
                    <br/>
                </div>
            </div>
        );
    }
}

export default TheMap;