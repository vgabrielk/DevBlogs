import React from 'react';
import Button from './Button/Button';
import './New.css'
const New = ({text}) => {

    

    return ( 


        <div className="new">
            <div className="new__text">
                <p className='text-light'>
                    {text}
                </p>
            </div>
            <Button/>
        </div>
     );
}
 
export default New;