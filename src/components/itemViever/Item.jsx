import React from 'react'
import PropTypes from 'prop-types';

export default function Item({item, isFulldisplay}){

    if (!isFulldisplay){
        return (
            <> 
                <td>   
                    <img 
                    src={item.image_urls__icon} 
                    alt={item.name} 
                    className="item-icon" />
                </td>                
                <td>{item.name}</td>
                <td>{item.type__name}</td>
                <td>{item.level}</td>
            </>
          )
    }else{
        return(
        <>
                <td className="full_item" colSpan="4">

                    <div className="card">

                    <div className="card-header">
                        <img src={ item.image_urls__sd} alt={ item.name }/>
                        <h5 className="card-title">{item.name }</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Description: {item.description}</p>
                        <p className="card-text">Type: {item.type__name }</p>
                        <p className="card-text">Level: {item.level}</p>
                        <p className="card-text">Pods: {item.pods}</p>
                        <p className="card-text">Effects:</p>
                    </div>
                    </div>
                </td>

        </>)
    }

}

Item.propTypes = {
    item: PropTypes.shape({
        image_urls__icon: PropTypes.string,
        image_urls__sd: PropTypes.string,
        name: PropTypes.string,
        type__name: PropTypes.string,
        level: PropTypes.number,
        description: PropTypes.string,
        pods: PropTypes.number,
    }).isRequired,
    isFulldisplay: PropTypes.bool.isRequired,
};