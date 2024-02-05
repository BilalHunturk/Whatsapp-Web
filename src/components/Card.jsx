import style from './card.module.css'
import content from './card.content.module.css'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

export default function Card() {
    //https://stackoverflow.com/questions/50451617/react-zindex-does-not-work?rq=3 how to put z index into any element
    return (
        <>
            <div style={{ zIndex: "2", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>
                    <div className="flex flex-row items-center" style={{ paddingTop: "40px" }}>
                        <span><img src="https://via.placeholder.com/32" alt="" /></span>
                        <h1 className="font-semibold" style={{ paddingLeft: "16px" }}>WhatssApp Web</h1>
                    </div>


                    <div style={{ paddingTop: "60px" }}>
                        <div className={`rounded overflow-hidden shadow-lg first-letter ${style['custom-card']}`}>
                            <div className="" style={{ padding: "48px" }}>
                                <div className={`flex flex-row items-center ${content['custom-download-part']}`}>
                                    <CardHeader></CardHeader>
                                </div>
                                <div className="" >
                                    <CardBody></CardBody>
                                </div>
                            </div>
                            <div className="flex flex-col items-center" style={{ backgroundColor: "#f9f9fa", position: "fixed", width: "1000px", height: "515px" }}>
                                <div style={{paddingTop :"40px"}}>
                                    <h1 className="font-bold text-3xl">Egitim</h1>
                                </div>
                                <div style={{paddingTop :"16px",paddingBottom:"16px"}}>
                                    <p><a href="#">Başlamak için yardıma mı ihtiyacınız var?</a></p>
                                </div>
                                <div>
                                    <img src="https://via.placeholder.com/560x314" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
    // 
    // {`${content['button']} text-white font-bold py-12 px-4 rounded-full`}
}