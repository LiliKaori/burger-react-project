import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items price-items'
      'delivery-tax price-delivery-tax';
  }

  .title {
    grid-area: title;
    margin-bottom: 20px;
  }

  .items {
    grid-area: items;
  }

  .price-items {
    grid-area: price-items;
  }

  .delivery-tax {
    grid-area: delivery-tax;
  }

  .price-delivery-tax {
    grid-area: price-delivery-tax;
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
