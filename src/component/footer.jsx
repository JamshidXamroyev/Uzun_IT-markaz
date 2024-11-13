const Footer = () => {
  return (
    <>
      <h3 className="text-white text-center pl:text-7xl text-2xl py-8 font-titleFont pl:mb-7 mb-3">Kompaniyamiz haqida <br className="pl:block hidden"/> Odamlar qanday fikrda</h3>
      <footer id="footer" className="flex justify-between items-start pl:flex-row flex-col pl:my-8 my-0 pl:py-8 py-16 relative">
          <i className="fa-regular fa-comments absolute -top-36 right-40 text-4xl text-white"></i>
          <div className="w-full pl:my-0 my-10 flex flex-wrap px-6 gap-8">
            {localStorage.getItem("ega") && localStorage.getItem("text") ? (
              <div className="pl:w-[15vw] w-[100vw] p-1z pl:p-0 p-3 pl:border-none border">
                <h3 className="font-bold text-2xl text-white font-titleFont mb-2 flex gap-2 "><i className="fa-solid fa-npuser"></i> {localStorage.getItem("ega")}</h3>
                <p className="text-white font-sans pl:text-[20px] text-base text-start leading-7">{localStorage.getItem("text")}</p>
              </div>
            ) : (
              <div className="pl:w-[20vw] w-[100vw] p-1z pl:p-0 p-3 pl:border-none border">
                <h3 className="font-bold text-2xl text-white font-titleFont mb-2 flex gap-2 "><i className="fa-solid fa-npuser"></i> Obidjon Olimov</h3>
                <p className="text-white font-sans pl:text-[20px] text-base text-start leading-7">Eng tushunarli va foydali kurs. Katta rahmat ustoz. Barchalaringizni ishlaringizga omad tilayman.</p>
              </div>
            )}
            <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
              <h3 className="font-bold text-2xl text-white font-titleFont mb-2 flex gap-2 "><i className="fa-solid fa-usernp"></i>Zokiraliyev B</h3>
              <p className="text-white font-sans pl:text-[20px] text-base text-start leading-7">Kurs boyicha fikrim zor darslar juda tushunarli bolyapti sizlarga kattakon rahmat</p>
            </div>
            <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
              <h3 className="font-bold text-2xl text-white font-titleFont mb-2 flex gap-2 "><i className="fa-solid fa-usernp"></i> Alibek Xudoyqulov</h3>
              <p className="text-white font-sans pl:text-[20px] text-base text-start leading-7">Juda ham ajoyib, react bo'yicha skillarim oshishiga juda katta hissa qo'shdi. Yana shunaqa amaliyotlarni kutib qolaman</p>
            </div>
            <div className="pl:w-[15vw] w-[100vw] pl:p-0 p-3 pl:border-none border">
              <h3 className="font-bold text-2xl text-white font-titleFont mb-2 flex gap-2 "><i className="fa-solid fa-usernp"></i> Yahyo Toʻxtaboyev</h3>
              <p className="text-white font-sans pl:text-[20px] text-base text-start leading-7">Kurs juda ham zo'r va manfaatli bo'ldi ishlaringizga rivoj Alloh rozi bo'lsin.</p>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer