import {teacher} from '../util/constants'

const Billing = () => {
  return (
    <>
     <h1 className='font-bold text-center text-white pl:text-7xl text-4xl py-10 font-titleFont'>Bizning O'qituvchilar</h1>
      <section id="product" className="flex pl:justify-around justify-start items-center pl:flex-row flex-col flex-wrap">
        {teacher.map(item => (
          <div className="flex pl:justify-center justify-start items-center flex-wrap flex-col pl:w-[24vw] pl:m-2 my-6 border pl:p-0 p-2 pl:h-[55vh]" key={item.id}>
            <div className='pl:w-[200px] w-[70vw] pl:h-[40vh] pl:p-0 p-6 flex justify-center items-center'>
              <img src={item.img} alt="Image" className='w-full rounded-lg duration-500 pl:hover:translate-y-[-20px] hover:translate-y-[-10px]'/>
            </div>
            <h2 className='text-white font-semibold font-sans text-[20px] my-1'>O'qituvchi: {item.title}</h2>
            <h5 className='text-white'>Mentor: {item.subtitle}</h5>
          </div>
        ))}
      </section>
    </>  
  )
}

export default Billing