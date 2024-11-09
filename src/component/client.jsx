import { useState } from "react"
import { aboutImg } from "../util/constants"

const About = () => {
  const [about, setAbout] = useState(false) 
  return (
    <>
        <h3 className="text-white font-bold pl:text-6xl text-3xl font-titleFont text-center mt-10">
            Biz Haqimizda
        </h3>
        <section id="client" className="flex justify-around items-center pl:flex-row flex-col py-20">
            <div className="flex flex-col pl:pb-0 pb-7 gap-5 justify-start items-start pl:w-1/2 w-full">
                <h4 className="pl:text-4xl text-2xl font-titleFont text-white">Hozirgi kunda zamonaviy kasblarga <br className="pl:block hidden"/> Talab ortib bormoqda</h4>
                <p className="text-white font-serif font-semibold pl:text-[20px] text-base leading-7">
                    Bining jamoa ham bu kasblarni yoshlarga ulshishga astoydil bel bog'lashgan. Bizning kursimizni tamomlagan bolalar hozirgi kunda onlayn tarzda turli xil kompaniyalar bilan masofaviy ishlar olib borishmoqda. {about && "Bizning kursimiz haftada 6 kun ish olib boradi.  Darslar haftada uch kun o'tiladi. Undagi darslar esa juft yoki toq kunlari mijozning fikriga qarab o'tiladi. Bizning O'quv markazimizda har bir bolaga alohida e'tibor qaratiladi."} 
                </p>
                <button className={`my_button font-titleFont text-[22px]`} onClick={() => setAbout(prev => !prev)}>{about ? "Kamroq" : "Ko'proq"}</button>
            </div>
            <div className="pl:w-1/2 w-full flex justify-center items-center pl:px-8 px-0">
                <img src={aboutImg} className="w-full object-contain rounded-lg h-full" alt="" />
            </div>
        </section>
    </>
  )
}
export default About