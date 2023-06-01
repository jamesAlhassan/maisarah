import styled from "styled-components";
import { GoCalendar } from "react-icons/go";
import {
  BsFillCalendar2MonthFill,
  BsFillCalendarDayFill,
} from "react-icons/bs";

const DateTimeInfo = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const year = `${current.getFullYear()}`;
  const date = `${current.getDate()}st`;
  const month = monthNames[current.getMonth()];
  const items = [
    {
      id: 1,
      icon: <BsFillCalendarDayFill className='icon' />,
      label: "Date",
      value: date,
      color: "pink",
    },
    {
      id: 2,
      icon: <BsFillCalendar2MonthFill className='icon' />,
      label: "month",
      value: month,
      color: "green",
    },
    {
      id: 3,
      icon: <GoCalendar className='icon' />,
      label: "year",
      value: year,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoCalendar className='icon' />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className='item'>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
export default DateTimeInfo;
