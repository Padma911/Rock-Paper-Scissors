import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  background-color: #223a5f;
  padding: 10px;
  justify-content: space-between;
  @media (min-width: 577px) {
    justify-content: space-around;
  }
  height: 100vh;

  align-items: center;
`

export const RockScoreContainer = styled.div`
  padding: 10px;
  display: flex;
  background-color: transparent;
  border-width: 4px;
  border-style: solid;
  border-color: white;
  border-radius: 8px;
  width: 300px;
  @media (min-width: 577px) {
    width: 600px;
  }
  justify-content: space-between;
`

export const HeadingContainer = styled.div`
  font-family: 'Bree Serif';
  margin-left: 10px;
`

export const Heading = styled.h1`
  font-size: 20px;
  width: 100px;
`

export const ScoreContainer = styled.div`
  text-align: center;
  background-color: white;
  color: #223a5f;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;

  font-family: 'Open Sans';
`

export const Score = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
`

export const Span = styled.span`
  font-size: 27px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const ImagesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 577px) {
    width: 500px;
  }
`

export const FirstTwo = styled.li`
  list-style: none;
`

export const Button = styled.button`
  border: 0 none transparent;
  background-color: transparent;
  margin-right: 10px;
`

export const Image = styled.img`
  height: 130px;
  width: 125px;
  @media (min-width: 577px) {
    width: 160px;
    height: 160px;
  }
`

export const RulesContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  width: 300px;
  @media (min-width: 577px) {
    width: 550px;
  }
`
