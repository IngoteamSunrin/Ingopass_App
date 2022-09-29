import { WithLocalSvg } from 'react-native-svg'
import Navigation from '@assets/icons/navigation.svg'
import styled from 'styled-components/native'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRecoilValue } from 'recoil'
import themeState from '@/store/theme'

interface CardProps {
  name: string
  directLink?: boolean
  children: any
  onPress?: any
}

const CardBox: React.FC<CardProps> = ({
  name,
  directLink,
  children,
  onPress,
}) => {
  const theme = useRecoilValue(themeState)
  return (
    <Container>
      {directLink ? (
        <TitleWithLink>
          <CardTitle>{name}</CardTitle>
          <TouchableOpacity onPress={onPress}>
            <Navigation width={22} fill={theme.color.grade5} />
          </TouchableOpacity>
        </TitleWithLink>
      ) : (
        <CardTitle>{name}</CardTitle>
      )}
      {children}
    </Container>
  )
}

const TitleWithLink = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.View`
  padding: 28px 24px;
  background-color: ${({ theme }) => theme.color.grade2};
  border-radius: 20px;
  margin: 20px 24px 0 20px;
`

const CardTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.grade8};
`

export default CardBox
