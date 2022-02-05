import './App.css';
import NavigationBar from './components/NavigationBar';
import Advertisements from './components/Advertisements';
import { useState } from 'react';
import Saved from './components/Saved';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvDetails from './components/AdvDetails';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

function App() {

  const [savedNum, setSavedNum] = useState(0);
  
  const [advertisements, setAdvertisements] = useState([
    {
      id: 1,
      position: 'Java developer',
      company: 'Microsoft',
      description: 'Junior developer',
      img: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
      saved: false
    },
    {
      id: 2,
      position: 'PHP developer',
      company: 'Ubisoft',
      description: 'Senior developer',
      img: 'https://res.cloudinary.com/cloudinary/image/upload/c_fill,w_770/dpr_3.0,f_auto,fl_lossy,q_auto/php_upload_cover_blog.jpg',
      saved: false
    },
    {
      id: 3,
      position: 'Python developer',
      company: 'Nordeus',
      description: 'Junior developer',
      img: 'https://clay-atlas.com/wp-content/uploads/2019/07/python.jpg',
      saved: false
    },
    {
      id: 4,
      position: 'C# developer',
      company: 'Atos',
      description: 'Medior developer',
      img: 'https://3.bp.blogspot.com/-jmx7uDzYo8M/Vj-Iofy_PRI/AAAAAAAAIu4/zf6E7yT2wEk/s1600/c7.jpg',
      saved: false
    },
    {
      id: 5,
      position: 'Java developer',
      company: 'Microsoft',
      description: 'Senior developer',
      img: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
      saved: false
    },
    {
      id: 6,
      position: 'Python developer',
      company: 'Nordeus',
      description: 'No experience needed',
      img: 'https://clay-atlas.com/wp-content/uploads/2019/07/python.jpg',
      saved: false
    }
  ]);

  const [savedAdvertisements, setSavedAdvertisements] = useState([]);

  const addToSaved = (id) => {
    console.log('add');
    setSavedNum(savedNum+1);
    advertisements.map((advertisement) => {
      if(advertisement.id === id){
        advertisement.saved = true;
      }
    });
    refreshSaved();
  };

  const removeFromSaved = (id) => {
    console.log('remove');
    if(savedNum > 0){
      setSavedNum(savedNum-1);
    }
    advertisements.map((advertisement) => {
      if(advertisement.id === id){
        advertisement.saved = false;
      }
    });
    refreshSaved();
  };
  
  const refreshSaved = () => {
    const newAdvertisements = advertisements.filter((advertisement) => advertisement.saved === true);
    setSavedAdvertisements(newAdvertisements);
  };

  const [advDetails, setAdvDetails] = useState();
  const readMore = (id) => {
    advertisements.map((advertisement) => {
      if(advertisement.id === id){
        setAdvDetails(advertisement);
      }
    });
  }

  return (
    <BrowserRouter>
      <NavigationBar savedNum={savedNum} />
      <Routes>
        <Route path='/' element = {
            <Advertisements advertisements={advertisements} onAdd={addToSaved} onRemove={removeFromSaved} readMore={readMore}/>
          }
        />
        <Route path='/saved' element = {
            <Saved savedAdvertisements={savedAdvertisements} onAdd={addToSaved} onRemove={removeFromSaved} readMore={readMore}/>
          }
        />

        <Route path='/details' element = {
          <AdvDetails advertisement={advDetails} onAdd={addToSaved} onRemove={removeFromSaved}/>
        }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
