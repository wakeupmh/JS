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

function Home({}){
    const changeComponent = ingredient =>{
        setUrl(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`)
    }
    const [selectComponent, setSelectComponent] = useState('card')
    const [url, setUrl] = useState('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')

    const { loading, data } = useFetch(
        url
    );
    return (
        <div css={homeStyle}>
            {data &&
                data.drinks.length > 0 &&
                data.drinks.map((drink, i) => <Card key={i} data={drink.strIngredient1} callBack={() => changeComponent(drink.strIngredient1)}/>)} 
        </div>
    )
}

export default Home;