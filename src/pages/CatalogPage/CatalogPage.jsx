import css from './CatalogPage.module.css';
import FilterPanel from '../../components/FilterPanel/FilterPanel.jsx';
import Section from '../../components/Section/Section.jsx';



const CatalogPage = () => {
  return (
    <Section className={css.section}>
      <FilterPanel />
    </Section>
  );
};

export default CatalogPage;