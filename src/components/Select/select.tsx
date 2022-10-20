import React from 'react';
import {
    FlatList,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {SelectProps, Props} from './types'

class Select extends React.Component<SelectProps, Props>{
    state: Readonly<SelectProps> = {
        text: '',
        selected: '',
        openModal: true,

    }
    render() {
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
                        <SvgUri width={19} source={require('../../assets/icon-done.svg')} />
                    )}
                </TouchableOpacity>
            );
        }
        
        const { text, selected, options, Modalvisible } = this.state;
        
        return 
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() =>  this.setState({ModalVisible: true})}>
                <Text style={styles.txt}>{this.state.text}</Text>
                <SvgUri width={19} source={require('../../assets/chevron.svg')} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() =>this.setState({ModalVisible:false})}>
                <SafeAreaView>
                    <View style={styles.headerModal}>

                        <TouchableOpacity onPress={() => this.setState({ModalVisible:false})}>
                            <SvgUri
                                width={19}
                                source={require('../../assets/icon-arrow.svg')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{text}</Text>
                        <TouchableOpacity onPress={() => this.setState({ModalVisible:false})}>
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
        
    }
}


const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 40,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 12,
        // marginHorizontal: 1,
        borderRadius: 15,
        fontSize: 18,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    txt: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '300',
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
        padding: 10,
    },
    optionTxt: {
        fontSize: 16,
        color: '#000000',
    },
});
