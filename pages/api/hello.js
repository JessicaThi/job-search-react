// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  axios.get('https://jobs.github.com/positions.json?description=ruby&page=1').then(result => {
    res.statusCode = 200
    res.json(result.data)
  })


}
