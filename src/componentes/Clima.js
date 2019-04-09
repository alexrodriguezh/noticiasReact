import React from 'react'

const Clima = (props) => {


        return ( 
            <div className="col s12 m12 l12">
                <table className="tablaCiudad">
                        <thead>
                        <tr>
                            <th>Ciudad</th>
                            <th>Temperatura</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Huaraz</td>
                            <td>Eclair</td>
                        </tr>
                        <tr>
                            <td>Chimbote</td>
                            <td>Jellybean</td>
                        </tr>
                        <tr>
                            <td>Nuevo Chimbote</td>
                            <td>Lollipop</td>
                        </tr>
                        <tr>
                            <td>Casma</td>
                            <td>Lollipop</td>
                        </tr>
                        <tr>
                            <td>Huarmey</td>
                            <td>Lollipop</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
         );
    
}
 
export default Clima;