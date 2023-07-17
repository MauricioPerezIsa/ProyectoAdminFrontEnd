import { BrowserRouter, Route, Routes } from "react-router-dom"
import PersonalAdm from "./menu/PersonalAdm";
import Alumnos from "./menu/Alumnos";
import DetalleCursado from "./menu/DetalleCursado";



function Menu() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/personalAdministrativo" element={<PersonalAdm/>} />
                    <Route path="/alumnos" element={<Alumnos/>} />
                    <Route path="/detalleCursado" element={<DetalleCursado/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Menu
