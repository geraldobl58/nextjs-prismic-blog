import { useState, useEffect } from 'react';

type Post = {
  id: string;
  title: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/posts').then(response => {
      response.json().then(data => {
        setPosts(data);
      });
    });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
