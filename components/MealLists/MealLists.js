import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";

export default function MealLists({ items }) {
    const navigation = useNavigation()

    const renderMealItem = (itemData) => {
        const handlePress = () => {
            navigation.navigate("MealDetails", {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title,
            });
        };

        return <MealItem item={itemData.item} onPress={handlePress} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
