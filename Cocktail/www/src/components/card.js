/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const boxStyle = css`
  padding: 32px;
  margin-bottom: 5px;
  width: 50%;
  background-color: #DB93B0;
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

function Card({data, callBack}) {
  return (
    <Box onClick={() => callBack(data)}>
      {data}
    </Box>
  )
}
export default Card;