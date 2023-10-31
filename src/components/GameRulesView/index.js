import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupContainer,
  Image,
  RulesButton,
  ModalContainer,
  ButtonContainer,
  CloseButton,
} from './styledComponents'

const GameRulesView = () => (
  <PopupContainer>
    <Popup
      modal
      trigger={<RulesButton type="button">RULES</RulesButton>}
      position="top left"
    >
      {close => (
        <ModalContainer>
          <ButtonContainer>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseButton>
          </ButtonContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  </PopupContainer>
)

export default GameRulesView
