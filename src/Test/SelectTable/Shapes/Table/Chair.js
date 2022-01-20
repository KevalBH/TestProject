import React, { useEffect } from 'react';

/*
    props: 
        position - {x,y}
        rotate - in number        
        id - test ids
        view - The seat view (top, right, left, bottom like)
                if view mentioned and use rotate then
                    view deg + rotate deg will be apply
                else
                    just rotate will apply       
*/

export const DIMENSION = {
    W: 65, H: 50
}

export const POSITION = {
    LEFT: 0,
    RIGHT: 1,
    TOP: 2,
    BOTTOM: 3
}

function Chair(props) {

    let main = null, canvas = null, ctx = null;
    let rotate = 0
    let position = { x: 0, y: 0 }
    let w = DIMENSION.W, h = DIMENSION.H

    if (props.position != undefined)
        position = props.position

    if (props.view != undefined) {
        let v = props.view

        if (v == POSITION.TOP)
            rotate = 0
        else if (v == POSITION.LEFT)
            rotate = -90
        else if (v == POSITION.RIGHT)
            rotate = 90
        else if (v == POSITION.BOTTOM)
            rotate = 180
    }

    if (props.rotate != undefined)
        rotate += props.rotate

    useEffect(() => {

        main = document.getElementById('shape_chair' + props.id)
        canvas = document.querySelector('#shape_chair' + props.id + ' canvas')
        ctx = canvas.getContext('2d')

        // can't be auto adjust
        main.style.width = 66 + 'px'
        main.style.height = 39 + 'px'

        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.strokeStyle = 'rgb(229,231,234)'
        ctx.fillStyle = 'rgb(229,231,234)'
        ctx.bezierCurveTo(1, h, w, h, w, 1);
        ctx.stroke();
        ctx.fill();

    }, [])

    return <>
        <div key={'shape_chair' + props.id} id={'shape_chair' + props.id} style={{ zIndex: -1, transform: `rotate(${rotate}deg)`, top: position.y, left: position.x, position: 'absolute' }} className='shape_chair'>
            <canvas width={w + 1} height={h + 1}></canvas>
        </div>
    </>
}

export default React.memo(Chair);