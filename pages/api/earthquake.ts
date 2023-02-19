// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const start = req.query.start;
  const end = req.query.end;
  const minlat = req.query.minlat;
  const maxlat = req.query.maxlat;
  const minlon = req.query.minlon;
  const maxlon = req.query.maxlon;
  const minmag = req.query.minmag;

  axios
    .get(
      `https://deprem.afad.gov.tr/apiv2/event/filter?minlat=${minlat}&maxlat=${maxlat}&minlon=${minlon}&maxlon=${maxlon}&start=${start}&end=${end}&limit=10000&orderby=timedesc&minmag=${minmag}`
    )
    .then((response) => {
      if (response.data.length == 0) {
        res.status(200).send([
          {
            rms: "null",
            eventID: "null",
            location: "null",
            latitude: "null",
            longitude: "null",
            depth: "null",
            type: "null",
            magnitude: "null",
            country: "null",
            province: "null",
            district: "null",
            neighborhood: "null",
            date: "null",
            isEventUpdate: "null",
            lastUpdateDate: "null",
          },
        ]);
      } else {
        res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      res.status(400).send([
        {
          rms: "null",
          eventID: "null",
          location: "null",
          latitude: "null",
          longitude: "null",
          depth: "null",
          type: "null",
          magnitude: "null",
          country: "null",
          province: "null",
          district: "null",
          neighborhood: "null",
          date: "null",
          isEventUpdate: "null",
          lastUpdateDate: "null",
          error: error,
        },
      ]);
      res.status(500).send([
        {
          rms: "null",
          eventID: "null",
          location: "null",
          latitude: "null",
          longitude: "null",
          depth: "null",
          type: "null",
          magnitude: "null",
          country: "null",
          province: "null",
          district: "null",
          neighborhood: "null",
          date: "null",
          isEventUpdate: "null",
          lastUpdateDate: "null",
          error: error,
        },
      ]);
      console.log(error);
    });
}
