/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const boxStyle = css`
  margin-bottom: 10px;
  margin:5px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 45%;
  background-color: #fff; 
  color: #36382E;
  box-shadow: 0px 1px 5px #0000008c;
  font-size: 16px;
  padding-bottom: 5px;
  border-radius: 8px;
  &:hover {
    color: #ff9800;
    box-shadow: 0px 1px 8px #000000b5;
  }
`

const Box = props => (
  <div
    css={boxStyle}
    {...props}
  />
);

export default Box;
