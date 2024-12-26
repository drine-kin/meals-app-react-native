import { useContext } from "react";
import MealLists from "../components/MealLists/MealLists";
import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favourites-context";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function FavouritesScreen() {
    // const favouriteMealsCtx = useContext(FavouritesContext);

    // const favouriteMeals = MEALS.filter((meal) =>
    //     favouriteMealsCtx.favourites.includes(meal.id)
    // );

    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)
    const favouriteMeals = MEALS.filter((meal) =>
        favouriteMealIds.includes(meal.id)
    );

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        );
    }

    return <MealLists items={favouriteMeals} />;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: 'white'
    }
});
