import { ReactComponent as StarIcon } from '../../assets/star.svg';
import PropTypes from 'prop-types';
import '../../styles/components/starrating.scss'

const StarRating = ({ rating }) => {

    const ratingInt = parseInt(rating)

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                    key={star}
                    className={`rating__star ${star <= ratingInt ? 'rating__star--active' : ''}`}
                />
            ))}
        </div>
    )
}

StarRating.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default StarRating;