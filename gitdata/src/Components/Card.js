import './Card.css'

const Card = ({ userData }) => {
    return (
        <div className="card">
            <div className="card_title">{userData.login}</div>
            <div className="card_body">
                <div className="card_image">
                    <img src={userData.avatar_url} alt='display_image' />
                </div>
            </div>
        </div>
    )
}

export default Card