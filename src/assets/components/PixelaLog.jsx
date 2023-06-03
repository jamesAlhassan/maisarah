import { useAuth0 } from "@auth0/auth0-react";

const PixelaLog = () => {
  const { user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    const { name, email, password } = user;
    console.log(name);
    e.currentTarget.reset();
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
              value={user.name}
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
              value={user.name}
            />
          </div>
          {/* starOfDay */}
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
