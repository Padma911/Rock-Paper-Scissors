import {Image} from '../PlayingView/styledComponents'
import {
  ResultContainer,
  Container,
  YourContainer,
  Para,
  You,
  RulsButton,
} from './styledComponents'

const GameResultsView = props => {
  const {result, yourChoice, opponentChoice, choicesList, clicking} = props
  console.log(opponentChoice)
  const choice = choicesList.filter(each => each.id === yourChoice)
  const choic = choicesList.filter(each => each.id === opponentChoice)
  const click = () => {
    clicking()
  }
  let r = null
  if (result === `DRAW`) {
    r = 'IT IS DRAW'
  } else {
    r = `YOU ${result}`
  }

  console.log('choic', choic)
  return (
    <Container>
      <ResultContainer>
        <YourContainer>
          <You>YOU</You>
          <Image src={choice[0].imageUrl} alt="your choice" />
        </YourContainer>

        <YourContainer>
          <You>OPPONENT</You>
          <Image src={choic[0].imageUrl} alt="opponent choice" />
        </YourContainer>
      </ResultContainer>
      <Para>{r}</Para>
      <RulsButton type="button" onClick={click}>
        PLAY AGAIN
      </RulsButton>
    </Container>
  )
}

export default GameResultsView
