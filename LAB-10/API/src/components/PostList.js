import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // simulate delay (so loading is visible)
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 1000);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 🔄 Loading UI
  if (loading) {
    return <h2 className="loading">Loading data...</h2>;
  }

  // ❌ Error UI
  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  // ✅ Data UI
  return (
    <div className="post-container">
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;