export default function CardHeader(){
    return (
        <>
        <img className="ml-4" src="https://via.placeholder.com/70x70" alt="" />
                            <div className="max-w-[100px] overflow-hidden overflow-ellipsis">
                                <h1 className="ml-3 font-bold">Windows Icin WhatsApp'i Indirin</h1>
                                <div >
                                    <p className="ml-3 text-sm " >
                                        Yeni windows uygulamasiyla arama ve erkan paylasim ozelliklerinden yararlanin ve daha hizli bir deneyim yasayin.
                                    </p>
                                </div>
                            </div>
                            <button className="hover:bg-#007c66 text-white 
                            flex items-center justify-center 
                            font-bold ml-3 px-4 rounded-full" 
                            style={{ backgroundColor: "#007c66", width: "200px", height:"38px"}}>
                                Uygulamayi Indir
                            </button>
        </>
    )
}