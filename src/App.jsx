
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container'
import Head from './components/head/head' 
import Table from './components/table/table'
function App() {
  

  return (

   <Container className='container'>
        <Head/>
        <Table />
   </Container>
     
    
  )
}

export default App;
