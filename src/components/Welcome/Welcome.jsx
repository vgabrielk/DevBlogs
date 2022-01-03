import React from 'react';
import './Welcome.css'

import Fig from '../../assets/fig.svg'

const Welcome = () => {
    return (  
        <div className="welcome container">
            <div className="row">
                <div className="col-sm-6 col-lg-6">
            <div className="welcome__text">
                <h3 className='text-light'>Olá, seja<br/> bem vindo ao blog dos desenvolvedores!!</h3>
            </div>
                </div>
                <div className="col-sm-6 col-lg-6 container__fig">
                    <img className='fig' src={Fig} alt="Figura dev" />
                    </div>
            </div>
        </div>

    );
}
 
export default Welcome;