import React, {useState} from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';

import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';

import * as Styled from './styles';
import {getBrand} from '../../components/Input/brand';
import {Animated} from 'react-native';

export default function Home() {
  const [widthAnimated, setWidthAnimated] = useState(new Animated.Value(310));
  const [backView, setBackView] = useState(false);
  const [icon, setIcon] = useState({
    icon: false,
  });
  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    cvv: '',
  });

  const animatedCard = (back: boolean) => {
    if (back && !backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(true);
      }, 400);
    }

    if (!back && backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(false);
      }, 400);
    }
  };

  return (
    <Styled.ScrollView>
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>Meu Cartão</Styled.Title>
          <Styled.Subtitle>Insira os dados do cartão</Styled.Subtitle>
        </Styled.Header>
        <Styled.Content>
          <Animated.View style={{width: widthAnimated}}>
            <Card data={data} icon={icon?.icon} back={backView} />
          </Animated.View>

          <Input
            placeholder="Nome do titular"
            value={data.name}
            onChangeText={text => {
              setData({...data, name: text});
              animatedCard(false);
            }}
            icon={<IconUser fill="#6A1B9A" width={16} height={16} />}
          />

          <Input
            placeholder="Número do cartão"
            value={data.number}
            type="credit-card"
            mask
            onChangeText={text => {
              setData({...data, number: text});
              setIcon(getBrand(text));
              animatedCard(false);
            }}
            icon={<IconNumber fill="#6A1B9A" width={16} height={16} />}
          />

          <Styled.View>
            <Input
              placeholder="Validade"
              value={data.validate}
              type="custom"
              options={{
                mask: '99/99',
              }}
              mask
              onChangeText={text => {
                setData({...data, validate: text});
                animatedCard(false);
              }}
              width="45%"
              icon={<IconDate fill="#6A1B9A" width={16} height={16} />}
            />
            <Input
              placeholder="CVV"
              value={data.cvv}
              type="custom"
              options={{
                mask: '9999',
              }}
              mask
              onChangeText={text => {
                setData({...data, cvv: text});
                animatedCard(true);
              }}
              width="45%"
              icon={<IconCode fill="#6A1B9A" width={16} height={16} />}
            />
          </Styled.View>
        </Styled.Content>

        <Styled.Button>
          <Styled.TextButton onPress={() => console.log('Cadastrou')}>
            Cadastrar
          </Styled.TextButton>
        </Styled.Button>
      </Styled.Container>
    </Styled.ScrollView>
  );
}
