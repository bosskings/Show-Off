import { useParams } from 'react-router-dom';
import { users } from '../Artists/userData';

const DashboardTop = () => {
    const { userId } = useParams();

    return (
        <div>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        {user.id === parseInt(userId, 10) ? (
                            <div>
                                <h1>Dashoard</h1>
                                <p>Welcome Mr/Mrs {user.username}</p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardTop;
