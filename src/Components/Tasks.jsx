
import { useState } from "react";

export default function Tasks({project, updateProjectList}){
    
    let task = "";
    const [tasks, setTasks] = useState(project.tasks);

    function getInputValue(e){
        task = e.target.value;
    }

    function addTask(){
        setTasks(prevTasks =>{
            console.log(prevTasks);
            console.log(task);
            const updatedTasks = [...prevTasks, task];
            console.log(updatedTasks);
            updateProjectList(updatedTasks);
            return updatedTasks;
        } );
    }

    function deleteTask(taskIdx){
        setTasks(prevTasks => {
            let updatedTasks = [...prevTasks];
            updatedTasks.splice(taskIdx, 1);
            updateProjectList(updatedTasks);
            return updatedTasks;
        })
    }

    return(
        <>
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                        <button className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                    <p className="mb-4 text-stone-400">{project.dueDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                </header>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <p className="text-stone-800 my-4"></p>
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={(e) => getInputValue(e)}/>
                <button className="text-stone-600 hover:text-stone-950" onClick={addTask}>Add Task</button>
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((el, idx) => {
                        return(
                            <li key={idx} className="flex justify-between my-4">
                                <p className="text-stone-800 my-4">{el}</p>
                                <button className="text-stone-700 hover:text-red-500" onClick={() => deleteTask(idx)}>Clear</button>
                            </li>
                        );    
                    } )}  
                </ul>
            </div>
        </>
    );
}