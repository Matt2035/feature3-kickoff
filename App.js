import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getUsers } from "./users.js";
import { Header } from "./Header.js";

// TODO: import header

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("render");
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return html`
    <${Header} title="This is my starter">
      An example react starter without webpack and Babel
    </${Header}>

    <ul>
      ${users.map(
        (user) =>
          html` <li key="${user}" class="test">
            ${user.email} | ${user.first_name} ${user.last_name}
          </li>`
      )}
    </ul>

    <div>
      Contents of the page
    </div>
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
