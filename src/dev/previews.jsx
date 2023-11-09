import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Count} from "../components/Count";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Count">
                <Count/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews