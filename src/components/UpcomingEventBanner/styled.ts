import styled from "styled-components"

const TopBannerContainer = styled.section`
  flex: 0 1 auto;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.colorHeaderBanner};
`

export { TopBannerContainer }
