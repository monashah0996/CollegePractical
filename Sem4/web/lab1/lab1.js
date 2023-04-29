const tasklist = [
    {
        title: 'Humber',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
        id: 1,
    },
    {
        title: 'MERN',
        tasks: ['Lab', 'Project', 'Quiz'],
        id: 2,
    },
    {
        title: 'Java',
        tasks: ['Group Discussion', 'Exam', 'Assignment'],
        id: 3,
    },
]

const Header = () => {
    return (
      <header>
        <h2>Task Lists</h2>
        <h2>Total Number Of Task: 9</h2>
      </header>
    );
  };
   
  const Task = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <div>  
          <ul>
          <li>{props.tasks[0]}</li>
          <li>{props.tasks[1]}</li>
          <li>{props.tasks[2]}</li>
          </ul>
        </div>
      </div>
    );
  };
   
  const App = () => {
    return (
      <div>
        <Header />
        {tasklist.map((tasks) => (
          <Task title={tasks.title} tasks={tasks.tasks} key={tasks.id.toString()} />
        ))}
      </div>
    );
  };
  
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);