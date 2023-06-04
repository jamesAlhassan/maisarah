import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const PixelaLog = () => {
  const { user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { token, name } = user;
    console.log(token, name);
    e.currentTarget.reset();

    const pixelaEndPoint = "https://pixe.la/v1/users";
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
            }).then((res) => {
              console.log(res.status);
            });
          }
        })
        .catch((err) => console.log(err.response.status));
    };

    request(token, name);
  };

  return (
    <div>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <h3>start of day log</h3>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              identity
            </label>
            <input
              type='text'
              className='form-input'
              id='name'
              name='name'
              defaultValue={user.nickname}
              //   value={user.nickname}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='token' className='form-label'>
              token- [-~]&#123;8,128&#125;
            </label>
            <input
              type='text'
              className='form-input'
              id='token'
              name='token'
              required
              pattern='[ -~]{8,128}'
            />
          </div>
          {/* starOfDay */}
          <div className='form-row'>
            <label htmlFor='startOfDay'>Start of Day</label>

            <textarea
              className='form-input'
              id='startOfDay'
              name='startOfDay'
              rows='10'
              cols='100'
            ></textarea>
          </div>

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
        {/* end of day */}
        <form className='form' onSubmit={handleSubmit}>
          <h3>end of day log</h3>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              identity
            </label>
            <input
              type='text'
              className='form-input'
              id='name'
              name='name'
              defaultValue={user.nickname}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='token' className='form-label'>
              token - [-~]&#123;8,128&#125;
            </label>
            <input
              type='text'
              className='form-input'
              id='token'
              name='token'
              required
              pattern='[ -~]{8,128}'
            />
          </div>
          <div className='form-row'>
            <label htmlFor='endOfDay'>End of Day</label>

            <textarea
              className='form-input'
              id='endOfDay'
              name='endOfDay'
              rows='10'
              cols='100'
            ></textarea>
          </div>

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default PixelaLog;
