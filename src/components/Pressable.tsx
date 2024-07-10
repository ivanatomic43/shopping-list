import React, {useCallback} from 'react';
import {
  PressableProps as RNPressableProps,
  Pressable as RNPressable,
  GestureResponderEvent,
} from 'react-native';

const Pressable: React.FC<RNPressableProps> = ({
  onPress,
  children,
  ...props
}) => {
  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (!onPress) {
        return;
      }

      onPress(event);
    },
    [onPress],
  );

  return (
    <RNPressable {...props} onPress={handlePress}>
      {children}
    </RNPressable>
  );
};

export default Pressable;
