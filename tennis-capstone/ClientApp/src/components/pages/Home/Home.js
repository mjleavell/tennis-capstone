import React from 'react';
import {
  Card,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Link to='/tournaments' className='card-link'>
          <Card>
            <CardBody>
              <h3 className="card-title">Tournaments</h3>
            </CardBody>
          </Card>
        </Link>
        <Link to='/rankings' className='card-link'>
          <Card>
            <CardBody>
              <h3 className="card-title">Rankings</h3>
            </CardBody>
          </Card>
        </Link>
        <Link to='/favorites' className='card-link'>
          <Card>
            <CardBody>
              <h3 className="card-title">Favorites</h3>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Home;
