import { useAuth0 } from "@auth0/auth0-react";

import userLog from "./PixelaFuncs";
import preloader from "../images/preloader.gif";
import { useState } from "react";
import { name } from "tar/lib/types";

const PixelaLog = () => {
  const [logs, useLogs] = useState("");
  const [link, setLink] = useState("");
  const [isAccept, setIsAccept] = useState(false);
  const { user } = useAuth0();
  const handleLog = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { token, name, log } = user;
    setLink(
      (prevState) =>
        (prevState = `https://pixe.la/v1/users/${name}/graphs/graph1.html`)
    );

    e.currentTarget.reset();
    useLogs(name);
    userLog(name, token, log);
  };

  //   const handleRegister = (e) => {
  //     e.preventDefault();

  //     const formData = new FormData(e.currentTarget);
  //     const user = Object.fromEntries(formData);
  //     const { token, name, log } = user;

  //     e.currentTarget.reset();
  //     useLogs(name);
  //     userLog(name, token, log);
  //   };

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
        <form className='form'>
          <h3>allocated task for today</h3>
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
            <label htmlFor='log'>Start of Day</label>

            <textarea
              className='form-input'
              id='log'
              name='log'
              rows='10'
              cols='100'
            ></textarea>
          </div>

          <button type='submit' className='btn btn-block'>
            accept
          </button>
        </form>
        {/* end of day */}
        {isAccept ? (
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
        ) : (
          <img src={preloader}></img>
        )}
      </div>
    </div>
  );
};
export default PixelaLog;
