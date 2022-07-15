import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'

type Task = {
  id: number
  name: string
  status: string
  job_id: number
}

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/tasks', () => {
        return {
          tasks: [
            { id: 1, name: 'Teste', status: 'em_andamento', job_id: 1 },
            { id: 2, name: 'Outra coisa', status: 'em_andamento', job_id: 1 },
            { id: 3, name: 'Lalala', status: 'em_andamento', job_id: 1 },
            { id: 4, name: 'Nana', status: 'em_andamento', job_id: 1 },
          ]
        }
      })
    }
  })

  return server
}