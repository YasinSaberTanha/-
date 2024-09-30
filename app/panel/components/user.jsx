
import DeleteUser from "./deleteUser";

export default function User({ user }) {
    return (
        <tr>
            {<DeleteUser userid={user.user_id} />}
            <td>{user.validition}</td>
            <td>{user.date_lagin}</td>
            <td>{user.user_type}</td>
            <td>{user.name}</td>
            <td>{user.user_id}</td>
        </tr>
    )
}
