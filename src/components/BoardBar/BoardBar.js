import React, { useState } from 'react'
import { Container as BootstrapContainer, Row, Col,Form ,Button} from 'react-bootstrap'

import './BoardBar.scss'
import { selectCurrentFullBoard } from 'redux/activeBoard/activeBoardSlice'
import { useSelector } from 'react-redux'
import UserAvatar from 'components/Common/UserAvatar'
import UserSelectPopover from 'components/Common/UserSelectPopover'
import {USER_SELECT_POPOVER_TYPE_BOARD_MEMBERS} from 'utilities/constants'
import { useForm } from 'react-hook-form'
import {
  EMAIL_RULE,
  FIELD_REQUIRED_MESSAGE,
  EMAIL_RULE_MESSAGE,
  fieldErrorMessage
} from 'utilities/validators'
import { inviteUserToBoardApi} from 'actions/ApiCall'
function BoardBar() {

  const board = useSelector(selectCurrentFullBoard)
  const [showInvitePopup, setShowInvitePopup] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const toggleShowInvitePopup = () => setShowInvitePopup(!showInvitePopup);

  const onSubmitInvitation = (data) => {
    // console.log(data)

    const { inviteeEmail } = data
    const boardId = board._id 
    
    // console.log('inviteeEmail',inviteeEmail)
    // console.log('boardId',boardId)
    inviteUserToBoardApi ( { inviteeEmail, boardId })
    .then((invitation) => {
      console.log(invitation)
      setValue('inviteeEmail', null)
    })
  }

  return (
    <nav className="navbar-board">
      <BootstrapContainer className="trungquandev-trello-container">
        <Row>
          <Col md={10} sm={12} className="col-no-padding">
            <div className="board-info">
              <div className="item board-logo-icon">
                <i className="fa fa-coffee me-2" />
                <strong>{board?.title}</strong>
              </div>
              <div className="divider"></div>

              <div className="item board-type">Private Workspace</div>
              <div className="divider"></div>

              <div className="item member__avatars">
                {board?.users.map((u, index) => {
                  if(index <= 2) {
                    return (
                      <div className="member__avatars__item" key={index}>
                        <UserAvatar user={u} width="28px" height="28px"/>
                      </div>
                    )
                  }

                 
                })}

                {(board?.totalUsers - 3) > 0 && 
                
                  <div className='member__avatars__item'>
                    <UserSelectPopover
                      label = {`+${board?.totalUsers - 3}`}
                      users = {board?.users}
                      type={USER_SELECT_POPOVER_TYPE_BOARD_MEMBERS}
                    />
                  </div>
                }
                
             

                {/* <img src="https://trungquandev.com/wp-content/uploads/2021/01/trungquandev-avatar-2021.jpg" alt="avatar-trungquandev" title="trungquandev" />
                <img src="https://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg" alt="avatar-trungquandev" title="trungquandev" />
                <img src="https://trungquandev.com/wp-content/uploads/2019/03/trungquandev-avatar-01-scaled.jpg" alt="avatar-trungquandev" title="trungquandev" />
                <img src="https://trungquandev.com/wp-content/uploads/2017/03/aboutme.jpg" alt="avatar-trungquandev" title="trungquandev" />
                <img src="https://trungquandev.com/wp-content/uploads/2019/06/trungquandev-cat-avatar.png" alt="avatar-trungquandev" title="trungquandev" /> */}
                {/* <span className="more-members">+7</span> */}

                {/* <div className='member__avatars__item'>
                  <span className="invite">Invite</span>
                </div> */}

                <div className="member__avatars__item">
                  <div className="invite">
                    <div className="invite__label" onClick={toggleShowInvitePopup}>Invite</div>
                    {showInvitePopup &&
                      <div className="invite__popup">
                        <span className="invite__popup__close_btn" onClick={toggleShowInvitePopup}>
                          <i className="fa fa-close" />
                        </span>
                        <div className="invite__popup__title mb-2">Invite user to this board!</div>
                        <div className="invite__popup__form">
                          <Form className="common__form" onSubmit={handleSubmit(onSubmitInvitation)}>
                            <Form.Control
                              type="text"
                              className="invite__field mb-2"
                              placeholder="Enter email to invite..."
                              {...register('inviteeEmail', {
                                required: FIELD_REQUIRED_MESSAGE,
                                pattern: {
                                  value: EMAIL_RULE,
                                  message: EMAIL_RULE_MESSAGE
                                }
                              })}
                            />
                            {fieldErrorMessage(errors, 'inviteeEmail')}
                            <Form.Group className="text-right">
                              <Button variant="success" type="submit" size="sm" className="px-4 mt-1">Invite</Button>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    }
                  </div>
                </div>
             
              </div>
            </div>
          </Col>
          <Col md={2} sm={12} className="col-no-padding">
            <div className="board-actions">
              <div className="item menu">
                <i className="fa fa-ellipsis-h me-2" />Show menu
              </div>
            </div>
          </Col>
        </Row>
      </BootstrapContainer>
    </nav>
  )
}

export default BoardBar
