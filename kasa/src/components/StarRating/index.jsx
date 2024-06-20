import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star'
import '../../styles/components/starrating.scss'

const StarRating = ({ rating }) => {

    const ratingInt = parseInt(rating)

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map(star => (
                <StarIcon
                    key={star}
                    className={`star-rating__star ${star <= ratingInt ? 'star-rating__star--active' : ''}`}
                />
            ))}
        </div>
    )
}

StarRating.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default StarRating;