'use client'
import { useBearStore } from "../store"

const Test = () => {
    const { bears, increase } = useBearStore()

    return (
        <div>
            <div className="bg-pale-sky-900 h-screen p-20 text-tomato-50">
                blabla
            </div>
            <button onClick={()=>console.log(bears)}>{bears}</button>
            <button onClick={()=>increase(3)} name='increase'>increase</button>
        </div>
    )
}

export default Test