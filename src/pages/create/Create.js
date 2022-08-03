import { useState } from 'react'

// react component
import Select from 'react-select'

// styles
import './Create.css'

// categories
const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    (name, details, dueDate, category.value)
  }

  return (
    <div className='create-form'>
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            type="text"
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
            required
            type='text'
            onChange={e => setDetails(e.target.value)}
            value={details}
          ></ textarea>
        </label>
        <label>
          <span>Set Due Date:</span>
          <input
            type="date"
            required
            onChange={e => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign To:</span>
          {/* assignee select here */}
        </label>
        <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
