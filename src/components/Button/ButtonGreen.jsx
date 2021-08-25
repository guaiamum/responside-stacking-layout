import ButtonBase from './ButtonBase';

const ButtonGreen = ({ text, ...props }) => (
  <ButtonBase
    {...props}
    variantClassNames="text-white bg-green-500 hover:bg-green-600 focus:ring-green-500 border-transparent"
  >
    {text}
  </ButtonBase>
);

export default ButtonGreen;
