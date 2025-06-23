import { useRouteError } from "react-router-dom"

export const Errorpage = () => {
  
const error = useRouteError();
return(
 <div className="centered-container">
  <h1>404 Not Found!!! 😥</h1>
</div>
)

}
