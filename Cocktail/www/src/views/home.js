import React from 'react'
import Card from '../components/card'
import useFetch from "../services/useFetch";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const homeStyle = css `
    display:flex;
    text-align:center;
    justify-content:center;
    flex-wrap:wrap;
`

function Home({}){
    const { loading, data } = useFetch(
        "https://the-cocktail-db.p.rapidapi.com/list.php?i=list"
    );
    return (
        <div css={homeStyle}>
            {data &&
                data.drinks.length > 0 &&
                data.drinks.map((drink) => <Card data={drink.strIngredient1}/>)} 
        </div>
    )
}

export default Home;