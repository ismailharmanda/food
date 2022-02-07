import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer A1qAa5fghmg7qSiopNLqNmouDpqkWAzNtdO9NKtXlOKgayBOyQwt1MCM3SJ0S-7o6J1_c7d2bWylNNAvVqYq49mrbrszq_uayPbSK5nuaKIU1s-UODrQBU2-m9f8YXYx",
  },
});
