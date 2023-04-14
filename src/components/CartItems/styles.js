import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #9a9a9d;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  img {
    width: 120px;
    border-radius: 16px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    button {
      height: 30px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p {
      margin-top: 5px;
    }
  }

  .price-container {
    display: flex;
    gap: 20px;

    button {
      background: none;
      border: none;
      height: 30px;
      cursor: pointer;
      opacity: 0.4;

      img {
        width: 20px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`
export const EmptyCart = styled.div`
  padding: 20px;
  font-weight: bold;
  text-align: center;
`
