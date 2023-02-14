// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const { id } = req.query

  axios
    .get(
      `https://deprem.afad.gov.tr/apiv2/event/filter?eventid=${id}`
    )
    .then((response) => {
      res.status(200).send(response.data);
      

    })
    .catch((error) => {
        res.status(400).send({
            "rms": null,
            "eventID": null,
            "location": null,
            "latitude": null,
            "longitude": null,
            "depth": null,
            "type": null,
            "magnitude": null,
            "country": null,
            "province": null,
            "district": null,
            "neighborhood": null,
            "date": null,
            "isEventUpdate": null,
            "lastUpdateDate": null,
            "error": error
            });
          res.status(500).send({
            "rms": null,
            "eventID": null,
            "location": null,
            "latitude": null,
            "longitude": null,
            "depth": null,
            "type": null,
            "magnitude": null,
            "country": null,
            "province": null,
            "district": null,
            "neighborhood": null,
            "date": null,
            "isEventUpdate": null,
            "lastUpdateDate": null,
            "error": error
            });
      console.log(error);
    });

}
