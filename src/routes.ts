import { Acryl } from 'acrylblends'
import { aboutPage, counterPage } from './page.tsx'

/** The routes, in a file that does not import the Node adapter, so browser code can import the type: `import type { AppType } from '../routes.ts'`. */
export const routes = new Acryl()
  .get('/', (c) => c.text('Acryl!'))
  .get('/about', (c) => c.html(aboutPage()))
  .get('/counter', (c) => c.html(counterPage()))

export type AppType = typeof routes
