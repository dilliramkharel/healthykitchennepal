/**
 * Health & Nutrition Calculator utilities
 * Healthy Kitchen Nepal - https://www.healthykitchennepal.xyz/
 */

export interface BMICategory {
  labelNp: string;
  labelEn: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  recommendationNp: string;
  recommendationEn: string;
}

export interface CalculationResults {
  bmi: number;
  bmiCategory: BMICategory;
  dailyWaterLiters: number;
  dailyWaterGlasses: number;
  bmr: number;
  estimatedDailyCalories: number;
  weightKg: number;
  heightCm: number;
  heightFeet: number;
  heightInches: number;
  age: number;
  sex: "male" | "female";
  activityMultiplier: number;
}

export const ACTIVITY_LEVELS = [
  {
    value: 1.2,
    labelNp: "थोरै वा पटक्कै व्यायाम नगर्ने (Sedentary)",
    labelEn: "Sedentary (Little or no exercise, desk work)",
  },
  {
    value: 1.375,
    labelNp: "हप्तामा १-३ दिन हल्का व्यायाम गर्ने (Lightly Active)",
    labelEn: "Lightly Active (Light exercise/sports 1-3 days/week)",
  },
  {
    value: 1.55,
    labelNp: "हप्तामा ३-५ दिन मध्यम व्यायाम गर्ने (Moderately Active)",
    labelEn: "Moderately Active (Moderate exercise 3-5 days/week)",
  },
  {
    value: 1.725,
    labelNp: "हप्तामा ६-७ दिन भारी व्यायाम गर्ने (Very Active)",
    labelEn: "Very Active (Hard exercise/sports 6-7 days/week)",
  },
  {
    value: 1.9,
    labelNp: "दैनिक कडा शारीरिक श्रम वा एथलीट (Extra Active)",
    labelEn: "Extra Active (Very hard exercise, physical job or training twice/day)",
  },
];

/**
 * Converts Height in Feet and Inches to Centimeters
 */
export function convertFeetInchesToCm(feet: number, inches: number): number {
  const totalInches = (feet || 0) * 12 + (inches || 0);
  return Number((totalInches * 2.54).toFixed(2));
}

/**
 * Calculates WHO Asian BMI classification
 */
export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) {
    return {
      labelNp: "कम तौल (Underweight)",
      labelEn: "Underweight",
      color: "#0284c7",
      badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
      badgeText: "text-sky-700",
      recommendationNp:
        "तपाईंको तौल सामान्यभन्दा केही कम छ। पौष्टिक तथा सन्तुलित खाना (दाल, भात, गेडागुडी, फलफूल, मोही) बढाउनुहोस्।",
      recommendationEn:
        "Your BMI indicates you are underweight. Focus on nutrient-dense whole foods, lentils, nuts, and healthy fats.",
    };
  }
  if (bmi <= 22.9) {
    return {
      labelNp: "स्वस्थ तथा सन्तुलित तौल (Normal / Healthy)",
      labelEn: "Normal / Healthy Weight",
      color: "#16a34a",
      badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
      badgeText: "text-emerald-700",
      recommendationNp:
        "बधाई छ! तपाईंको तौल स्वस्थ दायरामा छ। नियमित शारीरिक व्यायाम र सन्तुलित परम्परागत खानपान जारी राख्नुहोस्।",
      recommendationEn:
        "Great job! Your BMI is in the healthy range. Keep maintaining your active routine and balanced wholesome meals.",
    };
  }
  if (bmi <= 27.4) {
    return {
      labelNp: "अधिक तौल (Overweight)",
      labelEn: "Overweight",
      color: "#ea580c",
      badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
      badgeText: "text-amber-700",
      recommendationNp:
        "तपाईंको तौल केही बढी छ। खानपानमा गुलियो, तेलयुक्त खाना कम गरी कोदो, फापर, जौ र हरियो सागपात बढाउनुहोस्।",
      recommendationEn:
        "Your BMI suggests you are in the overweight range. Emphasize fiber-rich grains like barley and millet, plenty of vegetables, and daily brisk walking.",
    };
  }
  return {
    labelNp: "मोटोपना (Obese)",
    labelEn: "Obese",
    color: "#dc2626",
    badgeBg: "bg-rose-100 text-rose-800 border-rose-200",
    badgeText: "text-rose-700",
    recommendationNp:
      "तपाईंको तौल मोटोपनाको दायरामा परेको छ। दैनिक कम्तिमा ३०-४५ मिनेट व्यायाम गर्नुहोस् र पोषणविद् वा चिकित्सकको सल्लाह लिनुहोस्।",
    recommendationEn:
      "Your BMI indicates obesity. We recommend adopting a calorie-conscious whole-food diet, regular physical exercise, and consulting a health professional.",
  };
}

/**
 * Calculates BMI: Weight(kg) / [Height(m)]^2
 */
export function calculateBMI(weightKg: number, heightCm: number): number {
  if (!weightKg || !heightCm || heightCm <= 0) return 0;
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}

/**
 * Calculates Daily Water Need: Weight(kg) * 0.035 Litres
 */
export function calculateDailyWater(weightKg: number): { liters: number; glasses: number } {
  if (!weightKg || weightKg <= 0) return { liters: 0, glasses: 0 };
  const liters = Number((weightKg * 0.035).toFixed(2));
  const glasses = Math.max(1, Math.round(liters / 0.25)); // standard 250ml glass
  return { liters, glasses };
}

/**
 * Calculates Mifflin-St Jeor BMR & Maintenance Calories
 * Men: BMR = (10 * W) + (6.25 * H) - (5 * A) + 5
 * Women: BMR = (10 * W) + (6.25 * H) - (5 * A) - 161
 */
export function calculateDailyCalories(
  weightKg: number,
  heightCm: number,
  age: number,
  sex: "male" | "female",
  activityMultiplier: number
): { bmr: number; calories: number } {
  if (!weightKg || !heightCm || !age) return { bmr: 0, calories: 0 };

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const sexConstant = sex === "male" ? 5 : -161;
  const bmr = Math.round(base + sexConstant);
  const calories = Math.round(bmr * activityMultiplier);

  return { bmr, calories };
}

/**
 * Executes full health calculation suite
 */
export function runHealthCalculation(params: {
  weightKg: number;
  heightFeet: number;
  heightInches: number;
  age: number;
  sex: "male" | "female";
  activityMultiplier: number;
}): CalculationResults {
  const { weightKg, heightFeet, heightInches, age, sex, activityMultiplier } = params;
  const heightCm = convertFeetInchesToCm(heightFeet, heightInches);
  const bmi = calculateBMI(weightKg, heightCm);
  const bmiCategory = getBMICategory(bmi);
  const { liters: dailyWaterLiters, glasses: dailyWaterGlasses } = calculateDailyWater(weightKg);
  const { bmr, calories: estimatedDailyCalories } = calculateDailyCalories(
    weightKg,
    heightCm,
    age,
    sex,
    activityMultiplier
  );

  return {
    bmi,
    bmiCategory,
    dailyWaterLiters,
    dailyWaterGlasses,
    bmr,
    estimatedDailyCalories,
    weightKg,
    heightCm,
    heightFeet,
    heightInches,
    age,
    sex,
    activityMultiplier,
  };
}
