
import User from "./components/user";
import "./globals.css"


export default async function Panel() {
  const getUser = async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/server/getUserPanel/`,
        {
          cache: "no-cache"
        }
      );
      const users = await data.json();

      const renderUsers = users.map((user) => <User user={user} />);
      return renderUsers;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>delete</th>
            <th>validity</th>
            <th>lagin</th>
            <th>type</th>
            <th>name</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>{getUser()}</tbody>
      </table>
    </>
  );
}
