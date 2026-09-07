import { useState } from "react";
import {
  Calculator,
  Droplets,
  Flame,
  Scale,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ACTIVITY_LEVELS,
  CalculationResults,
  runHealthCalculation,
} from "@/lib/health-calculator";

export function NutritionHealthCalculator() {
  const [weight, setWeight] = useState<string>("70");
  const [feet, setFeet] = useState<string>("5");
  const [inches, setInches] = useState<string>("6");
  const [age, setAge] = useState<string>("30");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<number>(1.55);

  const [results, setResults] = useState<CalculationResults | null>(() => {
    // Provide initial standard calculation for instant preview
    return runHealthCalculation({
      weightKg: 70,
      heightFeet: 5,
      heightInches: 6,
      age: 30,
      sex: "male",
      activityMultiplier: 1.55,
    });
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const w = parseFloat(weight);
    const f = parseFloat(feet);
    const i = parseFloat(inches) || 0;
    const a = parseFloat(age);

    if (isNaN(w) || w <= 0 || w > 300) {
      toast.error("कृपया सही तौल (KG) प्रविष्ट गर्नुहोस् (10 - 250 kg)");
      return;
    }
    if (isNaN(f) || f < 2 || f > 8) {
      toast.error("कृपया सही उचाइ (Feet) प्रविष्ट गर्नुहोस् (2 - 8 feet)");
      return;
    }
    if (isNaN(a) || a <= 0 || a > 120) {
      toast.error("कृपया सही उमेर प्रविष्ट गर्नुहोस् (5 - 120 वर्ष)");
      return;
    }

    const calculated = runHealthCalculation({
      weightKg: w,
      heightFeet: f,
      heightInches: i,
      age: a,
      sex,
      activityMultiplier: activity,
    });

    setResults(calculated);
    toast.success("स्वास्थ्य रिपोर्ट सफलतापूर्वक तयार भयो!", {
      description: `तपाईंको BMI: ${calculated.bmi} (${calculated.bmiCategory.labelNp})`,
    });
  };

  const handleReset = () => {
    setWeight("");
    setFeet("");
    setInches("");
    setAge("");
    setResults(null);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Main Calculator Card */}
      <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-lift transition-all">
        {/* Top Accent Strip */}
        <div className="h-2 w-full bg-gradient-to-r from-primary via-emerald-500 to-secondary" />

        <div className="p-6 sm:p-10 lg:p-12">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-dashed border-border/80 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary">
                <Sparkles className="size-3.5" /> पोषण र स्वास्थ्य क्यालकुलेटर
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Nutrition &amp; Health Calculator
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                तपाईंको दैनिक क्यालोरी, पानीको मात्रा र BMI थाहा पाउनुहोस्।
              </p>
            </div>

            {/* Decorative 3D Calculator Accent Badge */}
            <div
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-2 shadow-inner border border-primary/25"
              title="Health Math Calculator"
            >
              <div className="grid grid-cols-2 gap-1 text-[13px] font-bold text-primary">
                <span className="flex size-5 items-center justify-center rounded bg-card shadow-xs">＋</span>
                <span className="flex size-5 items-center justify-center rounded bg-card shadow-xs">－</span>
                <span className="flex size-5 items-center justify-center rounded bg-card shadow-xs">×</span>
                <span className="flex size-5 items-center justify-center rounded bg-primary text-primary-foreground shadow-xs">＝</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Weight in KG */}
              <div className="space-y-2">
                <Label htmlFor="calc-weight" className="text-sm font-semibold flex items-center gap-1.5">
                  <Scale className="size-4 text-primary" /> तौल (Weight in KG) *
                </Label>
                <div className="relative">
                  <Input
                    id="calc-weight"
                    type="number"
                    step="0.1"
                    min="10"
                    max="250"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="जस्तै: 70"
                    required
                    className="h-12 text-base pr-12"
                  />
                  <span className="absolute right-3.5 top-3 text-sm font-medium text-muted-foreground">
                    kg
                  </span>
                </div>
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="calc-age" className="text-sm font-semibold flex items-center gap-1.5">
                  <Info className="size-4 text-primary" /> उमेर (Age in Years) *
                </Label>
                <div className="relative">
                  <Input
                    id="calc-age"
                    type="number"
                    min="5"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="जस्तै: 30"
                    required
                    className="h-12 text-base pr-14"
                  />
                  <span className="absolute right-3.5 top-3 text-sm font-medium text-muted-foreground">
                    वर्ष
                  </span>
                </div>
              </div>
            </div>

            {/* Height: Feet and Inches */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold">उचाइ (Height) *</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    id="calc-feet"
                    type="number"
                    min="2"
                    max="8"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    placeholder="Feet (जस्तै: 5)"
                    required
                    className="h-12 text-base pr-14"
                  />
                  <span className="absolute right-3 top-3 text-xs font-semibold text-muted-foreground uppercase">
                    Feet
                  </span>
                </div>
                <div className="relative">
                  <Input
                    id="calc-inches"
                    type="number"
                    min="0"
                    max="11"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                    placeholder="Inches (जस्तै: 6)"
                    className="h-12 text-base pr-14"
                  />
                  <span className="absolute right-3 top-3 text-xs font-semibold text-muted-foreground uppercase">
                    Inch
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Gender / Sex */}
              <div className="space-y-2">
                <Label htmlFor="calc-sex" className="text-sm font-semibold">
                  लिङ्ग (Sex for Calculation)
                </Label>
                <select
                  id="calc-sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value as "male" | "female")}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="male">पुरुष (Male)</option>
                  <option value="female">महिला (Female)</option>
                </select>
              </div>

              {/* Activity Level */}
              <div className="space-y-2">
                <Label htmlFor="calc-activity" className="text-sm font-semibold">
                  शारीरिक सक्रियता (Activity Level)
                </Label>
                <select
                  id="calc-activity"
                  value={activity}
                  onChange={(e) => setActivity(parseFloat(e.target.value))}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {ACTIVITY_LEVELS.map((lvl) => (
                    <option key={lvl.value} value={lvl.value}>
                      {lvl.labelNp}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                variant="default"
                size="xl"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-soft"
              >
                <Calculator className="size-5 mr-2" /> हिसाब गर्नुहोस् (Calculate)
              </Button>
              <Button
                type="button"
                variant="outline"
                size="xl"
                onClick={handleReset}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="size-4 mr-1.5" /> पुनः सुरु
              </Button>
            </div>
          </form>

          {/* RESULTS CARD */}
          {results && (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 border-b border-primary/20 pb-4 mb-6">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="size-4" />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                  🎯 तपाईंको स्वास्थ्य रिपोर्ट (Your Health Estimate)
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {/* 1. BMI Card */}
                <div className="rounded-xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        बडी मास इन्डेक्स
                      </span>
                      <Scale className="size-4 text-primary" />
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight text-foreground font-[family-name:var(--font-display)]">
                        {results.bmi}
                      </span>
                      <span className="text-xs text-muted-foreground">BMI</span>
                    </div>
                    <div className="mt-2.5">
                      <span
                        className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${results.bmiCategory.badgeBg}`}
                      >
                        {results.bmiCategory.labelNp}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-2.5">
                    {results.bmiCategory.recommendationNp}
                  </p>
                </div>

                {/* 2. Water Intake Card */}
                <div className="rounded-xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        दैनिक चाहिने पानी
                      </span>
                      <Droplets className="size-4 text-sky-500" />
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight text-foreground font-[family-name:var(--font-display)]">
                        {results.dailyWaterLiters}
                      </span>
                      <span className="text-xs text-muted-foreground">लिटर / दिन</span>
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                        लगभग {results.dailyWaterGlasses} गिलास पानी
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-2.5">
                    तपाईंको शरीरको तौल अनुसार पाचन र डिटक्सका लागि आवश्यक दैनिक पानीको मात्रा।
                  </p>
                </div>

                {/* 3. Daily Calories Card */}
                <div className="rounded-xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        दैनिक क्यालोरी
                      </span>
                      <Flame className="size-4 text-amber-500" />
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl font-bold tracking-tight text-foreground font-[family-name:var(--font-display)]">
                        {results.estimatedDailyCalories}
                      </span>
                      <span className="text-xs text-muted-foreground">kcal</span>
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                        BMR: {results.bmr} kcal
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-2.5">
                    वर्तमान तौल सन्तुलन राख्न शारीरिक सक्रियता अनुसार आवश्यक न्यूनतम दैनिक ऊर्जा।
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
