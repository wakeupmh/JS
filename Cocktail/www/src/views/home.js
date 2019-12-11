import { useState } from 'react'
import Card from '../components/card'
import useFetch from "../services/useFetch";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const homeStyle = css `
    display:flex;
    padding-top:5%;
    width: 80%;
    text-align:center;
    justify-content:space-between;
    flex-wrap:wrap; 
`

function Home(){
    const [component, setComponent] = useState('ingredients')
    const [url, setUrl] = useState('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
    const [searchTerm, setSearchTerm] = useState('')
    const { loading, data } = useFetch(url);
    
    const changeComponent = (ingredient, component) => {
        if(component === 'drinks')
            setUrl(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`)
        else
            setUrl('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
        setComponent(component)
    }
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const results = !searchTerm
    ? data
    : data.filter(drink =>
        drink.strDrink.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    
    return (
        <div css={homeStyle}>
            
            {component === 'ingredients' && data &&
                data.map((ingredient, i) => <Card key={i} data={ingredient.strIngredient1} callBack={() => changeComponent(ingredient.strIngredient1, 'drinks')}/>)} 
            {component === 'drinks' && data && 
                <input 
                    value={searchTerm} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Search"
                />
            }
            {
                component === 'drinks' && data &&
                results.map((drink,i) => (
                    <Card key={i} data={drink.strDrink} img={drink.strDrinkThumb} callBack={() => changeComponent(drink.strIngredient1, 'ingredients')}/>
                ))
            }
        </div>
    )
}

export default Home;