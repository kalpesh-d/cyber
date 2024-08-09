import PropTypes from 'prop-types';

const InputField = ({ type, placeholder, className = '', maxLength, pattern }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`my-1 px-2 h-8 lg:max-w-lg border focus-visible:outline-0 text-xs ${className} rounded-md`}
      maxLength={maxLength}
      pattern={pattern}
    />
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string
};

export default InputField