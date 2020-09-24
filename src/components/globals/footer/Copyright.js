import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; Copyright 2020 | La Dolce Rina
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 2rem 0rem;
  font-size: 0.7rem;
  color: var(--white);
  background: var(--black);
  a {
    color: var(--white);
  }
`

export default Copyright
