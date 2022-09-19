import { Container } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

const MaxWidth: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <Container maxW={'994px'}>
      { children }
    </Container>
  )
}

export default MaxWidth