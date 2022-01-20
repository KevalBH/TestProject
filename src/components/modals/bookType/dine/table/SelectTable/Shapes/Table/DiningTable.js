import React, { useEffect } from 'react';
import styled from 'styled-components';
import Chair, { POSITION } from './Chair'

/*
    props:  

        id = css id require
        onDragStart()
        type:
            walk_in, occupied, 
            available, booked,
            none        
        tableId - message        
        chairs - count require
        position - {x,y} require
        isVertical - view change
        selected
*/

const DIMENSION = {
    W: 66,
    H: 39
}

export const ORIENTATION = {
    HORIZONTAL: 0,
    VERTICAL: 1
}

export const TYPE = {
    WALK_IN: 0, // green
    OCCUPIED: 1, // blue 
    AVAILABLE: 2, // no color
    BOOKED: 3, // yellow
    NONE: 4
}

function DiningTable(props) {

    let main = null, canvas = null, ctx = null
    let position = { x: 0, y: 0 }
    let chairsCount = 0
    let baseMargin = 18
    let spaceMargin = 8
    let h = 90
    let rotate = 0
    let type = TYPE.NONE
    let isDraggable = false
    let text = ''
    let selected = false

    if (props.selected != undefined)
        selected = props.selected

    if (props.text != undefined)
        text = props.text

    if (props.draggable != undefined)
        isDraggable = props.draggable

    if (props.type != undefined)
        type = props.type

    if (props.isVertical == true)
        rotate = 90

    if (props.chairs != undefined) {
        chairsCount = Number(props.chairs)
        if (chairsCount % 2 != 0)
            chairsCount++
    }
    else {
        chairsCount = 2
    }

    if (props.position != undefined) {
        position = props.position
    }

    let chairsArray = []
    let lengthHalf = chairsCount / 2

    for (let i = 0, x = 0, y = 5; i < lengthHalf; i++) {

        if (i == 0) x += baseMargin
        else x += spaceMargin + DIMENSION.W

        let p = { x: x, y: y }
        chairsArray.push({ position: p, view: POSITION.BOTTOM })
    }

    for (let i = 0, x = 0, y = DIMENSION.H + h - 5; i < lengthHalf; i++) {

        if (i == 0) x += baseMargin
        else x += spaceMargin + DIMENSION.W

        let p = { x: x, y: y }
        chairsArray.push({ position: p, view: POSITION.TOP })
    }

    let tw = baseMargin, th = 0
    for (let i = 0; i < lengthHalf; i++) {
        tw += DIMENSION.W + spaceMargin
    }
    tw += baseMargin - spaceMargin
    th += DIMENSION.H * 2 + h

    function roundRect(x, y, width, height = h) {

        let radius = { tl: 5, tr: 5, br: 5, bl: 5 };

        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = 'white'
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);

        ctx.closePath();
        ctx.fillStyle = 'rgb(229,231,234)'
        ctx.fill();
        ctx.stroke();

    }

    useEffect(() => {

        let parentMain = document.getElementById('dining_table_' + props.id)

        let str = 'table' + props.id
        // main = document.getElementById(str)

        canvas = document.querySelector(`#${str} canvas`)
        ctx = canvas.getContext('2d')

        roundRect(0, DIMENSION.H, tw)
        ctx.beginPath()

        if (type != TYPE.NONE) {

            let colors = ['rgb(0,249,54)', 'rgb(162,225,225)', 'rgb(150, 150, 150)', 'rgb(255, 200, 0)']
            ctx.fillStyle = colors[type]
            if (props.isVertical != true)
                ctx.fillRect(tw - 9, DIMENSION.H + 4, 7, h - 8)
            else
                ctx.fillRect(4, 0 + DIMENSION.H + 2, tw - 7, 7)
            let msg = ['Walk In', 'Occupied', 'Available', 'Booked']
            let h5 = document.createElement('h5')
            h5.style.margin = 0
            h5.style.fontFamily = 'Arial'
            h5.style.fontSize = '16px'
            h5.style.color = colors[type]
            h5.innerText = msg[type]
            h5.style.position = 'absolute'
            h5.style.top = DIMENSION.H + h - 25 + 'px'
            h5.style.left = tw - 95 + 'px'
            parentMain.appendChild(h5)

        }

        if (props.id != undefined) {

            let h5 = document.createElement('h3')
            h5.style.color = 'rgb(150, 150, 150)'
            h5.innerText = 'T' + props.id
            h5.style.margin = 0
            h5.style.position = 'absolute'

            if (props.isVertical == true) {
                h5.style.left = 5 + 'px'
                h5.style.top = h + 10 + 'px'
                h5.style.transform = 'rotate(-90deg)'
            } else {
                h5.style.left = 7 + 'px'
                h5.style.top = DIMENSION.H + 5 + 'px'
            }

            parentMain.appendChild(h5)
        }

        ctx.closePath()

    }, [])

    function ODS(e) {
        if (props.onDragStart != undefined)
            props.onDragStart()
    }

    function onClickToMain() {
        if (props.onClick != undefined)
            props.onClick()
    }

    return <>
        <div onDragStart={() => ODS()} onClick={onClickToMain} draggable={isDraggable} className='dt_shape' key={'dining_table_' + props.id} id={'dining_table_' + props.id} style={{ filter: selected ? 'brightness(0.9)' : '', transform: `rotate(${rotate}deg)`, height: th + 1, width: tw + 1, left: position.x, top: position.y, position: 'absolute' }} >
            {isDraggable && <SvgDrag isRotate={rotate != 0} />}
            <SvgToolTip message={text} />
            <DivTable className='shape_table' id={'table' + props.id} >
                <canvas width={tw}></canvas>
            </DivTable>
            {
                chairsArray.map((item, index) => {
                    let id = 'dt_' + props.id + '_' + index
                    return <>
                        <Chair id={id} position={item.position} view={item.view} />
                    </>
                })
            }
        </div>
    </>

}

