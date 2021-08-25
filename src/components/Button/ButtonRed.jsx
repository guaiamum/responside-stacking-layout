import ButtonBase from './ButtonBase';

const ButtonRed = ({ text, ...props }) => (
  <ButtonBase
    {...props}
    variantClassNames="text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500 border-transparent"
  >
    {text}
  </ButtonBase>
);

export default ButtonRed;
