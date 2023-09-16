import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import lines from './lines.json'
import web from './web.json'

function Particlebg() {

    async function loadParticles(main) {
        await loadFull(main)
    }

    return (
        <div>
            <Particles
                id="tsparticles"
                init={loadParticles}
                options={web} // For the web like background
                // options={lines} // For the web like background
            />
        </div>
    )
}


export default Particlebg
