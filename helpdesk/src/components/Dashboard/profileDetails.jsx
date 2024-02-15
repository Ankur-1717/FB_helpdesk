import React, { useState } from 'react'
import './styles.modules.css';
import {Row,Col} from 'reactstrap';
import userIcon from '../../assets/images/userIcon.svg'
import currentUser from '../../assets/images/currentUser.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faCircleUser } from '@fortawesome/free-solid-svg-icons'

const ProfileDetails = ({currentCustomer}) => {

  const [viewMoreDetail, setViewMoreDetails] = useState(false);

  return (
    <div className='profilesection containers'>
      <Row className='sectionTop'>
        <Row className='userDetails'>
          <img src = {currentUser} className='profileImg'/>
          <h4 className='userName'>{currentCustomer?.name}</h4>
          <span className='text userStatus'>{' • ' + 'Offline'}</span>
        </Row>
        <Row className='row1'>
          <div className='span1'>
          <FontAwesomeIcon className='callimage' icon={faPhone} />
            <span  >Call</span>
            </div> 
          <div className='span2'>
          <FontAwesomeIcon className='profileimage' icon={faCircleUser} />
            <span >Profile</span
            ></div>

          
        </Row>
      </Row>

      <Row className='customerDetails'>
        <Row>
           <h3>Customer details</h3>
        </Row>
        <Row>
           <Row>
            <Col md="6">
              <label  className='text'>Email</label>
            </Col>
             <Col md="6">
              <span className='label userEmail'>{currentCustomer?.email}</span>
             </Col>
           </Row>
           <Row>
             <Col md="6">
              <label  className='text'>First Name</label>
            </Col>
             <Col md="6">
              <span className='label'>{currentCustomer?.name}</span>
             </Col>
           </Row>
           <Row>
             <Col md="6">
              <label  className='text'>Last Name</label>
            </Col>
             <Col md="6">
              <span className='label'>RG</span>
             </Col>
           </Row>
        </Row>
        {!viewMoreDetail && (<button className='viewMoreBtn' onClick={()=>setViewMoreDetails(true)}>View more details</button>)}
        {viewMoreDetail && 
        (<Row>
          <Row>
          <Col md="6">
              <label  className='text'>Mobile No</label>
            </Col>
             <Col md="6">
              <span className='label'>123354312</span>
             </Col>
          </Row>
          {(<button className='showLessBtn' onClick={()=>setViewMoreDetails(false)}>Show Less</button>)}
        </Row>)
        }
      </Row>
    </div>
  )
}

export default ProfileDetails