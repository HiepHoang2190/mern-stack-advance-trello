import React from 'react'
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap'

import './BoardBar.scss'
import { selectCurrentFullBoard } from 'redux/activeBoard/activeBoardSlice'
import { useSelector} from 'react-redux'
import UserAvatar from 'components/Common/UserAvatar'
import UserSelectPopover from 'components/Common/UserSelectPopover'
import {USER_SELECT_POPOVER_TYPE_BOARD_MEMBERS} from 'utilities/constants'
function BoardBar() {

  const board = useSelector(selectCurrentFullBoard)

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

                <div className='member__avatars__item'>
                  <span className="invite">Invite</span>
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
