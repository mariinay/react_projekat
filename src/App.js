import './App.css';
import NavigationBar from './components/NavigationBar';
import Advertisements from './components/Advertisements';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

function App() {
  
  const advertisements = [
    {
      position: 'Java developer',
      company: 'Microsoft',
      description: 'Full-time job',
      img: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg'
    },
    {
      position: 'PHP developer',
      company: 'Ubisoft',
      description: 'Part-time job',
      img: 'https://res.cloudinary.com/cloudinary/image/upload/c_fill,w_770/dpr_3.0,f_auto,fl_lossy,q_auto/php_upload_cover_blog.jpg'
    },
    {
      position: 'Python developer',
      company: 'Nordeus',
      description: 'Full-time job',
      img: 'https://clay-atlas.com/wp-content/uploads/2019/07/python.jpg'
    }
  ];

  return (
    <div className="App">
      <NavigationBar />
      <Advertisements advertisements={advertisements} />
    </div>
  );
}

export default App;
