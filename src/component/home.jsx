import {Button} from "../ui"
import { homeImg } from "../util/constants"

const Home = () => {
  return (
    <section id="home" className="flex pl:flex-row flex-col justify-between items-center py-10 pt-[120px]">
        {/* Animation Image */}
        <div className="pl:my-10 relative">
            <img src={homeImg} className="pl:ml-24 ml-8 pl:w-[70vw] w-[80vw] pl:mb-0 mb-[10vh] h-[55vh] pl:right-28 right-6 relative rounded-lg" alt="" />
        </div>
        {/* Information */}
        <div className="w-full mx-28 px-18 relative">
            <div className=" pl:w-[40vw] w-[80vw] nb:w-[30vw] flex items-center flex-row gap-2 bg-home-gradient rounded-[10px] px-5 py-2 mb-2 text-white">
                <i className="fa-solid fa-percent text-[25px]"></i>
                <p className="pl:text-[20px] text-[17px] ml-2">
                    <span className="font-bold p-1">20%</span> 
                    Chegirma
                    <span className="font-bold p-1">3 oylik</span>
                    to'lov uchun
                </p>
            </div>
            {/* Title */}
            <div className="w-full">
              <h1 className="font-bodyFont text-white pl:text-6xl text-5xl font-titleFont font-semibold m-3 pl:leading-[76px] leading-[50px]">
                Yangi Asr <br /> <span className="text-gradient p-1">Texnologiyasi</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[80vw] pl:text-[23px] text-[20px] text-white ml-3">
              Biz bilan sifatli ta'lim oling va zamonaviy kasb egasi bo'ling!
            </p>
            <Button title={"Boshlash"} m={"m-2"}/>
            
            <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 blue__gradient"></div>
            <div className="absolute z-0 w-[50%] h-[5%] right-20 bottom-20 white__gradient"></div>
        </div>
    </section>
  )
}

export default Home