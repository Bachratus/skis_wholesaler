import skis from '../components/Images/skis.jpeg'
import accessories from '../components/Images/accessories.jpg'
import articles from '../components/Images/articles.jpg'
import Baner from '../components/UI/Baner';
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.new_bikes}><Baner image={skis} text='new skis'/></div>
      </div>
      <div>
        <div className={classes.articles}><Baner image={accessories} text='accessories'/></div>
        <div className={classes.accessories}><Baner image={articles} text='articles'/></div>
      </div>
    </div>
  );
};
export default Home;
