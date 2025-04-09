import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/theme/colors';
import { Typography } from '@/components/Typography';

import { Container, Content } from './styles';

type EmployeeProps = TouchableOpacityProps & {
  name: string;
  email: string;
};

export function EmployeeCard({ name, email, ...rest }: EmployeeProps) {
  return (
    <Container activeOpacity={0.75} {...rest}>
      <MaterialIcons name="person" size={28} color={colors.white} />

      <Content>
        <Typography title={name} font="Roboto_700Bold" numberOfLines={1} />
        <Typography
          title={email}
          size={14}
          font="Roboto_400Regular"
          numberOfLines={1}
          style={{ width: '100%' }}
        />
      </Content>

      <MaterialIcons name="more-vert" size={24} color={colors.white} />
    </Container>
  );
}
