import React from "react";

const PokemonStats = ({base, effort, stat}) => {

    return (
        <tbody>
            <tr>
            <th scope="row">
                {stat} 
            </th>
            <td>
                {base}
            </td>
            <td>
                {effort}
            </td>
            </tr>
        </tbody>
    )
}

export default PokemonStats