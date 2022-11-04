import React, { useState } from 'react';
import DatePickerRange from './ExternalPicker';
import { LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { Modal } from 'react-native';

import * as Styled from './styles';

import { useCallback } from 'react';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'fev.',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg.', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
};

LocaleConfig.defaultLocale = 'pt-br';

type Props = {
  dateSelected: (date: string) => void;
}

export default function DatePicker({ dateSelected }: Props) {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState({
    startDate: '',
    endDate: '',
  });

  const [brDate, setBrDate] = useState({
    startDate: '',
    endDate: '',
  });

  const onSuccess = useCallback((start, end) => {
    const startDate = start.split('-');
    const endDate = end.split('-');
    setDate({
      startDate: start,
      endDate: end,
    });

    setBrDate({
      startDate: `${startDate[2]}-${startDate[1]}-${startDate[0]}`,
      endDate: `${endDate[2]}-${endDate[1]}-${endDate[0]}`,
    });
  }, []);

  return (
    <>
      <Styled.DatePickerButton onPress={() => setShow(true)} >
        <Styled.DateText>
          {!brDate.startDate && !brDate.endDate && show === false
            ? 'Período'
            : `${brDate.startDate} - ${brDate.endDate}`}
        </Styled.DateText>
        {/* <SvgUri
          fill={theme.colors.black}
          source={require('../../../assets/date-icon/date.svg')}
          width={18}
        /> */}
      </Styled.DatePickerButton>

      {show && (
        <Modal>
          <Styled.DatePickerOverlay>
            <Styled.DatePickerWrapper>
              <DatePickerRange
                initialRange={
                  date.startDate && date.endDate ? Object.values(date) : null
                }
                current={new Date()}
                onSuccess={onSuccess}
                theme={{
                  markColor: theme.colors.gray2,
                  markTextColor: '#ffffff',
                }}
              />
              <Styled.DatePickerButtonModal onPress={() => {
                dateSelected(date.startDate)
                setShow(false)
              }}>
                <Styled.DatePickerTextModal>
                  Confirmar
                </Styled.DatePickerTextModal>
              </Styled.DatePickerButtonModal>
            </Styled.DatePickerWrapper>
          </Styled.DatePickerOverlay>
        </Modal>
      )}
    </>
  );
};

