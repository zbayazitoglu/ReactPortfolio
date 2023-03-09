import React from "react";
// import { useNavigate } from "react-router-dom";
// class Card extends React.Component(props) {
//     state = {
//         impath: this.props.d.image
//     }

//     render(){
//         return ( 
//             <div className="card" style={{width: 18 + 'rem'}} id={props.d.key}>
//                 <img className="card-img-top" src="/Users/zeynep/bootcamp/ReactPortfolio/src/assets/image/Engneer.png" alt={props.d.title}/>
//                 <div className="card-body">
//                     <h5 className="card-title">{props.d.title}</h5>
//                 </div>
//             </div>
//             )
//     }
    
// }

function Card(props){
    const navigate = useNavigate();
    const goToProject = (event) => { 
        navigate("/project");
    };
    //const impath= require(props.image);
    return ( 
        <div className="card" style={{width: 18 + 'rem'}} id={props.d.key}>
            <img className="card-img-top" src="" alt={props.d.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.d.title}</h5>
                <a href="" className="btn btn-primary" onClick={goToProject}>Go Project</a>
            </div>
        </div>
    );
}

export default Card;