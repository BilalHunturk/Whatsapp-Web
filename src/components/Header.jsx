import BackGround from './BackGround.jsx'
import Card from './Card.jsx'
export default function Header() {
    
    return (
        <>
            <div className=" min-h-screen flex items-center justify-center">
                {/* Arkaplan rengini ayarlamak için tailwindcss gradient kullanabilirsiniz */}
                <BackGround />
            </div>


        </>

    )
}/*<!--<span class="inline-block #00A884 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
<span class="inline-block #101B20 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>-->*/