import React, { useState } from "react";
import { Card, CardBody, Collapse, Button } from 'reactstrap'


const PokemonMoves = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Button
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                marginBottom: '1rem'
                }}
            >
                Toggle
            </Button>
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default PokemonMoves