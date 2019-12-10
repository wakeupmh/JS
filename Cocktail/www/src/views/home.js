import React, { useState, useEffect } from 'react'
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
function teste(a){
    console.log(a);
}

function Home({}){
    const { loading, data } = useFetch(
        "https://the-cocktail-db.p.rapidapi.com/list.php?i=list"
    );
    return (
        <div css={homeStyle}>
            {data &&
                data.drinks.length > 0 &&
                data.drinks.map((drink, i) => <Card key={i} data={drink.strIngredient1} callBack={() => teste(drink.strIngredient1)}/>)} 
        </div>
    )
}

export default Home;