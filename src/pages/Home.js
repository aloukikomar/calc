import React ,{ Component } from "react";
import Calculater from "../components/Calculater";
class Home extends Component{
    constructor(props) {
        super(props);
    }

render(){
    return(
<div>
        <Calculater />
</div>

    )
}
     
};

export default Home;