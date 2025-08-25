import React from 'react'
import SignUp from './components/signUp';
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom';
function App (){
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  )
}
export default App;


