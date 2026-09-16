import thaliImage from "@/assets/hero-thali.jpg";
import kodoImage from "@/assets/superfood-kodo.jpg";
import mohiImage from "@/assets/superfood-mohi.jpg";
import jauImage from "@/assets/superfood-jau.jpg";
import gundrukImage from "@/assets/superfood-gundruk-sinki.jpg";
import jimbuImage from "@/assets/superfood-jimbu-timur.jpg";

export type RecipeCategory = "Breakfast" | "Main meal" | "Drink" | "Side dish";

export interface Recipe {
  slug: string;
  category: RecipeCategory;
  image: string;
  time: string;
  servings: string;
  title: { en: string; ne: string };
  description: { en: string; ne: string };
  ingredients: { en: string[]; ne: string[] };
  steps: { en: string[]; ne: string[] };
}

export const recipes: Recipe[] = [
  { slug: "kodo-dhiro", category: "Main meal", image: kodoImage, time: "30 min", servings: "2 servings", title: { en: "Kodo Dhiro", ne: "कोदोको ढिँडो" }, description: { en: "A warm, filling finger-millet meal for a simple Nepali thali.", ne: "साधारण नेपाली थालीका लागि न्यानो र पेटभरि हुने कोदोको परिकार।" }, ingredients: { en: ["1 cup kodo flour", "3 cups water", "Pinch of salt"], ne: ["१ कप कोदोको पिठो", "३ कप पानी", "नुन एक चिम्टी"] }, steps: { en: ["Bring water and salt to a boil.", "Add flour slowly while stirring.", "Cook until smooth and thick; serve warm."], ne: ["पानी र नुन उमाल्नुहोस्।", "चलाउँदै बिस्तारै पिठो हाल्नुहोस्।", "बाक्लो र नरम भएपछि तातो–तातो पस्कनुहोस्।"] } },
  { slug: "jau-vegetable-khichdi", category: "Main meal", image: jauImage, time: "40 min", servings: "3 servings", title: { en: "Jau Vegetable Khichdi", ne: "जौको तरकारी खिचडी" }, description: { en: "Comforting barley, dal and seasonal vegetables in one pot.", ne: "जौ, दाल र मौसमी तरकारीको पौष्टिक एकभाँडे खिचडी।" }, ingredients: { en: ["1 cup barley", "1/2 cup masoor dal", "2 cups chopped vegetables", "Cumin, turmeric and salt"], ne: ["१ कप जौ", "आधा कप मसुरो दाल", "२ कप काटेको तरकारी", "जिरा, बेसार र नुन"] }, steps: { en: ["Rinse barley and dal.", "Temper cumin and turmeric, then add vegetables.", "Add water, barley and dal; simmer until tender."], ne: ["जौ र दाल धुनुहोस्।", "जिरा र बेसार झानेर तरकारी हाल्नुहोस्।", "पानी, जौ र दाल हालेर नरम नभएसम्म पकाउनुहोस्।"] } },
  { slug: "mohi-jeera", category: "Drink", image: mohiImage, time: "5 min", servings: "2 glasses", title: { en: "Jeera Mohi", ne: "जिरा मोही" }, description: { en: "A cooling, freshly churned buttermilk drink with roasted cumin.", ne: "भुटेको जिरा मिसाइएको चिसो, ताजा मोही।" }, ingredients: { en: ["1 cup plain curd", "2 cups chilled water", "1 tsp roasted cumin", "Pinch of salt"], ne: ["१ कप सादा दही", "२ कप चिसो पानी", "१ चम्चा भुटेको जिरा", "नुन एक चिम्टी"] }, steps: { en: ["Whisk curd and water until smooth.", "Stir in cumin and salt.", "Serve immediately, chilled."], ne: ["दही र पानी राम्रोसँग फिट्नुहोस्।", "जिरा र नुन मिसाउनुहोस्।", "चिसो पारेर तुरुन्त पस्कनुहोस्।"] } },
  { slug: "gundruk-soup", category: "Side dish", image: gundrukImage, time: "25 min", servings: "3 servings", title: { en: "Gundruk Soup", ne: "गुन्द्रुकको झोल" }, description: { en: "A tangy, familiar winter soup with tomato and garlic.", ne: "टमाटर र लसुनसँग बनाइने अमिलो–मिठो गुन्द्रुकको झोल।" }, ingredients: { en: ["1 cup gundruk", "1 tomato", "3 garlic cloves", "1 tsp oil and salt"], ne: ["१ कप गुन्द्रुक", "१ टमाटर", "३ केस्रा लसुन", "१ चम्चा तेल र नुन"] }, steps: { en: ["Rinse gundruk briefly.", "Sauté garlic and tomato.", "Add water and gundruk; simmer for 15 minutes."], ne: ["गुन्द्रुकलाई हल्का धुनुहोस्।", "लसुन र टमाटर भुट्नुहोस्।", "पानी र गुन्द्रुक हालेर १५ मिनेट पकाउनुहोस्।"] } },
  { slug: "jimbu-dal", category: "Side dish", image: jimbuImage, time: "25 min", servings: "4 servings", title: { en: "Jimbu Dal", ne: "जिम्बु दाल" }, description: { en: "Everyday lentils lifted with fragrant Himalayan jimbu.", ne: "सुगन्धित हिमाली जिम्बुले स्वादिलो बनाएको दैनिक दाल।" }, ingredients: { en: ["1 cup lentils", "1 tsp jimbu", "Turmeric and salt", "1 tsp mustard oil"], ne: ["१ कप दाल", "१ चम्चा जिम्बु", "बेसार र नुन", "१ चम्चा तोरीको तेल"] }, steps: { en: ["Cook lentils with turmeric until soft.", "Heat oil and briefly fry jimbu.", "Pour the tempering over dal and serve."], ne: ["बेसारसँग दाल नरम हुने गरी पकाउनुहोस्।", "तेल तताएर जिम्बु हल्का झान्नुहोस्।", "दालमा झानेर पस्कनुहोस्।"] } },
  { slug: "seasonal-nepali-thali", category: "Breakfast", image: thaliImage, time: "35 min", servings: "2 servings", title: { en: "Seasonal Nepali Thali", ne: "मौसमी नेपाली थाली" }, description: { en: "A balanced plate of rice, dal, greens and seasonal vegetables.", ne: "भात, दाल, साग र मौसमी तरकारी मिलेको सन्तुलित थाली।" }, ingredients: { en: ["Cooked rice", "Dal", "Seasonal greens", "One seasonal vegetable"], ne: ["पकाएको भात", "दाल", "मौसमी साग", "एक प्रकारको मौसमी तरकारी"] }, steps: { en: ["Cook rice and dal separately.", "Lightly sauté greens and vegetables.", "Serve each item in a balanced portion."], ne: ["भात र दाल छुट्टाछुट्टै पकाउनुहोस्।", "साग र तरकारी हल्का भुट्नुहोस्।", "सबै परिकार मिलाएर थालीमा पस्कनुहोस्।"] } },
];
