import PropTypes from 'prop-types';

const Step = ({ title, subtitle, icon }) => {
  return (
    <div className="flex items-center gap-x-1 cursor-pointer">
      <img src={icon} alt={title} className='size-6' />
      <div>
        <p className='text-xs'>{subtitle}</p>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  )
}

Step.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Step