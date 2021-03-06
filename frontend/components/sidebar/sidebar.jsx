import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faTrophy, faDiceD6, faFilm, faNewspaper } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let displayLogin = this.props.currentUser ? null :(
      <li className={'sideNavItem signIn'}>
        <h2>Log in to like videos <br />and comment</h2>
        <Link className={'login'} to={{
          pathname: "/login",
          aboutProps: {
            demo: false
          }
        }}>Login</Link>
      </li>)

    return (
      <div className={"sidebar"}>
        <ul className={"sideNav"}>
          <li className={"sideNavItem home"}>
            <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link>

          </li>
            {displayLogin}
          <li className={"sideNavItem bestOf"}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMusic} />Music
              </li>
              <li>
                <FontAwesomeIcon icon={faTrophy} />Sports
              </li>
              <li>
                <FontAwesomeIcon icon={faDiceD6} />Gaming
              </li>
              <li>
                <FontAwesomeIcon icon={faFilm} />Movies &amp; Shows
              </li>
              <li>
                <FontAwesomeIcon icon={faNewspaper} />News
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;