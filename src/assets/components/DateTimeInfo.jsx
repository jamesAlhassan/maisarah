import userData from "../userData";

const DateTimeInfo = () => {
  const { public_repos, followers, following, public_gists } = userData;
  console.log(public_gists);
  return <div>DateTimeInfo</div>;
};
export default DateTimeInfo;
