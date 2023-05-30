const Dashboard = () => {
  return (
    <div className='container'>
      <aside>
        <div className='top'>
          <div className='logo'>
            <h2>
              Maisa<span className='primary'>rah</span>
            </h2>
          </div>
          <div className='close' id='close-btn'>
            <span className='material-icons-sharp'>close</span>
          </div>
        </div>

        <div className='sidebar'>
          <a href='#' className='active'>
            <span className='material-icons-sharp'>grid_view</span>
            <h3>dashboard</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>mail_outline</span>
            <h3>messages</h3>
            <span className='message-count'>20</span>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>cases</span>
            <h3>appointments</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>logout</span>
            <h3>resources</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>logout</span>
            <h3>logout</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>inventory</span>
            <h3>settings</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>logout</span>
            <h3>logout</h3>
          </a>
        </div>
      </aside>
    </div>
  );
};
export default Dashboard;
