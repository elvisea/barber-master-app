import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/theme/colors';
import { Typography } from '@/components/Typography';

import { Container, Content } from './styles';

type EstablishmentProps = TouchableOpacityProps & {
  name: string;
  address: string;
};

export function EstablishmentCard({ name, address, ...rest }: EstablishmentProps) {
  return (
    <Container activeOpacity={0.75} {...rest}>
      <MaterialIcons name="store" size={28} color={colors.white} />

      <Content>
        <Typography title={name} font="Roboto_700Bold" numberOfLines={1} />
        <Typography
          title={address}
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
