export default function Project({projectHandler}){
    return(
        <>
            <div className="w-[35rem] mt-16">
                <form className="mt-4 text-right">
                    <menu className="flex items-center justify-end gap-4 my-4">
                        <button type="button" className="text-stone-800 hover:text-stone-950" onClick={projectHandler}>Cancel</button>
                        <button type="button" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </menu>
                </form>
            </div>
        </>
    );
}