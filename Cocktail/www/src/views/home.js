import { useState, lazy, Suspense } from 'react'
import InputSearch from '../components/inputSearch'
import useFetch from "../services/useFetch";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Card = lazy(() => import('../components/card'))

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
        if(component === 'drinks'){
          setUrl(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`);
          setSearchTerm("");
        }
        else{
          setUrl('https://the-cocktail-db.p.rapidapi.com/list.php?i=list');
          setSearchTerm("");
        }
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
            <Suspense 
              fallback={
                <span aria-label="drink" role="img" 
                  css={css`font-size:2em; margin-bottom:1em; text-shadow:1px 1px 2px #000000b5;`}>
                  🥂
                </span>
              }
            >
              {
                loading &&
                  <Loader
                    type="MutatingDots"
                    color="#ff9800"
                    height={100}
                    width={100}
                    timeout={1000}
                  />
              }
              <div css={containerStyle}>
                {component === 'ingredients' && data && data.length > 0 && !loading &&
                  results('strIngredient1').map((ingredient, i) => 
                    <Card 
                      key={i} 
                      data={ingredient.strIngredient1} 
                      callBack={() => changeComponent(ingredient.strIngredient1, 'drinks')}/>)} 

                {component === 'drinks' && data && data.length > 0 && !loading &&
                  results('strDrink').map((drink,i) => (
                    <Card key={i} 
                      data={drink.strDrink} 
                      img={drink.strDrinkThumb} 
                      callBack={() => changeComponent(drink.strIngredient1, 'ingredients')}/>))}
              </div>
            </Suspense> 
        </div>
    )
}

export default Home;