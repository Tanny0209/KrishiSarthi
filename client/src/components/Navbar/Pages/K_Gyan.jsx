import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const K_Gyan = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to convert regular YouTube URL to embedded URL
  const getEmbeddedUrl = (url) => {
    const videoId = url.includes('watch?v=') ? url.split('v=')[1] : url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/K_Gyan');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Function to filter videos based on search input
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4" style={{ fontWeight: 'bold', color: '#2c3e50' }}>
        K Gyan: Agriculture Knowledge Videos
      </h1>
      
      {/* Search Bar */}
      <div className="mb-5 text-center">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search videos by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '50%', margin: '0 auto', padding: '10px', fontSize: '1.1rem' }}
        />
      </div>

      <div className="row">
        {filteredVideos.map((video) => (
          <div className="col-md-4 col-sm-12 mb-4" key={video._id}>
            <div className="card h-100 shadow border-0 video-card">
              <div className="ratio ratio-16x9">
                <iframe
                  src={getEmbeddedUrl(video.url)}  // Convert the URL before embedding
                  allowFullScreen
                  title={video.title}
                  className="embed-responsive-item"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: '600', color: '#34495e' }}>
                  {video.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS styles */}
      <style jsx>{`
        .video-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .card-title {
          transition: color 0.3s ease;
        }

        .video-card:hover .card-title {
          color: #e67e22; /* Change to a more vibrant color on hover */
        }

        .search-bar {
          transition: box-shadow 0.3s ease;
        }

        .search-bar:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default K_Gyan;
