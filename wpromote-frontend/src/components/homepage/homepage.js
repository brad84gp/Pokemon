import React, { useEffect, useState } from "react";
import './homepage.css'
import { Container, Row, Pagination, PaginationItem, PaginationLink } from "reactstrap";


import PokemonApi from "../../API/pokemonApi";
import PokemonList from "../pokemon/pokemonList";
import FindPokemon from "../forms/searchPokemon";



const HomePage = () => {

    const [pokemon, setPokemon] = useState()

    const [offset, setOffset] = useState(50)

    useEffect(() => {
        async function getPokemon(){
            let response = await PokemonApi.fetchAllPokemon(offset)
            setPokemon(response.results)
        }

        getPokemon()
    }, [offset])

    async function updatePokemonList(pokemonStr){
        if(pokemonStr.length > 0){
            let response = await PokemonApi.fetchPokemonData(pokemonStr)
            setPokemon([response.data])
        }else{
            let response = await PokemonApi.fetchAllPokemon(offset)
            setPokemon(response.results)
        }

    }

    console.log(pokemon)

    return (
        <div>
            <Container fluid style={{padding : '5%'}}>
                <Row>
                    <FindPokemon update={{updatePokemonList}}/>
                </Row>

                <Row>
                    <Pagination
                        aria-label="Page navigation example"
                        size="lg"
                        style={{display : 'flex', margin : 'auto', justifyContent : 'center'}}
                        >
                        <PaginationItem>
                            <PaginationLink
                            first
                            onClick={() => setOffset(50)}
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            onClick={() => setOffset(offset - 50)}
                            previous
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            onClick={() => setOffset(offset + 50)}
                            next
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                            onClick={() => setOffset(1118 - 50)}
                            last
                            />
                        </PaginationItem>
                    </Pagination>
                </Row>
                
                <Row>
                    {pokemon ? pokemon.map((el, idx)=> (
                        <PokemonList key={idx} name={el.name} />
                    )) : null}
                </Row>
            </Container>
        </div>
    )
}

export default HomePage