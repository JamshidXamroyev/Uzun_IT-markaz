import { myStyles } from "../util/styles"
import { contractImg } from "../util/constants"
import { Button } from "../ui"

const Contract = () => {
  return (
    <>
      <h1 className="text-center pl:py-10 pt-10 font-titleFont text-white pl:text-6xl text-3xl">Bizda To'lov</h1>
      <section className={`${myStyles.section} pl:my-10 my-0`} id="service">
        <div className={`${myStyles.sectionInfo} mx-w-[47vw]`}>
          <h2 className="font-semibold pl:text-4xl text-2xl font-titleFont text-white">
            Bizning to'lov  
            Usullarimiz
          </h2>
          <p className="font-normal text-justify pl:text-[20px] text-base pl:leading-7 leading-0 font-sans text-white mt-5">
            Bizda to'lov har oyning 20-sanasida 27-sanasigacha amalga oshiriladi. To'lovlar karta yoki naqd pul yordamida tolanilishi mumkin. Mobodo kimningdir ayni shu sanada to'lovni amalga oshirishga imkoniyati bo'lmasa, o'qituvchi bilan gaplashishi va to'lovni ma'lum bir muddatga kechiktirishlari mumkin.
          </p>
          <Button title={"Batafsil"} m={"mt-5"}/>
        </div>
        <div className={`${myStyles.sectionImage}`}>
          <img src={contractImg} alt="logo" className="rounded-lg pl:my-0 my-5" />
        </div>
      </section>
    </>
  )
}

export default Contract