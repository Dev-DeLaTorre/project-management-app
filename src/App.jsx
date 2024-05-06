import { useState, useRef } from "react";
import Project from "./Components/Project";
import noProjects from "./assets/no-projects.png";

let projects = [];

function App() {

  const inputsRef = useRef({});
  const [showProject, setShowProject] = useState(false);
  
  function ShowProjectForm(){
    if(showProject){
      setShowProject(false);
    }else{
      setShowProject(true);
    }
  }

  function DataHandlerProject(){
    projects = [{
      title: inputsRef.current['title'].value,
      description: inputsRef.current['description'].value,
      dueDate: inputsRef.current['dueDate'].value,
      tasks:[]
    },
    ...projects];

    console.log(projects);
    ShowProjectForm();
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={ShowProjectForm}>+ Add Project</button>
        <ul className="mt-8">
          {projects.map((el, idx) => {
            return <button key={idx} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{el.title}</button>  
          })}
        </ul>
      </aside>
      <div className={"mt-24 text-center w-2/3 " + (showProject ? "hidden" : "")}>
        <img className="w-16 h-16 object-contain mx-auto" src={noProjects}/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={ShowProjectForm}>Create new project</button>
      </div>
      {showProject && <Project projectFormHandler={ShowProjectForm} dataHandler={DataHandlerProject} ref={inputsRef} />}
      
    </main>

  )
}

export default App
