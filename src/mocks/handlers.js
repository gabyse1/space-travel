import { rest } from 'msw';

const baseURL = 'https://api.spacexdata.com/v3/';

const handlers = [
  rest.get(`${baseURL}dragons`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        id: 'dragon1',
        name: 'Dragon 1',
        type: 'capsule',
        description: 'Description Dragon 1',
        flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
        crew_capacity: 0,
        dry_mass_kg: 4200,
        dry_mass_lb: 9300,
        first_flight: '2010-12-08',
        heat_shield: {
          dev_partner: 'NASA',
        },
      },
    ]),
  )),
  rest.get(`${baseURL}rockets`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        rocket_name: 'Falcon 1',
        description: 'Description Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
      },
    ]),
  )),
  rest.get(`${baseURL}missions`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        mission_id: '9D1B7E0',
        mission_name: 'Thaicom',
        description: 'Description Thaicom',
      },
    ]),
  )),
];

export default handlers;
