import './contador.css'
import react, {usestate} from 'react'

export default function Contador() {
    const[contador, setContador] = usestate(0)

    return(
        <div className="contador">
            <p>has hecho click{contador}</p>
            <button onClick={() => setContador(contador + 1)}>incrementar valor</button>
        </div>
    );
}

export default Contador