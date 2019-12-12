import { useState } from 'react'
import Card from '../components/card'
import InputSearch from '../components/inputSearch'
import useFetch from "../services/useFetch";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const containerStyle = css `
    display:flex;
    width: 80%;
    text-align:center;
    justify-content:space-between;
    flex-wrap:wrap; 
`
const homeStyle = css `
    display:flex;
    padding-top:5%;
    width: 80%;
    text-align:center;
    justify-content:center;
    flex-wrap:wrap; 
`
function Home(){
    const [component, setComponent] = useState('ingredients')
    const [url, setUrl] = useState('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
    const [searchTerm, setSearchTerm] = useState('')
    const { loading, data } = useFetch(url);
    
    const changeComponent = (ingredient, component) => {
        console.log(ingredient);
        if(component === 'drinks')
            setUrl(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`)
        else
            setUrl('https://the-cocktail-db.p.rapidapi.com/list.php?i=list')
        setComponent(component)
    }
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const results = propertyToFilter => {
        return !searchTerm ? data : 
            data.filter(drink => drink[propertyToFilter].toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    }
    
    return (
        <div css={homeStyle}>
            <span aria-label="drink" role="img" 
                css={css`font-size:2em; margin-bottom:1em; text-shadow:1px 1px 2px #000000b5;`}>
                🍹 Drink's catalogue
            </span>
            
            <form css={css`
                width:100%;
            `}> 
                <InputSearch
                    value={searchTerm} 
                    handleChange={(e) => handleChange(e)} 
                    placeholderText={`🔍 Insert a ${component === 'ingredients' ? "ingredients'" : "drink's"} name`}
                />
            </form>
            <div css={containerStyle}>
                {component === 'ingredients' && data &&
                    results('strIngredient1').map((ingredient, i) => 
                        <Card key={i} data={ingredient.strIngredient1} 
                            callBack={() => changeComponent(ingredient.strIngredient1, 'drinks')}/>)} 

                {component === 'drinks' && data &&
                    results('strDrink').map((drink,i) => (
                        <Card key={i} 
                            data={drink.strDrink} 
                            img={drink.strDrinkThumb} 
                            callBack={() => changeComponent(drink.strIngredient1, 'ingredients')}/>))}
            </div>
        </div>
    )
}

export default Home;