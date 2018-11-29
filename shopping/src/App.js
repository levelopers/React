import React, { Component } from 'react';
import './App.css';

import Header from './partials/header/header'
import Navbar from './partials/navbar/navbar';


const products = require('./products.json');//simulate fetch api


class App extends Component {
  render() {
    return (
      <div >
        {/* <Products/> */}
        <Header/>
        <Navbar />

      </div>
    );
  }
}


// function Products(){
//   return (
//     <div>
//       <ul>
//         {products.map(e=>{
//           console.log(e._id);
          
//           return (
//             <li key={e.id}>
//               {e.title}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
  
// }


export default App;
