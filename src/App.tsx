import axios from "axios"
import { useEffect, useState } from "react"

type Task = {
  id: number
  name: string
  status: string
  job_id: number
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    const { data } = await axios.get('/api/tasks')

    setTasks(data.tasks)
    setIsLoading(false)
  }

  return (
    <div>
      <h1>Tasks</h1>

      <div className="container">
        {isLoading ? <pre>Carregando...</pre> : tasks.map(task => (
          <div key={task.id} className="task">
            <h2>{task.name}</h2>
            <p>{task.status}</p>
            <small>{task.job_id}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
