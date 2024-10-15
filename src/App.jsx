import React, { useState } from 'react'

export const App = () => {

    //
    const [lista, setLista] = useState(["peras","manzanas"])
    const [FrutaNueva, setFrutaNueva] = useState("")

    //las funciones con la logica:
    const agregarFruta=(evento)=>{
        evento.preventDefault();  //sin esto se reinicia la pagina
        //alguna validacion
        if(FrutaNueva!==""){
            setLista([FrutaNueva,...lista]);
            setFrutaNueva("")
        }

    }

    const resetear=(evento)=>{
        evento.preventDefault();
        setLista([])
    }

    const handleInputChange=(evento)=>{
        //ASI: onChange={ handleInputChange }  el evento esta IMPLICITO 
        //si lo queremos explcito hay que usar esto: onChange={ (ev)=>handleInputChange(ev) }

        console.log(evento.target.value)
        setFrutaNueva(evento.target.value)
    }

  return (
    <div>
        <h3>APP</h3>
        <hr />
        {/*formualrio para agregar elementos*/}
        <form >
            <input 
                type="text" 
                value={FrutaNueva}
                placeholder='ingrese fruta...'
                onChange={ handleInputChange }
            />
             <button onClick={ agregarFruta } >ADD</button>
        </form>
        <hr />
        {/*mostramos la lista*/ }
        <ol>
            {lista.map((elem)=>(
                        <li> 
                            <h3>fruta: {elem}</h3>
                        </li>
                    ))
            }
        </ol>
        <hr />
        {/*boton reset*/}
        <button onClick={ (eve)=>resetear(eve) }>RESET</button>
    </div>
  )
}
