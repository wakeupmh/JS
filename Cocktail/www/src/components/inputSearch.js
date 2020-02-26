/** @jsx jsx */
import { css, jsx } from '@emotion/core'
const inputSearchStyle = css`
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    border: transparent;
    box-shadow: 0px 0px 3px #00000082;
    background-color: #fff;
    margin-bottom: 5%;
`

function InputSearch({searchTerm, handleChange, placeholderText}){
    return(
        <input 
            css={inputSearchStyle}
            value={searchTerm} 
            onChange={(e) => handleChange(e)} 
            type="text"
            placeholder={placeholderText}
        />
    )
}

export default InputSearch;