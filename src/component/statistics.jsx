import { statistics } from "../util/constants"

const Statistics = () => {
  return (
    <div className="flex justify-around items-center pl:flex-row flex-col pl:mb-[4vh] mb-[10vh] mt-[4vh]">
        {statistics.map(item => (
            <div key={item.id} className="flex justify-center items-center pl:gap-0 gap-5 flex-col pl:m-0 m-7 border pl:w-1/4 w-full">
                <h3 className="font-semibold font-serif pl:text-5xl text-4xl text-white m-0">{item.value}</h3>
                <p className="font-normal font-titleFont pl:text-3xl text-2xl text-gradient">{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Statistics