import { useNavigate } from "react-router-dom";

function Project() {
    const navigate = useNavigate();
    const goToGalery = () => navigate("/galery");

    return (<button onClick={goToGalery}>Go back to galery</button>);
}

export default Project;