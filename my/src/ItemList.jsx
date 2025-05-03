import React, { useState, useEffect } from 'react';
import List from './List'; // Import the reusable List component

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



useEffect(() => {

    // Fetch data from an API

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    } , []);



  if (loading) {
    return <p className='loading'>Loading <span className='dot'>......</span></p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1>Item List</h1>
      <List items={items} renderItem={(item) => <li key={item.id}>{item.title}</li>} />
    </div>
  );
}

export default ItemList;