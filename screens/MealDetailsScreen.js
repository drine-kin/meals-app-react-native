import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addToFavourite, removeFromFavourite } from "../store/redux/favourites"
// import { FavouritesContext } from "../store/context/favourites-context";

export default function MealDetailsScreen({ route, navigation }) {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const dispatch = useDispatch()
    const favouriteMeals = useSelector((state) => state.favouriteMeals.ids)

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // const isFavourite = favouriteMealsCtx.favourites.includes(mealId);
    const isFavourite = favouriteMeals.includes(mealId);

    const handleFavouriteStatus = () => {
        if (isFavourite) {
            // favouriteMealsCtx.removeFromFavourite(mealId);
            dispatch(removeFromFavourite({ id: mealId }))
        } else {
            // favouriteMealsCtx.addToFavourite(mealId);
            dispatch(addToFavourite({ id: mealId }))
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={isFavourite ? "star" : "star-outline"}
                        color="white"
                        onPress={handleFavouriteStatus}
                    />
                );
            },
        });
    }, [navigation, handleFavouriteStatus]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        maxWidth: "80%",
    },
});
