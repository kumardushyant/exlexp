import { getExcel } from '../../components/excel.util';

const sheet = (req, res) => {
  getExcel(res).then(data => {
      res.status(200).send();
  }).catch(err=>console.error(err));
}

export default sheet;