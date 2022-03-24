import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="flex gap-3">
        <Link
            to="/admin/profile"
            className="font-bold uppercase text-gray-500"
        >Profile</Link>
        <Link
            to="/admin/change-password"
            className="font-bold uppercase text-gray-500"
        >Change password</Link>
    </nav>
  );
}

export default AdminNav;