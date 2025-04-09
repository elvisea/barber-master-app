import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { colors } from "@/theme/colors";
import { Typography } from "@/components/Typography";

import { Container } from "./styles";

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function DateSelector({
  selectedDate,
  onDateChange,
}: DateSelectorProps) {
  const [showPicker, setShowPicker] = React.useState(false);

  const handlePress = () => setShowPicker(true);

  const handleDateChange = (_event: any, date?: Date) => {
    setShowPicker(false);
    if (date) {
      onDateChange(date);
    }
  };

  return (
    <Container onPress={handlePress}>
      <Typography
        title={format(selectedDate, "dd'/'MM'/'yyyy", { locale: ptBR })}
      />

      <MaterialIcons name="calendar-today" size={24} color={colors.white} />

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </Container>
  );
}
