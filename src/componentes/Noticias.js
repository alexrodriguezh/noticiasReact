import React, { Component } from 'react';
import Noticia from './Noticia';
import Clima from './Clima';

class Noticias extends Component {

    render() { 
        return ( 
            <div className="row">
                <div className="col s12 m9 l9">
                    {this.props.noticias.map(i=>(
                        <Noticia 
                            key = {i.url}
                            noticias = {i}
                        />
                    ))}
                </div>
                <div className="col s12 m3 l3">
                    <Clima />
                </div>
            </div>
         );
    }
}
 
export default Noticias;