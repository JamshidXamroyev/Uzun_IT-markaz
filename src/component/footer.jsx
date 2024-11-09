import {  Button } from "@mui/material"
import { useState } from "react"


const Footer = () => {
  const [inpValue, setInpValue] = useState("")
  const [textValue, setTextValue] = useState("")
  const commentHandler = () => {
    localStorage.setItem("ega", inpValue)
    localStorage.setItem("text", textValue)
    setTextValue("")
    setInpValue("")
  }
  return (
    <footer id="footer" className="flex justify-between items-start pl:flex-row flex-col pl:my-20 my-0 pl:py-10 py-16">
        <form className="flex justify-start items-start flex-col gap-3 pl:w-1/2 w-full">
            <h3 className="text-white pl:text-4xl text-2xl font-titleFont pl:mb-7 mb-3">Kompaniyamiz haqida <br className="pl:block hidden"/> Fikringiz</h3>
            <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="text" placeholder="Ismingizni kiriting" className="px-4 py-2 rounded-lg pl:w-1/2 w-full capitalize outline-none border-none font-semibold focus:outline-blue-900 focus:shadow-blue-700 shadow-md" />
            <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} rows={8} cols={20} placeholder="Fikringizni bildiring" className="px-4 py-2 rounded-lg w-full capitalize outline-none border-none font-semibold focus:outline-blue-900 focus:shadow-blue-700 shadow-lg"></textarea>
            <Button onClick={commentHandler} variant="contained" size="medium" className="pl:w-[10vw] w-[30vw]">Yuborish</Button>
        </form>
        <div className="pl:w-1/2 w-full pl:my-0 my-10 flex flex-wrap px-6 gap-8">
          {localStorage.getItem("ega") && localStorage.getItem("text") ? (
            <div className="pl:w-[15vw] w-[100vw] p-1z pl:p-0 p-3 pl:border-none border">
              <h3 className="font-bold text-2xl text-white font-titleFont mb-2 ">{localStorage.getItem("ega")}</h3>
              <p className="text-white font-sans pl:text-[20px] text-base">{localStorage.getItem("text")}</p>
            </div>
          ) : (
            <div className="pl:w-[15vw] w-[100vw] p-1z pl:p-0 p-3 pl:border-none border">
              <h3 className="font-bold text-2xl text-white font-titleFont mb-2 ">Obidjon Olimov</h3>
              <p className="text-white font-sans pl:text-[20px] text-base">Eng tushunarli va foydali kurs. Katta rahmat ustoz.</p>
            </div>
          )}
          <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
            <h3 className="font-bold text-2xl text-white font-titleFont mb-2 ">Behruzbek Zokiraliyev</h3>
            <p className="text-white font-sans pl:text-[20px] text-base">Kurs boyicha fikrim zor darslar juda tushunarli bolyapti sizlarga kattakon rahmat</p>
          </div>
          <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
            <h3 className="font-bold text-2xl text-white font-titleFont mb-2 ">Alibek Xudoyqulov</h3>
            <p className="text-white font-sans pl:text-[20px] text-base">Juda ham ajoyib, react bo'yicha skillarim oshishiga juda katta hissa qo'shdi. Yana shunaqa amaliyotlarni kutib qolaman</p>
          </div>
          <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
            <h3 className="font-bold text-2xl text-white font-titleFont mb-2 ">Yahyo Toʻxtaboyev</h3>
            <p className="text-white font-sans pl:text-[20px] text-base">Kurs juda ham zo'r va manfaatli bo'ldi ishlaringizga rivoj Alloh rozi bo'lsin.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer