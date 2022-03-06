import React, { Fragment, useState } from 'react';

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

	const addTask = (name: string) => {
		const newTasks = [...tasks, { name, done: false }];
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
								/>
								<button className="btn btn-success btn-block mt-2">Save</button>
							</form>
						</div>
					</div>
					{tasks.map((task: Task, index: number) => (
						<h1 key={index}>{task.name}</h1>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
