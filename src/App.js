import React,{useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import MovieCards from './components/MovieCards/MovieCards';
import useStyles from './styles';
import Movielottie from './MovieLottie';
import Load from './components/Load';

const alankey = 'e1374be2f61bc9f45156cabc8f228a4b2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const[latestMovies,setLatestMovies] = useState([]);
  const[activeMovie,setActiveMovie] = useState(-1);
  const [ loading,Setloading] = useState(true);
  const classes = useStyles();


  useEffect(() => {
    
    setTimeout(() => {
      Setloading(false)
     },3000)

    alanBtn({
      key: alankey,
      onCommand: ({command,results}) => {
        if(command === 'NewMovies')
        {
          setLatestMovies(results);
          setActiveMovie(-1);
        } else if (command === 'highlight') {
          setActiveMovie((prevActiveMovie) => prevActiveMovie+1);
        }
      }
    })

  }, [])

  return (
    <div>
    {
      loading ? 
      <Load/>
      : <div>
      <div className={classes.logoContainer}>
      <Movielottie/>
      </div>
        <MovieCards movies={latestMovies} activeMovie={activeMovie}/>
          <footer className="Footer">
        <p className="Footer__copyright">
          &copy; 2021 <span>Aviral Tandon</span>
        </p>
        <p className="Footer__message">
          <strong className="Footer__bold">&lt;/&gt;</strong> with{" "}
          <span className="Footer__bold">🧡</span>
        </p>
      </footer>
      </div>
    }
    </div>
  );
}

export default App;
