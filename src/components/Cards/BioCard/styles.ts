import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};

  border-radius: 8px;

  display: grid;
  grid-template-columns: 0.5fr 2.5fr;
  gap: 1.5rem;

  max-width: 900px;
  margin: auto;
  margin-top: -3rem;
`

export const ProfileContainer = styled.div`
  img {
    max-width: 7rem;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: flex-start;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleCard = styled.h2``

export const DescriptionText = styled.p``

export const FooterCard = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 2rem;
  }
`
