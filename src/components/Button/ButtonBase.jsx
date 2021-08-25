import classNames from 'classnames';

const ButtonBase = ({
  type = 'button',
  variantClassNames,
  extraClassNames,
  fullWidth = false,
  children,
  disabled,
  ...props
}) => (
  <button
    {...props}
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
    className={classNames(
      { 'cursor-not-allowed opacity-50': disabled },
      { 'w-full justify-center': fullWidth },
      'inline-flex items-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClassNames,
      extraClassNames
    )}
  >
    {children}
  </button>
);

export default ButtonBase;
