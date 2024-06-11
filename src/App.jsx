import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  // bg-primary gives black bg to the whole site's page
  <div className="bg-primary w-full overflow-hidden">
    {/* ⬇ this div reprents the whole width of navbar part even if ctrl - */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* this is the div where content of navbar is placed */}
      <div className={ `${styles.boxWidth}`}>
       <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
    
  </div>
);

export default App;