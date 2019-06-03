import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 3b865726253202d2a6ab1984aeeab2c747e191ded0b5f29e64d0f9ee0fe414d6"
  }
});
