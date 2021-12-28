import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { mediaQuery } from '../styles/styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>시작하기</title>
        <meta name="description" content="getting started" />
      </Head>

      <MainWrapper>
        <BoxWrapper>
          <h2 className="uppercase">afap binder</h2>
          <div className="paragraph">
            <p>잘 정리된 바인더만 있으면</p>
            <p>열 대외활동 안부럽다!</p>
          </div>
          <div className="paragraph">
            <p>나의 대학생활을 잘 정리해줄 바인더, 시작해볼까요?</p>
          </div>
          <button className="submit" onClick={() => alert('준비 중 입니다')}>
            시작하기
          </button>
        </BoxWrapper>
      </MainWrapper>
    </>
  )
}
const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery(767)} {
    padding: 0 1rem;
  }
`

const BoxWrapper = styled.div`
  width: 100%;
  max-width: 30.375rem;
  min-height: 43.125rem;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #000000;
  box-sizing: border-box;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  .uppercase {
    text-transform: uppercase;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1.625rem;
  }

  .paragraph {
    font-family: 'Roboto';
    font-size: 1.125rem;
    margin-bottom: 1.625rem;
  }

  .submit {
    border: none;
    outline: none;
    cursor: pointer;

    background-color: #c4c4c4;
    color: #000000;
    border-radius: 1.25rem;
    padding: 1rem 4.375rem;
  }
`

export default Home
