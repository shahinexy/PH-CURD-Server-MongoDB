import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            update user
        </div>
    );
};

export default UpdateUser;