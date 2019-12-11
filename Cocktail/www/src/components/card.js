/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Box from './box'


function Card({data, callBack, img}) {
  return (
    <Box onClick={() => callBack(data)}>
      { img && <div css={css`
        background-image: url(${img});
        background-size:cover;
        background-position:center;
        width: 100%;
        padding-bottom: 8em;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        &:hover {
          box-shadow: 1px 1px 4px black;
        }
      `}/> }
      <div css={css`
        margin: auto 0;
        padding: 10px;
      `}> 
        {data} 
      </div>
    </Box>
  )
}
export default Card;