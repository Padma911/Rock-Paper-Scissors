import {FirstTwo, Button, Image} from '../PlayingView/styledComponents'

const YourOptions = props => {
  const {details, chooseOption} = props
  const {id, imageUrl} = details

  const chooseYourOption = () => {
    chooseOption(id)
  }
  let data = null
  switch (id) {
    case `ROCK`:
      data = 'rockButton'
      break
    case 'PAPER':
      data = 'paperButton'
      break
    default:
      data = 'scissorsButton'
      break
  }

  return (
    <FirstTwo>
      <Button data-testid={data} type="button" onClick={chooseYourOption}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </FirstTwo>
  )
}

export default YourOptions
