/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const boxStyle = css`
  padding: 32px;
  margin-bottom: 5px;
  width: 50%;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`
const Box = props => (
  <div
    css={boxStyle}
    {...props}
  />
);

function Card({data}) {
  return (
    <Box>
      {data}
    </Box>
  )
}
export default Card;