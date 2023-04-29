import { useContext, useState } from 'react';
import { ProjectContext } from '../ProjectContext';

const Project = () => {
  const { projects } = useContext(ProjectContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const project = {
      title,
      description,
      category,
      date,
    };

    const response = await fetch('https://quiz-3-server-nithya-1ww6.vercel.app/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });

    if (response.ok) {
      setTitle('');
      setDescription('');
      setCategory('');
      setDate('');
      console.log('Poject added');
    } else {
      console.error('Failure');
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} style={{'display': 'flex', 'flexDirection': 'column'}}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <button type="submit" style={{'width': '100px'}}>Add Project</button>
      </form>
    </div>
    
  );
};

export default Project;
