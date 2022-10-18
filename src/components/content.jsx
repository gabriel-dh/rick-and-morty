import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/content.css'
import Portal from '../images/portal.png'
import rick from '../images/rick.png'


function Content() {

const [ characters , setCharacters] = useState('')
const [count , setCount] = useState(1)
const url =`https://rickandmortyapi.com/api/character/?page=${count}`

function fecht(url){
     fetch(url).
     then(response => response.json()).
     then(data => setCharacters(data))
    
  }




  useEffect(()=>{
   fecht(url);
  },)


  // const less = ()=>
  // {

  // }

  let result = 1
  console.log(count)

  return (
    <div className='container-content'>
      <div className='background-image'>
           <img src={rick} alt="" />
        </div>
        <h1 id='content'>hola</h1>
       <div className='content' >
         {characters.results?.map(result => (
            <div className='content-cards'>
              <div className='cards-imgs'>
                <img src={result.image} alt="" />
                </div>
                <div className='cards-information' onClick={function(){console.log(result.id)}}>
                   <div> <span className='name'>{result.name}</span></div>
                    <div> <span>Location:</span> {result.location.name}</div>
                    <div><span>Species:</span> {result.species}</div>
                    <div><span>Status:</span> {result.status}</div>
                </div>
            </div>
         ))}

         
       </div>
       <div className='buttons'>
          <button onClick={function(){  setCount(count - 1)  }}> <a href="#content">Back</a> </button> <button onClick={ function(){  setCount(count + 1)  }}><a href="#content">Next</a></button>
         </div>
    
    </div>
  )
}

export default Content