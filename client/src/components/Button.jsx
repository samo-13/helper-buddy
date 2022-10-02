import classNames from 'classnames';o
import './Button.scss';

const Button = ({ onChange, value, children, selected }) => {
  const buttonClass = classNames('button', {
    'button--selected': selected,
  });

  return (
    <button
      className={buttonClass}
      onClick={() => onChange(value === 'active' ? 'fresh' : 'active')}
    >
      {children}
    </button>
  );
};

export default Button;
