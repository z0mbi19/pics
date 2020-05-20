import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID mF0djrppdAlNwjqbMu7i-cJyi5_c4mxiVhgnFw332-s",
  },
});
