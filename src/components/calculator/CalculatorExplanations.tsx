import { ShieldAlert, BookOpen, HeartPulse, Droplets, Sparkles } from "lucide-react";

export function CalculatorExplanations() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 space-y-8">
      {/* 1. How this calculator works */}
      <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-soft">
        <div className="flex items-center gap-3 border-b border-border/70 pb-4 mb-6">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="size-5" />
          </span>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground">
              यो क्यालकुलेटरले कसरी काम गर्छ?
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              How this calculator calculates your metrics
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            यो पोषण र स्वास्थ्य क्यालकुलेटरले तपाईंको तौल, उचाइ, उमेर, लिङ्ग र दैनिक शारीरिक
            सक्रियता (Activity Level) लाई मिहीन ढङ्गले वैज्ञानिक सूत्रहरूका आधारमा विश्लेषण गर्दछ।
          </p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Droplets className="size-4 text-sky-600" /> पानीको मात्रा (Water Formula)
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <code className="font-mono text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">
                  तौल (KG) × ०.०३५ = दैनिक लिटर
                </code>
                <br />
                शरीरको प्रत्येक १ किलो तौलका लागि करिब ३५ मिलिलिटर पानी आवश्यक पर्दछ।
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <HeartPulse className="size-4 text-amber-600" /> क्यालोरी आवश्यकता (Mifflin–St Jeor)
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <code className="font-mono text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                  BMR × Activity Multiplier (१.२ – १.९)
                </code>
                <br />
                तपाईंको उमेर र लिङ्ग अनुसार न्यूनतम ऊर्जा (BMR) हिसाब गरी दैनिक आवश्यक क्यालोरी निकालिन्छ।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Importance of Nutrition and Water */}
      <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-soft">
        <div className="flex items-center gap-3 border-b border-border/70 pb-4 mb-6">
          <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground">
              सही मात्रामा क्यालोरी र पानी किन आवश्यक छ?
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Importance of balanced energy and natural hydration
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            हाम्रो शरीरलाई ऊर्जावान् र तन्दुरुस्त राख्न दैनिक सन्तुलित क्यालोरीको आवश्यकता पर्छ। यदि तपाईं
            तौल नियन्त्रण गर्न वा स्वस्थ जीवनशैली अपनाउन चाहनुहुन्छ भने आफ्नो दैनिक आवश्यकता थाहा पाउनु पहिलो
            पाइला हो।
          </p>
          <p>
            त्यसैगरी, सही मात्रामा पानी पिउनाले पाचन प्रक्रियालाई राम्रो बनाउन, कब्जियत हटाउन, छालामा प्राकृतिक चमक
            ल्याउन र शरीरका विषाक्त पदार्थहरू बाहिर फाल्न मद्दत गर्दछ।
          </p>
        </div>
      </div>

      {/* 3. Healthy Lifestyle Recommendations */}
      <div className="rounded-3xl border border-border/80 bg-cream p-6 sm:p-10 shadow-soft">
        <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-4">
          🌿 स्वस्थ जीवनशैलीका लागि केही उपयोगी सुझावहरू:
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-foreground/80 list-disc list-inside leading-relaxed">
          <li>
            <strong>परम्परागत नेपाली अन्न:</strong> सेतो चामलको मात्रा घटाएर कोदो, फापर, जौ, र गहुँको च्याँख्ला
            समावेश गर्नुहोस्।
          </li>
          <li>
            <strong>प्राकृतिक प्रोबायोटिक्स:</strong> खानासँग मोही (buttermilk) वा घरको ताजा दही पिउनाले आन्द्राको
            स्वास्थ्य बलियो हुन्छ।
          </li>
          <li>
            <strong>नियमित पानी:</strong> तिर्खा नलागे पनि दिनभर थोरै-थोरै गरी मनतातो पानी पिउने बानी बसाल्नुहोस्।
          </li>
          <li>
            <strong>दैनिक सक्रियता:</strong> बिहानको घाममा कम्तिमा ३० मिनेट हिँड्ने वा योगाभ्यास गर्ने गर्नुहोस्।
          </li>
        </ul>
      </div>

      {/* 4. Medical / Health Disclaimer */}
      <div className="rounded-2xl border border-amber-300/60 bg-amber-50/70 p-5 sm:p-6 text-xs sm:text-sm leading-relaxed text-amber-900">
        <div className="flex items-center gap-2 font-bold mb-2">
          <ShieldAlert className="size-4.5 text-amber-700 shrink-0" />
          <span>स्वास्थ्य तथा चिकित्सा सम्बन्धी जानकारी (Disclaimer):</span>
        </div>
        <p>
          यो क्यालकुलेटर केवल सामान्य शैक्षिक तथा स्वास्थ्य सचेतनाको लागि तयार पारिएको हो। यो कुनै चिकित्सक वा
          स्वास्थ्य संस्थाको चिकित्सकीय निदान (Medical Diagnosis) होइन। यदि तपाईं गर्भवती हुनुहुन्छ, कुनै दीर्घकालीन
          रोगको औषधि सेवन गर्दै हुनुहुन्छ वा विशेष स्वास्थ्य अवस्थामा हुनुहुन्छ भने आफ्नो चिकित्सक वा प्रमाणित
          पोषणविद्को व्यक्तिगत परामर्श लिनुहोला।
        </p>
      </div>
    </section>
  );
}
