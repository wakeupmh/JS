/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const boxStyle = css`
    padding: 32px;
    margin-bottom: 5px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 50%;
    background-color: #90C3C8;
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

export default Box;
