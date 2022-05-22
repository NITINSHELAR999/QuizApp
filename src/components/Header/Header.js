import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div >
      {/* <Link to="/" className="title">
        Quiz Hub
      </Link> */}
      
      <table>
        <tr>
           <th>
        <h1 className="title">Quiz Hub</h1>
        </th>
        <th>
          <ul className="summry">
            <li>
             Fill All The Details That Must Needed.
            </li>
            <li>
              Attend All Questions In The Given Quiz Is Manedatary.
            </li>
            <li>
              Each Question You Have 30 Seconds Time 
            </li>
            <li>
              When The Time Is Out Automatically Page Moves To The Next Question
            </li>
            <li>
           After Compliting The Task Your Final Score Will Be Shown There.
            </li>
                       
          </ul>
        </th>
        </tr>
       
      </table>
      <hr className="divider" />
    </div>
  );
};

export default Header;
