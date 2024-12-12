import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "../components/Modal";
import { SafeAreaView } from "react-native-safe-area-context";

interface BuyNowProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    selectedType: {
        bike?: string;
        coffee?: string;
        sugar?: string;
    };
    totalPrice?: number;
}

const BuyNow: React.FC<BuyNowProps> = ({ openModal, setOpenModal, selectedType, totalPrice }) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleQuantityDecrement = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1 );
    }

    const deliveryCharges = selectedType.bike === "Pick Up" ? (0.0).toFixed(2) : (0.5).toFixed(2);
    const total = parseFloat(totalPrice * quantity) + parseFloat(deliveryCharges);

    return (
        <Modal visible={openModal} onClose={() => setOpenModal(false)} showTitle title="Product Detail" selectedType={selectedType} setSelectedType={() => {}} modalPosition={styles.modalPosition} modalWidth={"100%"}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Selected categories: </Text>
                <View style={styles.options}>
                    <Text style={styles.optionLeftText}>Delivery Method: </Text>
                    <Text style={styles.optionRightText}>{selectedType?.bike}</Text>
                </View>
                <View style={styles.options}>
                <Text style={styles.optionLeftText}>Coffee Type: </Text>
                <Text style={styles.optionRightText}>{selectedType?.coffee}</Text>
                </View>
                <View style={styles.options}>
                <Text style={styles.optionLeftText}>Sugar Preference: </Text>
                <Text style={styles.optionRightText}>{selectedType?.sugar}</Text>
                </View>
                <View style={styles.quantity}>
                    <Text style={styles.qtyHeader}>Coffee quantity: </Text>
                    <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={handleQuantityDecrement}>
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{quantity}</Text>
                    <TouchableOpacity style={styles.btn} onPress={handleQuantityIncrement}>
                        <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.border}/>
                <View style={styles.options}>
                   <Text style={styles.billingText}>Base Price:</Text>
                   <Text style={styles.optionRightText}>${totalPrice}</Text>
                </View>
                 <View style={styles.options}>
                   <Text style={styles.billingText}>Coffee Quantity:</Text>
                   <Text style={styles.optionRightText}>{quantity}</Text>
                </View>
                <View style={styles.options}>
                <Text style={styles.billingText}>Delivery Charges:</Text>
                <Text style={styles.optionRightText}>${deliveryCharges}</Text>
                </View>
                    <View style={styles.border}/>
                    <View style={styles.optionsTotal}>
                    <Text style={styles.billingTotal}>Total:</Text>
                    <Text style={styles.optionRightText}>${total.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.payBtn}>
                        <Text style={styles.payText}>Pay</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalPosition: {
        justifyContent: 'flex-end',
        width: '100%',
    },
    container: {
        marginHorizontal: 10,
        padding: 10,
    },
    header: {
        fontSize: 20,
        color: "black",
        fontWeight: 500,
        paddingVertical: 10,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionLeftText: {
        fontSize: 18,
        color: "black",
        marginVertical: 3,
        fontWeight: 500,
    },
    optionRightText: {
        fontSize: 16,
        color: "#C67C4E",
        marginVertical: 3,
        fontWeight: 500,
    },
    border: {
        marginTop: 10,
        marginBottom: 10,
        borderTopWidth: 1,
        borderColor: '#E3E3E3',
    },
    quantity: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    qtyHeader: {
        fontSize: 18,
        color: "black",
        fontWeight: 500,
        marginVertical: 3,
    },
    btns: {
        flexDirection: 'row',
        gap: 10,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 16,
        borderColor: '#919191',
    },
    btn: {
        paddingHorizontal: 10,
        backgroundColor: '#E3E3E3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyText: {
        fontSize: 18,
        color: "black",
        fontWeight: 500,
    },
    billingText: {
        fontSize: 16,
        fontWeight: 500,
        color: "black",
        paddingVertical: 3,
        marginBottom: 10,
    },
    billingTotal: {
        fontSize: 20,
        fontWeight: 600,
        color: "black",
    },
    optionsTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    payBtn: {
        backgroundColor: '#C67C4E',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 10,
        marginBottom: 10,
    },
    payText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default BuyNow;