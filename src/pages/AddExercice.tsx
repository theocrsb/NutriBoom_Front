import AlimentAddButton from "../components/AlimentAddButton";
import "./Add.css"

const AddExercice = ()=>{

    //  PROPS----------------------------------------
     const exerciceFunction=(e:React.FormEvent)=>{
 console.log("props dans les exercices",e)
     }
//  PROPS----------------------------------------
    return(
          <div>
            <div className="list">
            <li className ="listeRecherche">
                <span className="text"> Exercice</span>      
            </li>
            <span className ="buttonValidate"><AlimentAddButton/></span>
            </div>
        </div>
    )
}
export default AddExercice;