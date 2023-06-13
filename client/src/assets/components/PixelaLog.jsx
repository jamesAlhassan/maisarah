import { useAuth0 } from "@auth0/auth0-react";

import { pixelaOldUser, pixelaNewUser } from "./PixelaFuncs";

import { useState } from "react";
import { name } from "tar/lib/types";

const PixelaLog = () => {
  const [logs, useLogs] = useState("");
  const [link, setLink] = useState("");
  const { user } = useAuth0();
  const handleLog = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { token, name, log } = user;
    setLink(
      (prevStat) =>
        (prevStat = `https://pixe.la/v1/users/${name}/graphs/graph1.html`)
    );
    alert(`https://pixe.la/v1/users/${name}/graphs/graph1.html`);

    e.currentTarget.reset();
    useLogs(name);
    pixelaOldUser(name, token, log);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { token, name, log } = user;
    console.log(name, token, log);
    alert(`https://pixe.la/v1/users/${name}/graphs/graph1.html`);
    e.currentTarget.reset();
    useLogs(name);
    pixelaNewUser(name, token, log);
  };

  return (
    <div>
      {logs ? (
        <h4>
          confirm you log on pixela{" "}
          <a href={link} target='_blank'>
            here
          </a>
        </h4>
      ) : (
        ""
      )}

      <div className='form-container'>
        <form className='form' onSubmit={handleRegister}>
          <h5>New user?</h5>
          <h3>Register on Pixela</h3>
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
          {/* <div className='form-row'>
            <label htmlFor='log'>Start of Day</label>

            <textarea
              className='form-input'
              id='log'
              name='log'
              rows='10'
              cols='100'
            ></textarea>
          </div> */}
          <p>
            Register on Pixela and start tracking your attendance.
            <br />
            <br />
            <br />
            <br />
            You can use your populated username/ identity or enter a new one
            <br />
            And a token to register
          </p>
          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
        {/* end of day */}
        <form className='form' onSubmit={handleLog}>
          <h3>log on pixela</h3>
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
            <label htmlFor='log'>End of Day</label>

            <textarea
              className='form-input'
              id='log'
              name='log'
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
