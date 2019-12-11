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
const inputSearchStyle = css`
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: transparent;
    box-shadow: 0px 0px 3px #00000082;
    background-color: #fefefe;
    margin-bottom: 5%;
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
    const results = propertyToFilter => {
        return !searchTerm ? data : 
            data.filter(drink =>
                drink[propertyToFilter].toLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
    }
    
    return (
        <div css={homeStyle}>
            <form css={css`
                width:100%;
            `}> 
                <input 
                    css={inputSearchStyle}
                    value={searchTerm} 
                    onChange={handleChange} 
                    type="text"
                    placeholder={`🔍 Insert a ${component === 'ingredients' ? "ingredients'" : "drink's"} name`}
                />
            </form>
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
    )
}

export default Home;