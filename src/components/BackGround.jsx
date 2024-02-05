import style from './background.module.css'
import Card from './Card.jsx'
import React from 'react'
export default function BackGround() {

    return (
        <>
            <div className={`${style['top']}`}>
            </div>
            <div className={`${style['bottom']}`}>
            </div>
            <div ></div>
            <Card ></Card>

        </>
    )
}