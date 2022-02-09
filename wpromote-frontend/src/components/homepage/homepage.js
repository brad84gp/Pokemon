import React, { useEffect, useState } from "react";
import './homepage.css'
import { Container, Row, Pagination, PaginationItem, PaginationLink} from "reactstrap";


import PokemonApi from "../../API/pokemonApi";
import PokemonList from "../pokemon/pokemonList";
import FindPokemon from "../forms/searchPokemon";


const HomePage = () => {

    const [pokemon, setPokemon] = useState()


    const [offset, setOffset] = useState(0)

    useEffect(() => {
        async function getPokemon(){
            console.log(offset)
            let response = await PokemonApi.fetchAllPokemon(offset) // Response pulls prev, current, and next results to limit api calls
            setPokemon(response)                                    // only calls api when no prev or next is available upon pagination page change
        }

        getPokemon()
    }, [offset])

    async function updatePokemonList(pokemonStr){
        if(pokemonStr.length > 1){
            let response = await PokemonApi.fetchPokemonData(pokemonStr)
            setPokemon([response])
        }else{
            let response = await PokemonApi.fetchAllPokemon(offset)
            setPokemon(response)
        }
    }

    function firstPage(){
        if(offset != 0) setOffset(0)
    }

    function previousPage(){
        if(offset === 0) return null
        setOffset(offset - 40) // adjust offset by 40 to account for premade api calls
    }

    function nextPage(){
        if(offset > 1118) return null
        setOffset(offset + 40)
    }

    function lastPage(){
        if(offset != 1118 - 10) setOffset(1118 - 10)
    }

console.log(pokemon)

    if(!pokemon) return <div />
    return (
        <div>
            <Container fluid style={{padding : '5%'}}>
                <Row>
                    <FindPokemon update={{updatePokemonList}}/>
                </Row>

                <Row>
                    <Pagination size="lg" aria-label="Page naviagtion" style={{position : 'relative', display : 'flex', justifyContent : ' center', marginTop : '3em'}}>
                        <PaginationItem>
                            <PaginationLink first onClick={firstPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous onClick={previousPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next onClick={nextPage}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last onClick={lastPage} />
                        </PaginationItem>
                    </Pagination>
                </Row>
                
                <Row>
                    {pokemon.map((el, idx) => {
                        return <PokemonList key={idx} name={el.name}  />
                    
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default HomePage