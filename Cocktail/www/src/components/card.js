/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Box from './box'


function Card({data, callBack, img}) {
  return (
    <Box onClick={() => callBack(data)}>
      { img && <div css={css`
        background-image: url(${img});
        background-size:cover;
        width: 4em;
        height: 4em;
        border-radius: 8px;
        &:hover {
          box-shadow: 1px 1px 4px black;
        }
      `}/> }
      {data}
    </Box>
  )
}
export default Card;