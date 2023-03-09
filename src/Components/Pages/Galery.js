import React from "react";
// import { useNavigate } from "react-router-dom";
import data from "./../../assets/Data.json"
import Card from "./Card";

class Galery extends React.Component {

    state = {
        projList: data
    }

    // const navigate = useNavigate();
    // const goToProject = (event) => { 
    //     navigate("/project");
    // };


    render() {
        return (
        <div>
            {this.state.projList.map(d => {
                return (
                    <Card d={d} key={d.key} image={d.image}/>
                )
            })}

        </div>
        );
    }    
}

export default Galery;