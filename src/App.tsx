import axios from "axios"
import { useState } from "react"

type Task = {
  id: number
  name: string
  status: string
  job_id: number
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  async function getTasks() {
    const { data } = await axios.get('/api/tasks')

    setTasks(data.tasks)
  }

  return (
    <div>
      <h1>Tasks</h1>

      <button onClick={getTasks}>Search tasks</button>

      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <p>{task.status}</p>
          <small>{task.job_id}</small>
        </div>
      ))}
    </div>
  )
}
