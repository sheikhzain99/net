
import React from 'react';
import ReactDom from 'react-dom';
import Cards  from './Card';
import  './index.css';
import Sdata from './Sdata';



   
ReactDom.render(

    <>
      <h1 className="heading_style">List of 6 Netflix Best Series </h1>
   {Sdata.map(function ncard(val){
 return(
    <Cards  
    imgsrc ={val.imgsrc}
    title = {val.title}
    sname = {val.sname}
   links = {val.links}
/>
);

   })}
    </>,
    document.getElementById('root')  
);
 