import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hadeel' },
      { id: 2, name: 'Amer' },
      { id: 4, name: 'Omar' },
      { id: 6, name: 'Ameen' },
      { id: 10, name: 'Mr.Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
    ];
    return {heroes};
  }
}
