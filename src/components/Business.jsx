import { features } from "../constants"
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    {/* the icons in cards */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon"  className="w-[50%] h-[50%] object-contain"/>
    </div>
    {/* card descriptions */}
    <div  className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1" >{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* left side */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button  styles="mt-10" />
      </div>
      {/* right side */}
      <div className={`${layout.sectionImg} flex-col`}>
        {/* ...feature means the rest of props associated with features */}
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
      </div>
    </section>
  )
}

export default Business