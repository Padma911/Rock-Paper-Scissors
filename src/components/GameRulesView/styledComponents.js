import styled from 'styled-components'

export const PopupContainer = styled.div`
  padding: 10px;

  width: auto;
`

export const RulesButton = styled.button`
  background-color: white;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 10px;
  height: 60px;
  width: 80px;
  font-size: 20px;
  font-weight: bold;
  border: 0 none transparent;
  border-radius: 8px;
`

export const ModalContainer = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  @media (min-width: 577px) {
    width: 400px;
    height: 400px;
  }
`

export const CloseButton = styled.button`
  border: 0 none transparent;
  background-color: transparent;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  margin-left: 25px;
  margin-bottom: 25px;
  margin-top: 5px;
`
