import userData from "../userData";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const DateTimeInfo = () => {
  const { public_repos, followers, following, public_gists } = userData;

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          return <p>item</p>;
        })}
      </Wrapper>
    </section>
  );
};
export default DateTimeInfo;
