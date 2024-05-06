import { forwardRef } from "react";

export default forwardRef(function Project({projectFormHandler, dataHandler}, ref){
    return(
        <>
            <div className="w-[35rem] mt-16">
                <form className="mt-4 text-left">
                    <menu className="flex items-center justify-end gap-4 my-4">
                        <button type="button" className="text-stone-800 hover:text-stone-950" onClick={projectFormHandler}>Cancel</button>
                        <button type="button" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={dataHandler}>Save</button>
                    </menu>
                    <label htmlFor="title" className="text-sm font-bold uppercase text-stone-500">title</label>
                    <input id="title" ref={el => ref.current['title'] = el} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                    <label htmlFor="description" className="text-sm font-bold uppercase text-stone-500">description</label>
                    <textarea id="description" ref={el => ref.current['description'] = el} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                    <label htmlFor="dueDate" className="text-sm font-bold uppercase text-stone-500">due date</label>
                    <input id="dueDate" type="date" ref={el => ref.current['dueDate'] = el} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </form>
            </div>
        </>
    );
})