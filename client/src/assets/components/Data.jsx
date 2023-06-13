// import { useState, useEffect } from "react";
// import axios from "axios";
// const Data = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     async function fetchUsers() {
//       const response = await fetch("http://127.0.0.1:3000/api/v1/users");
//       const users = await response.json();
//       return users;
//     }
//     fetchUsers().then((users) => {
//       console.log(users.users[0]);
//       for (let i = 0; i < users.users.length; i++) {
//         // console.log(users.users[i]);
//         if (users.users[i].name !== "test") {
//           console.log("Yes");
//         }
//       }
//     });
//   }, []);
//   return <div>Data</div>;
// };
// export default Data;
