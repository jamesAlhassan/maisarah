const pixelaEndPoint = "https://pixe.la/v1/users";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}${month}${day}`;

const request = (tk, username) => {
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
    .then((res) => {
      if (res.status === 200) {
        axios({
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
          .then((res) => {
            if (res.status === 200) {
              axios({
                method: "post",
                url: `https://pixe.la/v1/users/${username}/graphs/graph1/`,
                data: {
                  date: `${currentDate}`,
                  quantity: "5",
                },
                headers: {
                  "X-USER-TOKEN": tk,
                },
              });
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err.response.status));
};