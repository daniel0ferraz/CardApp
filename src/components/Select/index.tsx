import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowDown from "../../assets/icons/arrowdown.svg";
import Check from "../../assets/icons/check.svg";
type Props = {
  options?: any[];
  onChangeSelect?: (id: number, name: string) => void;
  text?: string;
};

export default function Select({ options, onChangeSelect, text }: Props) {
  const [txt, setTxt] = useState(text);
  const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Renderiza opções do Option, seta id, name e selecionado
  function renderOption(item: any) {
    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          { backgroundColor: item.id === selected ? '#eee' : '#fff' },
        ]}
        onPress={() => {
          // onChangeSelect(item.id);
          !!onChangeSelect && onChangeSelect(item.id, item.name);
          setTxt(item.name);
          setModalVisible(false);
          setSelected(item.name);
        }}>
        <Text style={styles.optionTxt}>{item.name}</Text>
        {item.id === selected && (
          <Check width={20} height={20} />

        )}
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.txt}>{txt}</Text>
        <ArrowDown width={27} height={28} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              {/* <SvgUri
                width={19}
                source={require('../../assets/icon-arrow.svg')}
              /> */}
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#bdbdbd50',
    paddingHorizontal: 12,
    // marginHorizontal: 1,
    borderRadius: 8,
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    marginLeft: 8,
    // fontSize: 16,
    color: '#2c2c2c',
    fontWeight: '500',
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 13,
  },
  modalTitle: {
    fontSize: 18,
    color: '#000000',
  },
  modalCancel: {
    fontSize: 14,
    color: '#00AAFF',
    fontWeight: 'normal',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 20,
  },
  optionTxt: {
    fontSize: 16,
    color: '#000000',
  },
});
