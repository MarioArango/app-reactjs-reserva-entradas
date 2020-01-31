import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class BadgeList extends React.Component{
    render(){
        return(
            <div>
                <ul className='list-unstyled'>
                    {this.props.data.map(usuario => {
                        return (
                          <div>
                            <li key={usuario.id}>
                              <p>
                                {usuario.firstName} {usuario.lastName}
                              </p>
                                <img src={usuario.avatarUrl} alt="Perfil"/>
                              <span style={{ color: "#00acee" }}>
                                <FontAwesomeIcon icon={faTwitter} /> @
                                {usuario.twitter}
                              </span>
                            </li>
                          </div>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgeList