import React from 'react'
import './AppBar.scss'
import { Container as BootstrapContainer, Row, Col, InputGroup, FormControl, Form, Dropdown } from 'react-bootstrap'
import trungquandevLogo from 'resources/images/logo-trungquandev-transparent-bg-192x192.png'
import UserAvatar from 'components/Common/UserAvatar'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, signOutUserApi } from 'redux/user/userSlice'

function AppBar() {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  return (
    <nav className="navbar-app">
      <BootstrapContainer className="trungquandev-trello-container">
        <Row>
          <Col md={5} sm={6} xs={12} className="col-no-padding">
            <div className="app-actions">
              <div className="item all"><i className="fa fa-th" /></div>
              <div className="item home"><i className="fa fa-home" /></div>
              <div className="item boards"><i className="fa fa-columns" />&nbsp;&nbsp;<strong>Boards</strong></div>
              <div className="item search">
                <Form className="common__form">
                  <InputGroup className="group-search">
                    <FormControl
                      className="input-search"
                      placeholder="Jump to..."
                    />
                    <InputGroup.Text className="input-icon-search"><i className="fa fa-search" /></InputGroup.Text>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </Col>
          <Col md={2} sm={2} xs={12} className="col-no-padding">
            <div className="app-branding text-center">
              <a href="https://trungquandev.com" target="blank">
                <img src={trungquandevLogo} className="top-logo" alt="trunguandev-logo" />
                <span className="trungquandev-slogan">trungquandev</span>
              </a>
            </div>
          </Col>
          <Col md={5} sm={4} xs={12} className="col-no-padding">
            <div className="user-actions">
              <div className="item quick"><i className="fa fa-plus-square-o" /></div>
              <div className="item news"><i className="fa fa-info-circle" /></div>
              <div className="item notification"><i className="fa fa-bell-o" /></div>
              <div className="item user-avatar">
              <div className='common-dropdown'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" size="sm">
                      <UserAvatar user ={user}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="account tqd-send">
                        <i className="icon fa fa-user" />Account
                      </Dropdown.Item>
                      <Dropdown.Item className="settings tqd-send">
                        <i className="icon fa fa-cog" />Settings
                      </Dropdown.Item>
                      <Dropdown.Item className="help tqd-send">
                        <i className="icon fa fa-question-circle" />Help
                      </Dropdown.Item>
                      <Dropdown.Item 
                      onClick={() => {
                        dispatch(signOutUserApi())
                      }}
                      className="sign-out tqd-send">
                        <i className="icon danger fa fa-sign-out" />Sign out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </BootstrapContainer>
    </nav>
  )
}

export default AppBar
