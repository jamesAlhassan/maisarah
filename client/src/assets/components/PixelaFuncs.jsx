import axios from "axios";
const pixelaEndPoint = "https://pixe.la/v1/users";

const date = new Date();

let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();
let currentDate = `${year}${month}${day}`;

const userLog = (username, tk, log) => {
  async function fetchUsers() {
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/users/${username}`
    );
    const users = await response.json();
    return users;
  }
  fetchUsers()
    .then((user) => {
      if (username === user.user.name) {
        console.log(`logging on pixela `);
        axios({
          method: "post",
          url: `https://pixe.la/v1/users/${username}/graphs/graph1/`,
          data: {
            date: `${currentDate}`,
            quantity: "50",
          },
          headers: {
            "X-USER-TOKEN": tk,
          },
        }).then((res) => {
          if (res.status === 200) {
            alert("Log submitted");
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .then((res) => {
      // push user to db
      console.log("pushing to db");
      axios({
        method: "post",
        url: "http://127.0.0.1:3000/api/v1/users",

        data: {
          name: username,
          log,
        },
      }).then((res) => {
        if (res.status === 201) {
          // then register on pixela
          console.log("registering on pixela");
          axios({
            method: "post",
            url: pixelaEndPoint,
            data: {
              token: tk,
              username,
              agreeTermsOfService: "yes",
              notMinor: "yes",
            },
          })
            .catch((err) => console.log(err))
            .then((res) => {
              if (res.status === 200) {
                console.log("creating graph");
                axios({
                  // create graph on pixela
                  method: "post",
                  url: `https://pixe.la/v1/users/${username}/graphs`,
                  data: {
                    id: "graph1",
                    name: "Maisarah Attendance",
                    unit: "commit",
                    type: "int",
                    color: "ajisai",
                  },
                  headers: {
                    "X-USER-TOKEN": tk,
                  },
                })
                  .catch((err) => console.log(err))
                  .then((res) => {
                    if (res.status === 200) {
                      console.log("new user logging on pixela");
                      axios({
                        // then log on pixela
                        method: "post",
                        url: `https://pixe.la/v1/users/${username}/graphs/graph1/`,
                        data: {
                          date: `${currentDate}`,
                          quantity: "50",
                        },
                        headers: {
                          "X-USER-TOKEN": tk,
                        },
                      })
                        .catch((err) => console.log(err))
                        .then((res) => {
                          if (res.status === 200) {
                            alert(`Attendance Successfully Logged!!!`);
                          }
                        });
                    }
                  });
              }
            });
        }
      });
    });
};

export default userLog;
