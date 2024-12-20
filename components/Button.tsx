import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}>
      <Text className="text-center text-lg font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center bg-indigo-500 rounded-lg shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
