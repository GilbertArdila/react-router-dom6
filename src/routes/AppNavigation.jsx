import React from 'react'
import {Routes,Route,Link}from 'react-router-dom'
import{HtmlPage,CssPage,JsPage,ReactPage,InicioPage,ErrorPage} from '../pages'
import { Navbar } from './Navbar'




const AppNavigation = () => {
  return (
    <div>
        <Navbar/>
        <h1>Hello Anime</h1>
        <Routes>
            <Route path='/' element={<InicioPage/>}/>
            <Route path='/inicio' element={<InicioPage/>}/>
            <Route path='/html' element={<HtmlPage/>}/>
            <Route path='/css' element={<CssPage/>}/>
            <Route path='/js' element={<JsPage/>}/>
            <Route path='/react' element={<ReactPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export { AppNavigation}