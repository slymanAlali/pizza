/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const First: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
      .get ('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        
      })
      .catch((error) =>  {
          console.error('Error fetching data:');
    })
};

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
};

export default First