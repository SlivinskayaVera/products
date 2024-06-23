import { Link } from "react-router-dom";
import { AppRoutes } from "../appRoutes";

export default function Error404() {
  return <Link to={AppRoutes.HOME}>На главную страницу</Link>;
}
