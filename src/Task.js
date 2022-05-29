import { Checkbox, Button } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

export default function Task({ task, doneTask, deleteTask, editTask }) {

  const className = 'task ' + (task.done ? 'task-done' : '');

  return (
    <div className={className}>
      <Checkbox onChange={doneTask}>
        <p className="task-title">{task.title}</p>
      </Checkbox>
        <div className='task_icons'>
          {!task.done
          ? <EditOutlined onClick={editTask} style={{ fontSize: 16, cursor:'pointer' }} />
          : null
          }
          <CloseOutlined onClick={deleteTask} style={{ fontSize: 16, cursor:'pointer' }} />
        </div>
    </div>
  );
}
