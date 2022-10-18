import {createServer, Server} from 'miragejs';

let server = null;

if (server) {
  server.shutdown();
}

server = createServer({
  routes() {
    this.get('/api/movies', () => {
      return {
        movies: [
          {id: 1, name: 'Inception', year: 2010},
          {id: 2, name: 'Interstellar', year: 2014},
          {id: 3, name: 'Dunkirk', year: 2017},
        ],
      };
    });
    this.post('/api/login', () => {
      return {
        displayName: 'Test UserName',
      };
    });

    this.get('/api/post', () => {
      return {
        items: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
          {id: 3, title: 'Post 3'},
        ],
      };
    });
  },
});
