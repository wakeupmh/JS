import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import useFetch from "../services/useFetch";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const homeStyle = css `
    display:flex;
    padding-top:5%;
    text-align:center;
    justify-content:center;
    flex-wrap:wrap;
`

function Home({}){
    const changeComponent = (ingredient, component) => {
        if(component === 'drinks')
            setUrl(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`)
        else
            setUrl('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
        setComponent(component)
    }
    const [component, setComponent] = useState('ingredients')
    const [url, setUrl] = useState('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
    const { loading, data } = useFetch(
        url
    );

    return (
        <div css={homeStyle}>
            {component === 'ingredients' && data &&
                data.drinks.length > 0 &&
                data.drinks.map((ingredient, i) => <Card key={i} data={ingredient.strIngredient1} callBack={() => changeComponent(ingredient.strIngredient1, 'drinks')}/>)} 
            {
                component === 'drinks' && data &&
                data.drinks.length > 0 &&
                data.drinks.map((drink, i) => <Card key={i} data={drink.strDrink} img={drink.strDrinkThumb} callBack={() => changeComponent(drink.strIngredient1, 'ingredients')}/>)
            }
        </div>
    )
}

export default Home;