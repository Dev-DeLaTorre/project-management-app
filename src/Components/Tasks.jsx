export default function Tasks(){
    return(
        <>
            <div className="w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">Title</h1>
                        <button className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                    <p className="mb-4 text-stone-400">due date</p>
                    <p className="text-stone-600 whitespace-pre-wrap">description</p>
                </header>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <p className="text-stone-800 my-4"></p>
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                <button className="text-stone-600 hover:text-stone-950">Delete</button>
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    <li className="flex justify-between my-4">
                        <p className="text-stone-800 my-4">Task</p>
                        <button className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>
                    <li className="flex justify-between my-4">
                        <p className="text-stone-800 my-4">Task</p>
                        <button className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>    
                </ul>
            </div>
            

        </>
    );
}