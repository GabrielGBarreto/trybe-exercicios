import { calculateAge } from "../utils/calculate-age";
import ModuleDetails from "./moduleDetails";
import Title from "./title";

function HelloWorld() {
    const name = 'John Connor';
    const birth = '11/02/1989';
    const age = calculateAge(birth);

    return (
    <div>
        <Title />
        <ModuleDetails />
        <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
        <p>{`Age ${age}`}</p>
    </div>
    )
}

export default HelloWorld;