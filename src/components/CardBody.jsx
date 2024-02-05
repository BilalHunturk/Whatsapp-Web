import style from './card.content.module.css'
import { MoreVertical, Settings } from 'lucide-react'
export default function CardBody() {
    return (
        <>
            <div style={{paddingTop: "32px", paddingRight: "32px" }}>
                <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="font-bold text-3xl">WhatsApp'i bilgisayarinizda kullanin</h1>
                        <ol start="1" className={`${style['padding-each-container']} ${style['padding-container']}`}>
                            <li>1.  Telefonunuzda WhatsApp'i Acin</li>
                            <div className={`flex flex-row`}>
                                <li>2.  Android'de</li><MoreVertical className="p-0" />
                                <li>Menu, Iphone'da ise</li><Settings className="p-1" />
                                <div>secenegine dokunun</div>
                            </div>

                            <li>3.  Bagli Cihazlar ve ardindan Cihaz bagla secenegine dokunun</li>
                            <li>4.  Telefonunuzu bu ekrana dogrultarak QR kodunu tarayin</li>
                        </ol>
                    </div>
                    <div >
                        <img className="ml-4" src="https://via.placeholder.com/256x256" alt="" />
                    </div>
                </div>
                <div className="p-6 border-b" />
                <div className=''>
                    <div className="pl-4" style={{ paddingLeft: "10px", paddingTop: "48px" }}>
                        <p><a className="font-bold text-xl" href="#">Telefon numarasi kullanarak bağla</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}