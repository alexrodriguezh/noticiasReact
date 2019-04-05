import React, { Component } from 'react';
import Noticia from './Noticia';

class Noticias extends Component {

    render() { 
        return ( 
            <div className="row">
                {this.props.noticias.map(i=>(
                    <Noticia 
                        key = {i.url}
                        noticias = {i}
                    />
                ))}
            </div>
         );
    }
}
 
export default Noticias;