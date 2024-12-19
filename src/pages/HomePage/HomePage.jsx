// import Button from '../../components/Button/Button.jsx';
import css from "./HomePage.module.css";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.desc}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={css.btnViewNow}>
        View Now
      </NavLink>
      </div>
    </div>
  );
};

export default HomePage;


// import { Link } from "react-router-dom";
// import Container from "../../components/Container/Container.jsx";
// import Section from "../../components/Section/Section.jsx";

// import css from "./HomePage.module.css";

// const HomePage = () => {
//   return (
//     <Section className={[css.section, css.sectionHero]}>
//       <Container className={css.container}>
//         <h1 className={css.titleHero}>Campers of your dreams</h1>
//         <p className={css.textHero}>
//           You can find everything you want in our catalog
//         </p>
//         <Link to="/catalog" className={css.btnViewNow}>
//           View Now
//         </Link>
//       </Container>
//     </Section>
//   );
// };

// export default HomePage;



// import Button from '../../components/Button/Button';
// import css from './HomePage.module.css';

// function HomePage() {
//   return (
//     <div className={css.photo}>
//       <div className={css.content}>
//           <div className={css.text}>
//              <h1>Campers of your dreams</h1>
//              <h2>You can find everything you want in our catalog</h2>
//           </div>
//               <Button to="/catalog">View Now</Button>
              
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import { Container } from "../../components/Container/Container.jsx";
// import { Button } from "../../components/Button/Button.jsx";
// import css from "./HomePage.module.css";

// const HomePage = () => {
//   return (
//     <>
//       <div className={css.box}>
//         <Container>
//           <div className={css.boxTitle}>
//             <h1 className={css.title}>Campers of your dreams</h1>
//             <p className={css.text}>
//               You can find everything you want in our catalog
//             </p>
//             <Button linkRef="/catalog">View Now</Button>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default HomePage;