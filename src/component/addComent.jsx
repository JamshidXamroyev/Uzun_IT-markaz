import {  Button } from "@mui/material"
import { useState } from "react"

const AddComent = () => {
    const [inpValue, setInpValue] = useState("")
    const [textValue, setTextValue] = useState("")

    const commentHandler = () => {
      localStorage.setItem("ega", inpValue)
      localStorage.setItem("text", textValue)
      setTextValue("")
      setInpValue("")
  }

  return (
    <div className="my-16 flex justify-between items-start pl:gap-20 gap-0">
        <form className="flex justify-start items-start flex-col gap-3 pl:w-1/2 w-full">
              <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="text" placeholder="Ismingizni kiriting" className="px-4 py-2 rounded-lg pl:w-1/2 w-full capitalize outline-none border-none font-semibold focus:outline-blue-900 focus:shadow-blue-700 shadow-md" />
              <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} rows={8} cols={20} placeholder="Fikringizni bildiring" className="px-4 py-2 rounded-lg w-full capitalize outline-none border-none font-semibold focus:outline-blue-900 focus:shadow-blue-700 shadow-lg"></textarea>
              <Button onClick={commentHandler} variant="contained" size="medium" className="pl:w-[10vw] w-[30vw] flex gap-2">Yuborish <i className="fa-solid fa-comment-medical"></i></Button>
          </form>
          <div className="pl:w-1/2 w-full flex justify-around pl:flex-row flex-col hoverul">
            <ul className="flex flex-col gap-2 text-white">
              <h3 className="text-white text-2xl">Jamiyat</h3>
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">Blog</a>
              </li>

              <li>
                <a href="">Marketing</a>
              </li>
              
              <li>
                <a href="">Darslar</a>
              </li>
              
              <li>
                <a href="">Kelishuvlar</a>
              </li>

            </ul>

            <ul className="flex flex-col gap-2 text-white">
              <h3 className="text-white text-2xl">Joylashuv</h3>
              <li>
                <a href="">Surxandaryo vil</a>
              </li>

              <li>
                <a href="">Uzun tuman</a>
              </li>

              <li>
                <a href="">Uztelecom binosi</a>
              </li>

            </ul>

            <ul className="flex flex-col gap-2 text-white">
              <h3 className="text-white text-2xl">Hamkorlar</h3>
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">Blog</a>
              </li>

              <li>
                <a href="">Marketing</a>
              </li>
              
              <li>
                <a href="">Darslar</a>
              </li>
              
              <li>
                <a href="">Kelishuvlar</a>
              </li>

            </ul>
          </div>
    </div>
  )
}

export default AddComent