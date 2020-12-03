// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const base_url = 'https://jobs.github.com/positions.json?';

export default (req, res) => {
  axios.get(`${base_url}location=${req.query.location}`).then(result => {
    res.statusCode = 200
    res.json(result.data)
  })
}
