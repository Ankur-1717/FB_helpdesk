import React from 'react'
import './styles.modules.css';
import richPanelIcon from '../../assets/images/richPanelIcon.png';
import dashBoardIcon from '../../assets/images/dashBoardIcon.jpeg';
import profileIcon from '../../assets/images/profileIcon.png';
import tradingIcon from '../../assets/images/tradingGraphIcon.png';
import customerIcon from '../../assets/images/customer.jpeg'
import rich from '../../assets/images/rich.png'
import trade3 from '../../assets/images/trade3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUserGroup } from '@fortawesome/free-solid-svg-icons'


import {Row} from 'reactstrap';

const Navigation =()=> {
  return (
    <div className='containers' style={{background:"rgba(15,78,151,255)"}}>
       <Row>
          <img className = 'navIcon' src={rich} />
       </Row>
       <Row >
       <FontAwesomeIcon className='icon2'  icon={faEnvelope} />
       </Row>
       <Row>
       <FontAwesomeIcon className='icon3' icon={faUserGroup} />
       </Row>
       <Row>
       <img className = 'navIcon' src={trade3} />
       </Row>
       <Row style={{marginTop:"400px"}}>
          <img style={{borderRadius:"50%",paddingBottom:"5px"}} className='navIcon' src = {customerIcon} />
       </Row>
    </div>
  )
}

export default Navigation

// style={{position: 'relative' ,
//     bottom: '-430px'}}