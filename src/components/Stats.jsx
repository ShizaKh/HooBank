import {stats} from '../constants'
import styles from '../style'

const Stats = () => (
    <div className={` ${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold text-30px leading-[43px] text-white xs:text-[40px] xs:leading-[53px]'>{stat.value}</h4>
          <p className='font-poppins font-normal text-15px leading-[21px] text-gradient xs:text-[20px] xs:leading-[26px] ml-3 uppercase'>{stat.title}</p>
        </div>
      ))}
    </div>
  )


export default Stats