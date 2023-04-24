import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #efefef;
  justify-content: flex-start;
`

export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`

export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
  color: '#323D5D';
`
