import React from "react";


const PokemonGameIndex = ({gameIndex, version}) => {

    return (
        <tr>
            <td>
                {gameIndex}
            </td>
            <td>
                {version}
            </td>
        </tr>
    )
}



export default PokemonGameIndex