import { Input } from "@mui/material"
import { useState } from "react"


const Footer = () => {
  const [inpValue, setInpValue] = useState("")
  const [textValue, setTextValue] = useState("")
  return (
    <footer id="footer" className="flex justify-between items-center pl:flex-row flex-col py-10">
        <form className="flex justify-start items-start flex-col gap-10 w-1/2">
            <h3 className="text-white pl:text-4xl text-2xl font-titleFont">Kompaniyamiz haqida <br className="pl:block hidden"/> Fikringiz</h3>
            <Input />
            <textarea rows={2} cols={30} placeholder="Fikringizni bildiring"></textarea>
            <button type="submit">Yuborish</button>
        </form>
        <div className="w-1/2">MAlom</div>
    </footer>
  )
}

export default Footer