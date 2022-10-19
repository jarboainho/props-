import './App.css';
import Profil from './Profil/Profil';
import photo from './photo.jpg'
import sample from './video/video.mp4'


function App() {
   const handleName = () => {
     alert("hello word")
   }
  return (
    <div className="app">
       <div className="vdo">
         <video className="videoTag" autoPlay loop muted>
           <source src={sample} type="video/mp4"/>
         </video>
      </div>
     <div className="pers">
       <Profil FullName='Mohamed' Bio='Good' Profession='Engineer' handleName={handleName}>
        <img className='img' src={photo} alt="/"/>
       </Profil>
     </div>
    </div>
  );
}

export default App;

