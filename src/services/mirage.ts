import { createServer } from 'miragejs'

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api'
      this.timing = 1000

      this.get('/tasks', () => {
        return {
          tasks: [
            { id: 1, name: 'Teste', status: 'em_andamento', job_id: 1 },
            { id: 2, name: 'Outra coisa', status: 'em_andamento', job_id: 1 },
            { id: 3, name: 'Lalala', status: 'em_andamento', job_id: 1 },
            { id: 4, name: 'Nana', status: 'em_andamento', job_id: 1 }
          ]
        }
      })
    }
  })

  return server
}