import React, { useState } from 'react'
import './App.css';

import Heading from './components/atoms/Heading/Heading'
import SearchForm from './components/molecules/SearchForm/SearchForm'
import GifGrid from './components/organisms/GifGrid/GifGrid'

function App() {
  const [categories, setCategories] = useState([])
  return (
    <div className="App">
      <section className='main__title'>
        <Heading size='title'>
          Giff-art
        </Heading>
        <SearchForm onSubmit={setCategories}/>
      </section>
      {categories.map(category => <GifGrid key={category} category={category}/> )}
    </div>
  );
}

export default App;
