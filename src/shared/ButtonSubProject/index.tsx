import React from 'react'
import { Cell, CellDisclosure, Button2 } from '@sberdevices/plasma-ui'
import {  success } from '@sberdevices/plasma-tokens';
import styled from 'styled-components'

const ItemContainer = styled(Cell)`
    cursor: pointer;
    border-radius: 1rem;
    margin: 0.5rem 0rem;
    padding: 0rem 1rem;
    background-color: rgba(255,255,255,0.06);
`
const Position = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
    margin-right: 1rem;
    min-width:2rem;
    min-height:2rem;
    max-width:2rem;
    max-height:2rem;
    border-radius: 1rem;
    background-color: rgba(255,255,255,0.06);
`

export default (props:any) => {
    const {id, title, onClick, active } = props
  return (
    <ItemContainer
        key={title}
        onClick={onClick}
        outlined
        content={<><Position>{id}</Position><Button2>{title}</Button2></>}
        contentRight={<CellDisclosure tabIndex={-1} />}
        style={{backgroundColor: active ? `${success}` : 'rgba(255,255,255,0.06)'}}
    />)
}
