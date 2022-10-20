export type SelectProps = {
    options?: any[];
    onChangeSelect?: (id: string, name: string) => void;
    text?: string;
}

export type State = {
    modalVisible: boolean;
    selected: string;
}