import DateTimeInfo from "./DateTimeInfo";
import ChartComponent from "./ChartComponent";
import Navbar from "./Navbar";
import PixelaLog from "./PixelaLog";
import styled from "styled-components";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <DateTimeInfo />

      <section className='section'>
        <Wrapper className='section-center'>
          <PixelaLog />
        </Wrapper>
      </section>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Dashboard;
