import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/create-link', { url, userId: '123' });
    setShortUrl(response.data.shortUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && <a href={`http://localhost:3000/${shortUrl}`}>http://localhost:3000/{shortUrl}</a>}
    </div>
  );
}

export default App;