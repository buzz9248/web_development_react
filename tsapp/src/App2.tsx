import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`안녕, ${name}!`);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type="text" onChange={handleChange} value={name} />
        <input type="submit" value="제출" />
      </form>
    </>
  )
}

export default App
