import { MEALS } from "../data/dummy-data";
import MealLists from "../components/MealLists/MealLists";

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((m) => m.categoryIds.includes(catId));

    return <MealLists items={displayMeals} />
}
