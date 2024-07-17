import { Button } from './Button';
import { Task } from './Task';

type TodolistProps = {
  title: string; tasks: TaskProps[];
  // tasks: Array<Task>
};

export type TaskProps = {
  id: number;
  title: string;
  isDone: boolean;
};

export const Todolist = (props: TodolistProps) => {
  const { title, tasks } = props; //деструктурируем

  const mappedTasks = tasks.length
    ?
    tasks.map(el => {
      return (
        <Task 
        key={el.id}
        {...el}/>
        // <Task isDone={el.isDone} title={el.title}/>
        // <li><input type="checkbox" checked={el.isDone}></input><span>{el.title}</span></li>
      )
    }) :
    <div>Нет данных</div>
  
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {mappedTasks}

        {/* {tasks.map(el=> <li><input type="checkbox" checked={el.isDone}></input><span>{el.title}</span></li>)} */}
      </ul>
      <div>
        <Button title={'All'}></Button>
        <Button title={'Active'}></Button>
        <Button title={'Completed'}></Button>
      </div>
      
    </div>
  )
}
/* {tasks.map(el=>{
        
            <li> <input type='checkbox' checked={el.isDone} /> <span>{el.title}</span>
    </li>
        )
    } */

/* <li>
     
     <input type='checkbox' checked={tasks[0].isDone} /> <span>{tasks[0].title}</span>
        </li>
        <li>
   
   <input type='checkbox' checked={tasks[1].isDone} /> <span>{tasks[1].title}</span>
        </li>
        <li>
   
   <input type='checkbox' checked={tasks[2].isDone} /> <span>{tasks[2].title}</span>
        </li>
        */

