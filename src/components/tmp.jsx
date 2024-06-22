import React, { useState } from "react";
import axios from "axios";

const ImageQueryComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const apiUrl = "http://localhost:8000"; // Adjust as per your server's URL

  const queryImage = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/generate`, {
        textData: inputValue,
      });

      if (response.status === 200) {
        const blob = new Blob([response.data.result], {
          type: response.headers["content-type"],
        });
        const imageUrl = URL.createObjectURL(blob);
        setImgSrc(imageUrl);
        console.log("Image URL:", imageUrl);
      } else {
        throw new Error("Failed to query image");
      }
    } catch (error) {
      console.error("Error querying image:", error);
      // Handle error state or display a message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text data"
      />
      <button onClick={queryImage} disabled={loading}>
        Generate Image
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={imgSrc} alt="Generated Image" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default ImageQueryComponent;
