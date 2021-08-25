import ButtonBase from './ButtonBase';

const colorDictionary = {
  Red: 'text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500 border-transparent',
  Green: 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-500 border-transparent'
}

const ButtonGreen = ({ text, color, ...props }) => {

  return (
    <ButtonBase
      {...props}
      variantClassNames={colorDictionary[color]}
    >
      {text}
    </ButtonBase>
  );
};

export default ButtonGreen;
