import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default function Task({task, doneTask, deleteTask}) {

    const ActionButton = () => (
        <div>{
        !task.done 
        ? <p><CheckOutlined onClick={doneTask} style={{color:'green'}}/></p> 
        : <p><CloseOutlined className='icon_close' onClick={deleteTask} style={{color:'#6c6c6c50'}}/></p>}</div>
    )

    const className = 'task ' + (task.done ? 'task-done' : '')

  return (
    <div className={className}>
        <p className='task-title'>{task.title}</p>
        <ActionButton/>
    </div>
  )
}
