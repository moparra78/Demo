import React from 'react';
import Consultar from './Consultar';

class BotonConsultar extends React.Component {
 
    //onClick: render(event){
        //console.log(event.target.type);
    //}

    render(){
        return(
            <div className="BotonConsultar">                      
                <button type="button" onClick={Consultar}>Consultar</button>
            </div>
            
        );
    }
}

export default BotonConsultar;