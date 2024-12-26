import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {

    const renderCategoryItem = (itemData) => {
        const handlePress = () => {
            navigation.navigate('MealsOverview', { 
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title
            })
        }

    return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={handlePress}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}
