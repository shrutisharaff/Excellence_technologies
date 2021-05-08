import React from 'react'; 
class Rest extends React.Component
{
  componentDidMount() 
  {
    const apiUrl = 'http://www.example.com/api/get/1'; 
    fetch(apiUrl) 
      .then((response) => response.json()) 
      .then((data) => console.log('This is the data', data)); 
  } 
  
  render() 
  { 
    return <h1>Check the browser 'console' </h1>; 
  } 
} 
export default Rest; 
