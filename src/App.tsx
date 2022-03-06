import React, { useState } from 'react';

interface Task {
	name: string;
	done: boolean;
}

function App(): JSX.Element {
	const [newTask, setNewTask] = useState<string>('');
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTask(newTask);
		setNewTask('');
	};

	const addTask = (name: string): void => {
		const newTasks = [...tasks, { name, done: false }];
		setTasks(newTasks);
	};

	const toggleDoneTask = (index: number): void => {
		const newTask: Task[] = [...tasks];
		newTask[index].done = !newTask[index].done;
		setTasks(newTask);
	};

	const handleDelete = (index: number): void => {
		console.log(index);
		const newTasks: Task[] = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div className="container p-4">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<form onSubmit={handleTask}>
								<input
									type="text"
									onChange={(e) => setNewTask(e.target.value)}
									value={newTask}
									className="form-control"
									autoFocus
								/>
								<button className="btn btn-success btn-block mt-2">Save</button>
							</form>
						</div>
					</div>
					{tasks.map((task: Task, index: number) => (
						<div key={index} className="card card-body mt-2">
							<h2 style={{ textDecoration: task.done ? 'line-through' : ' ' }}>{task.name}</h2>
							<div>
								<button className="btn btn-secondary" onClick={() => toggleDoneTask(index)}>
									{task.done ? 'On' : 'Off'}
								</button>
								<button className="btn btn-danger" onClick={() => handleDelete(index)}>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
