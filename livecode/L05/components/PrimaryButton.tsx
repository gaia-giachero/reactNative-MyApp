import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    onPress: () => void;
}

export default function PrimaryButton({ onPress }: Props) {
    return(
        <>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Add</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#af0057',
        backgroundColor: '#ffcce5',
        boxShadow: '0px 0px 10px #a2a2a2',
        margin: 30,
    },
    text: {
        color: '#af0057',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    }
});