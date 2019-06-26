import { Cat } from './cats.entity'

export const catsProviders = [{ provide: 'CatsRepository', useValue: Cat }]