const DivTable = styled.div`
z-index: 0;
position: absolute;
width: 100%;
height: 100%;
`

function SvgDrag(props) {

    let style = { width: '15px', height: '15px', position: 'absolute' }
    if (!props.isRotate) {
        style.top = 0
        style.left = 0
    } else {
        style.bottom = 0
        style.left = 0
    }

    return <>
        <svg style={style}
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M1020.928353 527.024211a39.408053 39.408053 0 0 0 3.056594-15.047455c0-5.247922-1.095664-10.342246-3.056594-15.124255a38.445507 38.445507 0 0 0-8.463234-12.620612l-162.542218-162.547338c-15.277852-15.282972-40.042923-15.282972-55.407814 0-15.277852 15.359771-15.277852 40.129962 0 55.412934l95.691374 95.691374h-339.031109V133.665592l95.691374 95.691375a39.044538 39.044538 0 0 0 27.668068 11.443029c10.029931 0 20.059861-3.839943 27.739747-11.443029 15.282972-15.359771 15.282972-40.124842 0-55.407815L539.655524 11.396694c-1.802213-1.879012-4.075459-2.739159-6.189988-4.147138-2.114528-1.413099-3.99354-3.215312-6.425504-4.234177a39.459252 39.459252 0 0 0-30.171711 0c-2.431964 1.018865-4.234177 2.815958-6.425504 4.229057-2.03773 1.413099-4.310976 2.273246-6.195107 4.152258L321.710611 173.949152c-15.282972 15.282972-15.282972 40.048043 0 55.407815a39.208376 39.208376 0 0 0 55.407815 0l95.691374-95.691375V472.788859H133.778692l95.609455-95.691374c15.359771-15.282972 15.359771-40.053163 0-55.412934-15.282972-15.282972-40.048043-15.282972-55.407815 0L11.525153 484.231889A37.273045 37.273045 0 0 0 3.051679 496.852501 38.368708 38.368708 0 0 0 0.000205 511.976756a37.989834 37.989834 0 0 0 3.056594 15.052575 37.58536 37.58536 0 0 0 8.463234 12.697411l162.460299 162.465419a39.029178 39.029178 0 0 0 27.744867 11.44303c10.03505 0 20.064981-3.763144 27.662948-11.44303 15.359771-15.282972 15.359771-40.124842 0-55.407814L133.783811 551.164652h339.031109v339.051588l-95.691374-95.619695a39.065018 39.065018 0 0 0-55.407815 0c-15.282972 15.282972-15.282972 40.048043 0 55.412934l162.4603 162.470539a39.438772 39.438772 0 0 0 12.851008 8.463234A37.887435 37.887435 0 0 0 511.992576 1023.999846c5.094324 0 10.188648-1.018865 14.888738-3.056594a38.629824 38.629824 0 0 0 12.851009-8.463234l162.542218-162.470539c15.282972-15.359771 15.282972-40.129962 0-55.412934-15.359771-15.359771-40.124842-15.359771-55.407815 0l-95.691374 95.619695v-339.051588h339.031109l-95.691374 95.619695c-15.277852 15.282972-15.277852 40.124842 0 55.407814a39.029178 39.029178 0 0 0 27.744866 11.44303c10.03505 0 20.064981-3.763144 27.662948-11.44303l162.542218-162.470539a38.773182 38.773182 0 0 0 8.463234-12.697411" fill="#304156" />
        </svg>
    </>
}

function SvgToolTip(props) {

    if (!props.message)
        return <></>

    let style = { top: 0, left: 0, position: 'absolute' }

    return <>
        <div className='svg-tooltip' style={style}>
            <svg width={'18px'} height={'18px'} xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
            </svg>
            <div className='my-tooltip'>{props.message}</div>
        </div>
    </>
}

export default React.memo(DiningTable);