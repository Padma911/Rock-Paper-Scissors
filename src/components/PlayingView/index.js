import {Component} from 'react'
import YourOptions from '../YourOptions'
import {
  BgContainer,
  Heading,
  RulesContainer,
  RockScoreContainer,
  HeadingContainer,
  ScoreContainer,
  Score,
  ImagesContainer,
} from './styledComponents'
import GameResultsView from '../GameResultsView'

import GameRulesView from '../GameRulesView'

class PlayingView extends Component {
  state = {
    you: 'ROCK',
    opponen: '',
    score: 0,
    opponent: Math.floor(Math.random() * 3),
    clicked: false,
    result: '',
  }

  clicking = () => {
    this.setState({clicked: false})
  }

  chooseAnyOne = id => {
    const {choicesList} = this.props
    this.setState({you: id, clicked: true})
    const you = id

    const {opponent, score} = this.state

    const opponen = choicesList[opponent].id
    let opponentChoosedOne = null
    switch (opponen) {
      case 'PAPER':
        if (you === 'PAPER') {
          opponentChoosedOne = 'DRAW'
        } else if (you === 'SCISSORS') {
          opponentChoosedOne = `WON`
        } else {
          opponentChoosedOne = `LOSE`
        }

        break
      case 'SCISSORS':
        if (you === 'SCISSORS') {
          opponentChoosedOne = 'DRAW'
        } else if (you === 'ROCK') {
          opponentChoosedOne = `WON`
        } else {
          opponentChoosedOne = `LOSE`
        }

        break
      case 'ROCK':
        if (you === 'ROCK') {
          opponentChoosedOne = 'DRAW'
        } else if (you === 'PAPER') {
          opponentChoosedOne = `WON`
        } else {
          opponentChoosedOne = `LOSE`
        }

        break

      default:
        opponentChoosedOne = null
        break
    }
    let s = 0
    console.log('result', opponentChoosedOne)
    if (opponentChoosedOne === `WON`) {
      s = score + 1
    } else if (opponentChoosedOne === 'LOSE') {
      s = score - 1
    } else {
      s = score - 0
    }

    this.setState({
      you,
      opponen,
      score: s,
      result: opponentChoosedOne,
      opponent: Math.floor(Math.random() * 3),
    })
  }

  imageContains = () => {
    const {choicesList} = this.props

    return (
      <ImagesContainer>
        {choicesList.map(eachItem => (
          <YourOptions
            key={eachItem.id}
            details={eachItem}
            chooseOption={this.chooseAnyOne}
          />
        ))}
      </ImagesContainer>
    )
  }

  render() {
    const {choicesList} = this.props
    const {clicked, opponen, you, result, score} = this.state

    console.log('opponent', opponen)

    console.log('Score', score)

    return (
      <BgContainer>
        <RockScoreContainer>
          <HeadingContainer>
            <Heading>ROCK PAPER SCISSORS</Heading>
          </HeadingContainer>
          <ScoreContainer>
            <Score>Score</Score>

            <Score>{score}</Score>
          </ScoreContainer>
        </RockScoreContainer>
        {clicked ? (
          <GameResultsView
            result={result}
            yourChoice={you}
            opponentChoice={opponen}
            choicesList={choicesList}
            clicking={this.clicking}
            clicked={clicked}
            choose={this.chooseAnyOne}
          />
        ) : (
          this.imageContains()
        )}
        <RulesContainer>
          <GameRulesView />
        </RulesContainer>
      </BgContainer>
    )
  }
}

export default PlayingView
