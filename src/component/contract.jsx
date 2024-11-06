import { myStyles } from "../util/styles"
import { contractImg } from "../util/constants"
import { Button } from "../ui"

const Contract = () => {
  return (
    <>
      <h1 className="text-center pl:py-14 py-5 font-titleFont text-white pl:text-6xl text-3xl">Bizning xizmatlar</h1>
      <section className={`${myStyles.section} pl:my-10 my-0`} id="service">
        <div className={`${myStyles.sectionInfo} mx-w-[47vw]`}>
          <h2 className="font-semibold pl:text-4xl text-2xl font-titleFont text-white">
            Bir necha oson qadamda <br />
            Kontrakt tuzish
          </h2>
          <p className="font-normal text-justify pl:text-[20px] text-base pl:leading-7 leading-0 font-sans text-white mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis id natus cupiditate, itaque odio voluptatum ipsam iste optio nemo praesentium accusantium, facilis doloremque? Perspiciatis eum accusantium veniam tenetur necessitatibus porro.
          </p>
          <Button title={"Batafsil"} m={"mt-5"}/>
        </div>
        <div className={`${myStyles.sectionImage}`}>
          <img src={contractImg} alt="image" className="rounded-lg pl:my-0 my-5" />
        </div>
      </section>
    </>
  )
}

export default Contract