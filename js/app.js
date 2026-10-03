const THEME_KEY = "btec-u1b-theme";
const SCALE_KEY = "btec-u1b-scale";
const STATE_KEY = "btec-u1b-state";

const sectionNames = {
  intro: "المقدمة",
  "station-1": "المحطة الأولى",
  "station-2": "المحطة الثانية",
  "station-3": "المحطة الثالثة",
  "station-4": "المحطة الرابعة",
  "station-5": "دراسة مولي",
  games: "ركن التدريب"
};

const impactWords = ["", "ضعيف", "محدود", "متوسط", "كبير", "جوهري"];

const quizzes = {
  s1: {
    title: "مراجعة المحطة الأولى",
    next: "#station-2",
    nextLabel: "إلى المجتمعات عبر الإنترنت",
    items: [
      {
        q: "أي العبارات أدق في وصف المعلومات؟",
        options: [
          "أرقام أو ملاحظات لم تُعالَج بعد",
          "ناتج معالجة البيانات وتنظيمها بصورة تفيد القرار",
          "اسم آخر للبنية التحتية",
          "الملفات التي لم تُخزَّن قط"
        ],
        answer: 1,
        why: "البيانات مادة خام. تصبح معلومات حين تُعالَج وتُنظَّم بحيث يُبنى عليها قرار."
      },
      {
        q: "قرار دخول سوق جديد اعتمادًا على اتجاهات التقنية والسياسة يقع في أي مستوى؟",
        options: ["المستوى التشغيلي", "المستوى الاستراتيجي", "قناع الإدخال", "البيانات الثانوية"],
        answer: 1,
        why: "المستوى الاستراتيجي تخطيط عالٍ يخدم رؤية المؤسسة وأهدافها البعيدة."
      },
      {
        q: "التأكد اليومي من كفاية المخزون لتلبية طلبات العملاء يقع في أي مستوى؟",
        options: ["المستوى التشغيلي", "تصميم الشعار فقط", "المستوى الاستراتيجي حصرًا", "جمع البيانات الثانوية"],
        answer: 0,
        why: "المستوى التشغيلي يدير العمل اليومي: الموارد، والمخزون، والمدفوعات المستحقة."
      },
      {
        q: "ما الغرض الرئيس لنظام «في الوقت المحدد» (JIT)؟",
        options: [
          "تخزين أكبر كمية ممكنة لسنوات",
          "تقليل زمن الإنتاج والتكامل مع العملاء والموردين مع حد أدنى من المخزون الراكد",
          "إلغاء الحاجة إلى دقة البيانات",
          "الاستغناء عن كل الموظفين"
        ],
        answer: 1,
        why: "النظام يطلب المواد حين تُحتاج. وهو يفشل إذا كانت أرقام المخزون غير دقيقة."
      },
      {
        q: "ما التدفق النقدي؟",
        options: [
          "حركة الأموال إلى داخل المؤسسة وإلى خارجها",
          "عدد متابعي صفحة التواصل",
          "نوع من غرف الدردشة",
          "برنامج لمعالجة النصوص"
        ],
        answer: 0,
        why: "على مستوى الإدارة يُقرأ التدفق أداءً ماليًا، وعلى المستوى التشغيلي يُستخدم لمتابعة المستحقات ودفع الموردين."
      }
    ]
  },
  s2: {
    title: "مراجعة المحطة الثانية",
    next: "#station-3",
    nextLabel: "إلى مصادر البيانات",
    items: [
      {
        q: "لماذا لا تُفترض صحة محتوى الويكي تلقائيًا؟",
        options: [
          "لأنه لا يُفتح إلا بلا إنترنت",
          "لأن المجتمع يضيف المحتوى ويحرره، فلا غنى عن المصادر الأصلية",
          "لأنه خاص بالحكومات",
          "لأنه لا يخزن أي بيانات"
        ],
        answer: 1,
        why: "ويكيبيديا مثال شهير، وجودتها مرتبطة بمصادر المساهمين لا بالشهرة وحدها."
      },
      {
        q: "ما الفرق الأوضح بين المنتدى وغرفة الدردشة؟",
        options: [
          "المنتدى يعمل دائمًا في الزمن الحقيقي",
          "غرفة الدردشة أقرب إلى الزمن الحقيقي، والمنتدى نقاش غير متزامن قد يتداخل ترتيب مشاركاته",
          "لا فرق بينهما",
          "المنتدى للصوت فقط"
        ],
        answer: 1,
        why: "الدردشة لحظية، بينما المنتدى يُقرأ لاحقًا وقد يتداخل ترتيب مشاركاته."
      },
      {
        q: "ما اللافت في واقعة سوني عام 2014 مقارنة بعام 2011، كما تعرضها دراسة الحالة؟",
        options: [
          "كان العدد أكبر من 77 مليون حساب",
          "العدد المبلَّغ أقل بكثير، لكن الضرر استهدف الهوية الشخصية ورفع موظفون دعاوى",
          "لم تتعرض أي بيانات للخطر",
          "اقتصر الأثر على انقطاع الموسيقى"
        ],
        answer: 1,
        why: "الاختراق الأول واسع ومرتبط بحسابات وبطاقات. الثاني أصغر رقمًا وأقرب إلى استهداف الهوية والشكاوى العمالية."
      },
      {
        q: "أي الآثار الآتية يصيب المؤسسة من المجتمعات عبر الإنترنت؟",
        options: [
          "توقع الرد السريع عبر مناطق زمنية، وتكلفة إدارة الحضور، ومخاطر أمنية",
          "انعدام أي تكلفة أو منافسة",
          "استحالة الوصول إلى عميل جديد",
          "إلغاء الحاجة إلى السياسات"
        ],
        answer: 0,
        why: "الحضور الرقمي يوسّع السوق ويرفع سقف التوقع الأمني والخدمي معًا."
      },
      {
        q: "أي الخيارات أنسب بديلًا صوتيًا لشخص يعاني إعاقة بصرية؟",
        options: ["البودكاست", "دفتر مخزون ورقي", "قناع إدخال", "بطاقة فهرسة"],
        answer: 0,
        why: "البودكاست يوصل المعلومة صوتًا، ويمكن تنزيله والاستماع إليه لاحقًا."
      }
    ]
  },
  s3: {
    title: "مراجعة المحطة الثالثة",
    next: "#station-4",
    nextLabel: "إلى جودة البيانات",
    items: [
      {
        q: "سجل عملاء جمعته المؤسسة بنفسها يُعد:",
        options: ["بيانات ثانوية", "بيانات أولية", "إشاعة", "واجهة خلفية"],
        answer: 1,
        why: "الأولية ما أنتجته المؤسسة أو جمعته هي، مثل قائمة عملاء مولي."
      },
      {
        q: "تقرير حكومي أو مقالة بحثية أعدها طرف آخر يُعد:",
        options: ["بيانات أولية دائمًا", "بيانات ثانوية", "قناع إدخال", "مستوى تشغيلي"],
        answer: 1,
        why: "الثانوية جُمعت أو نُشرت سابقًا على يد غيركم، وقد مرت بمعالجة."
      },
      {
        q: "مشاهدة سلوك الزبائن في السوق من غير سؤال مباشر تُصنَّف غالبًا:",
        options: ["ملاحظة، وهي طريقة نوعية", "استهلاكًا محاسبيًا", "فرزًا أبجديًا", "ملف CSV"],
        answer: 0,
        why: "الملاحظة غير مكلفة وتصف السلوك الحالي، ولا تكشف وحدها الدوافع."
      },
      {
        q: "ما حدّ مهم لمجموعات التركيز؟",
        options: [
          "لا تُعقد إلا عبر الرسائل القصيرة المدفوعة",
          "قد تتحيز الإجابات بسبب ضغط الجماعة أو التردد في المخالفة",
          "نتائجها أدق دائمًا من كل الطرق",
          "تلغي الحاجة إلى خصوصية المشاركين"
        ],
        answer: 1,
        why: "السؤال يُطرح مرة على المجموعة، لكن التضامن أو الحرج قد يلوّن الجواب."
      },
      {
        q: "لماذا يفيد مقياس من 1 إلى 5 داخل الاستبيان؟",
        options: [
          "لأنه يمنع أي رأي",
          "لأنه يجعل جزءًا من الآراء قابلًا للمقارنة، مع بقاء ضمانات الخصوصية",
          "لأنه يحوّل البيانات إلى بيانات ثانوية",
          "لأنه يغني عن صدق المصدر"
        ],
        answer: 1,
        why: "الاستبيان أكثر تنظيمًا من استطلاع الرأي المفتوح، فيسهل قياس الاتجاه من غير إسقاط حق الخصوصية."
      }
    ]
  },
  s4: {
    title: "مراجعة المحطة الرابعة",
    next: "#station-5",
    nextLabel: "إلى دراسة مولي",
    items: [
      {
        q: "إدخال البيانات مرتين ومقارنة النسختين مثال على:",
        options: ["التحقق", "الاستهلاك المحاسبي", "مجتمع بودكاست", "المستوى الاستراتيجي"],
        answer: 0,
        why: "التحقق يقارن بالمصدر الأصلي أو بنسخة إدخال ثانية لكشف الخطأ والنقص والتكرار."
      },
      {
        q: "رفض الكمية إذا خرجت عن النطاق المسموح مثال على:",
        options: ["التحقق من الصحة وقاعدة الإدخال", "سرقة أدبية", "بيانات ثانوية", "غرفة دردشة"],
        answer: 0,
        why: "التحقق من الصحة يختبر الشكل والمنطق: النوع، والمدى، ورفض الفراغ. ولا يثبت وحده أن القيمة حقيقية في الواقع."
      },
      {
        q: "لماذا لا يكفي المدقق الإملائي لضمان الدقة؟",
        options: [
          "لأنه يرفض كل الأرقام",
          "لأنه قد يقبل رقمًا خاطئًا أو كلمة ناقصة إذا بدا شكلها مقبولًا",
          "لأنه يحذف قاعدة البيانات",
          "لأنه يعمل على الورق فقط"
        ],
        answer: 1,
        why: "القاعدة الشكلية لا تعرف أن رقم الهاتف لشخص آخر، ولا أن سطرًا سقط من الفاتورة."
      },
      {
        q: "الجداول الخام المحمية من الحذف العشوائي هي:",
        options: ["الواجهة الخلفية", "لوحة المعلومات في الواجهة الأمامية", "استطلاع الشارع", "البودكاست"],
        answer: 0,
        why: "الواجهة الخلفية تحفظ البيانات. الواجهة الأمامية، أو لوحة المعلومات، هي ما يتعامل معه مُدخل البيانات."
      },
      {
        q: "إذا اختلطت عناوين العملاء في متجر كبير، فما النتيجة الأقرب؟",
        options: [
          "تتحسن الأرباح تلقائيًا",
          "قد لا تصل الطلبات، فالبيانات غير الدقيقة عديمة الفائدة عمليًا",
          "يُعد ذلك تحققًا ناجحًا",
          "تتحول البيانات الثانوية إلى أولية"
        ],
        answer: 1,
        why: "مثال العنوان المختلط، كحال أخطاء الشحن الشهيرة، يبين أن المعالجة السريعة لا تنقذ بيانًا خاطئًا."
      }
    ]
  },
  s5: {
    title: "مراجعة دراسة مولي",
    next: "#games",
    nextLabel: "إلى ركن التدريب",
    items: [
      {
        q: "أي خيار أولي أنسب لميزانية مولي الصغيرة من أجل جرد المخزون؟",
        options: [
          "نظام مؤسسي مخصص ضخم من اليوم الأول",
          "جدول بيانات على حاسوبها الحالي مع قواعد تمنع الحقول الفارغة",
          "إلغاء الموقع الإلكتروني",
          "الاعتماد على الذاكرة في موسم المعارض"
        ],
        answer: 1,
        why: "الحل المتناسب يبدأ بما تملكه: حاسوبًا وطابعة وميزانية صغيرة، ثم ينمو إذا كبر حجم البيانات."
      },
      {
        q: "استبدال بطاقات الفهرسة يهدف أولًا إلى:",
        options: [
          "نشر أرقام العملاء على وسائل التواصل",
          "تنظيم السجلات بحيث تُفرز وتُصفى ويقل التكرار",
          "حذف أسماء العملاء",
          "إيقاف البيع في الأسواق"
        ],
        answer: 1,
        why: "قاعدة العملاء تخدم الفاتورة والشحن والمتابعة من غير إعادة نسخ البطاقة كل مساء."
      },
      {
        q: "ما الخطر إذا أتمتت مولي بيانات خاطئة؟",
        options: [
          "يتكرر الخطأ بسرعة في الفواتير والملصقات والشحن",
          "تختفي الحاجة إلى النسخ الاحتياطي",
          "تصبح كل البيانات ثانوية",
          "ينخفض الطلب على الخبز حتمًا"
        ],
        answer: 0,
        why: "الأتمتة تضاعف الصواب والخطأ معًا. لذلك يسبقها التحقق والتحقق من الصحة."
      },
      {
        q: "أي الآتي مثال على توزيع المعلومات خارج المؤسسة؟",
        options: [
          "فاتورة للعميل وطلب توريد للمورد",
          "إخفاء كل تواصل",
          "حذف الموقع الاحترافي",
          "تخزين الأجهزة في المرآب فقط"
        ],
        answer: 0,
        why: "داخليًا تصل المعلومة إلى المساعدة وقوائم التعبئة. خارجيًا تصل إلى العميل والمورد، مع حماية سجل العملاء."
      },
      {
        q: "تقييم الأثر الجيد ينظر إلى:",
        options: [
          "لون الشعار فقط",
          "الوقت والدقة والتكلفة والنمو والخصوصية معًا",
          "عدد صفحات الدفتر الورقي فقط",
          "سرعة الكتابة على الآلة الكاتبة"
        ],
        answer: 1,
        why: "التمييز في هذا التمرين أن تُوازنوا المنفعة بالمخاطر، لا أن تسردوا أدوات فحسب."
      }
    ]
  }
};

const classifiers = {
  "data-game": {
    title: "صنّفوا البطاقة",
    lead: "هل العبارة بيانات خام أم معلومات ناتجة عن معالجة؟",
    buckets: [
      { id: "data", label: "بيانات" },
      { id: "info", label: "معلومات" }
    ],
    items: [
      { text: "صورة فاتورة لم تُفرَّغ خاناتها بعد", answer: "data" },
      { text: "تقرير يقول إن مربى المشمش الأعلى ربحًا هذا الشهر", answer: "info" },
      { text: "تسجيل صوتي لاجتماع مع مورّد لم يُكتب", answer: "data" },
      { text: "رسم بياني يبين أن المبيعات ترتفع نهاية الأسبوع", answer: "info" },
      { text: "قائمة أرقام مخزون غير مقارنة بحد إعادة الطلب", answer: "data" },
      { text: "قرار زيادة إنتاج الخبز يومي الخميس والجمعة", answer: "info" }
    ]
  },
  "valid-game": {
    title: "تحقق أم تحقق من الصحة؟",
    lead: "صنّفوا كل إجراء. تذكّروا: الشكل المقبول غير الحقيقة المؤكدة.",
    buckets: [
      { id: "verify", label: "تحقق" },
      { id: "validate", label: "تحقق من الصحة" }
    ],
    items: [
      { text: "مطابقة العنوان على الشاشة بنموذج الطلب الورقي", answer: "verify" },
      { text: "منع الحفظ إذا تُرك اسم العميل فارغًا", answer: "validate" },
      { text: "قراءة السجل سطرًا بسطر مقابل المصدر", answer: "verify" },
      { text: "قبول رمز المنتج فقط إذا طابق النمط: ثلاثة أحرف ثم شرطة ثم ثلاثة أرقام", answer: "validate" },
      { text: "برنامج يقارن نسختين أُدخلتا مرتين", answer: "verify" },
      { text: "رفض الحروف داخل حقل الكمية", answer: "validate" }
    ]
  }
};

const scenarios = {
  "method-game": {
    title: "أي طريقة جمع تناسب الموقف؟",
    lead: "اختاروا الطريقة الأقرب، ثم اقرؤوا التعليل.",
    options: [
      { id: "survey", label: "استبيان" },
      { id: "observe", label: "ملاحظة" },
      { id: "focus", label: "مجموعة تركيز" },
      { id: "interview", label: "مقابلة" },
      { id: "poll", label: "استطلاع رأي" }
    ],
    items: [
      {
        text: "تريد مولي أن يعرف كم طالبًا يفضّل الخبز بالزعتر، وعلى مقياس من 1 إلى 5.",
        answer: "survey",
        why: "السؤال محدد وقابل للقياس، وهذا صميم الاستبيان المنظم."
      },
      {
        text: "في المعرض تريد أن ترى أي ركن يقف عنده الناس من غير أن تسألهم.",
        answer: "observe",
        why: "الملاحظة تجمع سلوكًا حاليًا بتكلفة قليلة، ولا تفسر وحدها سبب الوقوف."
      },
      {
        text: "ست أمهات يناقشن معًا نكهات المربى المناسبة لعلب المدرسة.",
        answer: "focus",
        why: "مجموعة اهتمام مشترك تُسأل مرة واحدة، مع الحذر من ضغط الجماعة."
      },
      {
        text: "مطوّر نظام يريد فهم يوم مولي بالتفصيل قبل أن يصمم الشاشات.",
        answer: "interview",
        why: "المقابلة تسمح بالتعمق والاستيضاح، وتحتاج موافقة واستعدادًا جيدًا."
      },
      {
        text: "تقرأ تعليقات منشورة على منصة تقييم عن أسواق طعام مشابهة.",
        answer: "poll",
        why: "هذه آراء وتجارب منشورة، قريبة من استطلاع الرأي، وغالبًا بيانات ثانوية يصعب مقارنة أصحابها."
      }
    ]
  },
  "level-game": {
    title: "أي مستوى يحتاج هذه المعلومة؟",
    lead: "التدفق النقدي قد يظهر في أكثر من مستوى. اقرؤوا السؤال داخل الموقف لا الكلمة وحدها.",
    options: [
      { id: "strategic", label: "المستوى الاستراتيجي" },
      { id: "manage", label: "مستوى الإدارة" },
      { id: "operate", label: "المستوى التشغيلي" }
    ],
    items: [
      {
        text: "تفكر مولي: هل نبيع العام القادم خارج المجتمع المحلي بعد قراءة اتجاه الطلب؟",
        answer: "strategic",
        why: "هذا اتجاه ونمو بعيد، وهو تخطيط استراتيجي لا مهمة هذا الصباح."
      },
      {
        text: "تريد معرفة أي عطلات الأسبوع يرتفع فيها البيع لتجدول وقت المساعدة.",
        answer: "manage",
        why: "مستوى الإدارة ينظم الأنشطة والموارد والمواسم، مثل تخطيط الإجازات والإنتاج."
      },
      {
        text: "اليوم بقي ستة برطمانات، وهناك طلبات يجب تغليفها قبل البريد.",
        answer: "operate",
        why: "كفاية مخزون اليوم قرار تشغيلي. نظام في الوقت المحدد يعيش في هذا المستوى إذا كانت بياناته دقيقة."
      },
      {
        text: "تقارن مورّدي الزجاج من حيث السعر والجودة والالتزام بالموعد.",
        answer: "manage",
        why: "بيانات الموردين تخدم إدارة التوريد والطلب والموثوقية."
      },
      {
        text: "تعتمد سياسة مكتوبة لما يُجمع من بيانات عبر نموذج الموقع.",
        answer: "strategic",
        why: "وضع السياسة إطار عالٍ يحكم العمل، حتى لو نُفذت إجراءاتها يوميًا."
      },
      {
        text: "تراجع ربح الشهر لتقرر إن كان سعر المربى يغطي التكلفة.",
        answer: "manage",
        why: "الأداء المالي الشهري، ومنه الربح والخسارة، من اهتمام مستوى الإدارة."
      },
      {
        text: "هذا الصباح: من لم يدفع بعد حتى لا يتأخر شراء السكر؟",
        answer: "operate",
        why: "متابعة المستحقات اليومية تدفق نقدي تشغيلي. أما قراءة التدفق صورةً للأداء فتبقى أقرب إلى مستوى الإدارة."
      }
    ]
  }
};

const matchPairs = [
  { id: "social", term: "وسائل التواصل الاجتماعي", example: "صفحة علنية يصل إليها العميل بالشكوى وينتظر ردًا ظاهرًا" },
  { id: "vlog", term: "المدونات ومدونات الفيديو", example: "قناة تعرض طريقة الخَبز ويرد صاحبها على أسئلة المتابعين" },
  { id: "wiki", term: "الويكي", example: "مقالة يحررها مجتمع، ولا تُعتمد بلا مصدر أصلي" },
  { id: "chat", term: "غرف الدردشة", example: "اجتماع افتراضي مباشر بين أشخاص في أماكن متفرقة" },
  { id: "im", term: "المراسلة الفورية", example: "رسالة خاصة تذكّر بموعد أو ترسل صورة الطلب" },
  { id: "pod", term: "البودكاست", example: "حلقة صوتية تُنزَّل وتُستمع لاحقًا، وقد تُفرَّغ نصًا" },
  { id: "forum", term: "المنتديات", example: "نقاش طلابي على منصة تعلم يُقرأ بعد ساعات لا في اللحظة نفسها" }
];

const glossary = [
  ["البيانات", "مادة خام: أرقام أو نصوص أو صور أو صوت أو ملاحظات، قبل أن تُنظَّم بما يفيد القرار."],
  ["المعلومات", "ناتج معالجة البيانات وتنظيمها. طريقة المعالجة تغيّر المعلومة حتى لو كان المصدر واحدًا."],
  ["التدفق النقدي", "حركة الأموال الداخلة والخارجة. يُقرأ أداءً على مستوى الإدارة، ومتابعة مستحقات على المستوى التشغيلي."],
  ["مخصّص", "نظام أو برنامج صُمم وفق حاجة عميل بعينه، لا حزمة جاهزة للجميع."],
  ["في الوقت المحدد (JIT)", "أسلوب يقلل زمن الإنتاج ومخزون الانتظار عبر التكامل مع العملاء والموردين. يشترط بيانات دقيقة."],
  ["البيانات الأولية", "ما جمعته المؤسسة أو أنتجته بنفسها، مثل سجل طلبات مولي."],
  ["البيانات الثانوية", "ما جمعه طرف آخر، مثل تقرير حكومي أو مادة مرجعية أو تحقيق صحفي."],
  ["بيانات نوعية", "تصنّف ولا تُقاس رقمًا بالضرورة، مثل لون التغليف أو ملاحظة سلوك."],
  ["بيانات كمية", "تعتمد على قياس رقمي، مثل الكمية أو الطول أو درجة من 1 إلى 5."],
  ["التحقق", "مقارنة البيانات بالمصدر الأصلي، أو إدخالها مرتين لمطابقة النسختين."],
  ["التحقق من الصحة", "اختبار معقولية الإدخال وشكله: المدى، والنوع، ورفض الفراغ. لا يثبت وحده مطابقة الواقع."],
  ["قناع الإدخال", "قاعدة تقيد نوع البيانات أو تنسيقها أو طولها، مثل رمز منتج على النمط JAM-012."],
  ["تطهير البيانات", "مراجعة مستمرة للدقة والعملة والاكتمال وإزالة التكرار."],
  ["قاعدة البيانات", "مجموعة بيانات منظمة تُدار وتُخزَّن ويُرجع إليها. السجل صف، والحقل خانة داخل السجل."],
  ["الاستعلام", "استخلاص بيانات بمعايير. الاستعلام المتداخل يبني على استعلام محفوظ ثم ينقحه."],
  ["الواجهة الخلفية", "جداول البيانات الخام، وتُحمى حتى لا يفسد الإدخال اليومي سلامتها."],
  ["الواجهة الأمامية", "لوحة المعلومات التي يرى مستخدمها أزرار الإدخال والتقارير."],
  ["النمذجة العددية", "نموذج رياضي بمعادلات، مثل توقع الربح أو التدفق في جدول بيانات."],
  ["نمذجة البيانات", "تصور مفاهيمي لمعنى البيانات وعلاقاتها قبل بناء الجداول."],
  ["الاستهلاك", "توزيع تكلفة الأصل على مدة استخدامه، لأن الدفع عن الأصل يقابله انتفاع ممتد."],
  ["CSV", "ملف نصي يضع كل سجل في سطر، ويفصل الحقول بفواصل، فيسهل نقله بين البرامج."],
  ["الحجم والسرعة والتنوع والصدق والقيمة", "خمسة اعتبارات لمصدر البيانات: كمّها، وسرعة تقادمها، واختلاف أشكالها، وموثوقيتها، وجدواها للعمل."]
];

let state = defaultState();
let timerId = null;
let remaining = 0;
let timerPaused = false;
let saveTimer = null;

function defaultState() {
  return { visited: [], quizzes: {}, scenarios: {}, games: {}, autos: [], fields: {} };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return;
    state = { ...defaultState(), ...JSON.parse(raw) };
  } catch (err) {
    state = defaultState();
  }
}

function saveState() {
  document.querySelectorAll("[data-save]").forEach((el) => {
    state.fields[el.dataset.save] = el.value;
  });
  state.autos = [...document.querySelectorAll(".auto.is-on")].map((el) => el.dataset.id);
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
  updateProgress();
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveState, 180);
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    el.hidden = true;
  }, 3400);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setTheme(mode) {
  document.documentElement.classList.toggle("dark", mode !== "light");
  localStorage.setItem(THEME_KEY, mode === "light" ? "light" : "dark");
  const btn = document.getElementById("theme-toggle");
  const dark = document.documentElement.classList.contains("dark");
  btn.textContent = dark ? "مظهر فاتح" : "مظهر داكن";
  btn.setAttribute("aria-pressed", dark ? "true" : "false");
}

function cycleScale() {
  const order = ["md", "lg", "xl"];
  const current = document.documentElement.dataset.scale || "lg";
  const next = order[(order.indexOf(current) + 1) % order.length];
  document.documentElement.dataset.scale = next;
  localStorage.setItem(SCALE_KEY, next);
  const label = { md: "خط عادي", lg: "خط كبير", xl: "خط العرض" };
  document.getElementById("scale-toggle").textContent = label[next];
}

function updateProgress() {
  const ids = Object.keys(sectionNames);
  const quizIds = Object.keys(quizzes);
  const visited = ids.filter((id) => state.visited.includes(id)).length;
  const done = quizIds.filter((id) => Number.isInteger(state.quizzes[id])).length;
  const molly = state.autos.length ? 1 : 0;
  const max = ids.length + quizIds.length + 1;
  const pct = Math.round(((visited + done + molly) / max) * 100);
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-label").textContent = "تقدم الحصة " + pct + "٪";
  const board = document.getElementById("scoreboard");
  if (!board) return;
  const lines = quizIds.map((id) => {
    const best = state.quizzes[id];
    const total = quizzes[id].items.length;
    const title = quizzes[id].title;
    return Number.isInteger(best) ? title + ": " + best + " من " + total : title + ": لم يُصحَّح بعد";
  });
  board.replaceChildren();
  lines.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    board.appendChild(li);
  });
}

function markVisit(id) {
  if (!sectionNames[id]) return;
  if (!state.visited.includes(id)) {
    state.visited.push(id);
    scheduleSave();
  }
  document.getElementById("here").textContent = "أنتم في: " + sectionNames[id];
  document.querySelectorAll(".nav-link").forEach((link) => {
    const on = link.getAttribute("href") === "#" + id;
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function renderTimer() {
  const m = String(Math.floor(Math.max(remaining, 0) / 60)).padStart(2, "0");
  const s = String(Math.max(remaining, 0) % 60).padStart(2, "0");
  const el = document.getElementById("timer-display");
  el.textContent = m + ":" + s;
  el.classList.toggle("is-low", remaining > 0 && remaining <= 30);
  const running = Boolean(timerId);
  document.getElementById("timer-pause").hidden = !running;
  document.getElementById("timer-stop").hidden = !running && remaining === 0;
}

function beep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 740;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (err) {
    /* الجهاز قد يمنع الصوت؛ المؤقت يبقى ظاهرًا */
  }
}

function startTimer(mins) {
  clearInterval(timerId);
  remaining = mins * 60;
  timerPaused = false;
  document.getElementById("timer-pause").textContent = "إيقاف مؤقت";
  renderTimer();
  timerId = setInterval(() => {
    if (timerPaused) return;
    remaining -= 1;
    renderTimer();
    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      renderTimer();
      beep();
      toast("انتهى وقت هذه الفقرة.");
      document.getElementById("timer-status").textContent = "انتهى وقت الفقرة.";
    }
  }, 1000);
  document.getElementById("timer-status").textContent = "المؤقت يعمل.";
}

function renderQuiz(id) {
    const quiz = quizzes[id];
    const host = document.getElementById("quiz-" + id);
    if (!host || !quiz) return;
    host.replaceChildren();
    const form = document.createElement("form");
    const heading = document.createElement("h3");
    heading.className = "text-2xl";
    heading.textContent = quiz.title;
    form.appendChild(heading);
    const best = state.quizzes[id];
    if (Number.isInteger(best)) {
      const note = document.createElement("p");
      note.className = "explain";
      note.textContent = "أفضل نتيجة محفوظة على هذا المتصفح: " + best + " من " + quiz.items.length;
      form.appendChild(note);
    }
    quiz.items.forEach((item, index) => {
      const field = document.createElement("fieldset");
      field.className = "q";
      const legend = document.createElement("legend");
      legend.textContent = index + 1 + ". " + item.q;
      field.appendChild(legend);
      item.options.forEach((option, optIndex) => {
        const label = document.createElement("label");
        label.className = "opt";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = id + "-q" + index;
        input.value = String(optIndex);
        const span = document.createElement("span");
        span.textContent = option;
        label.append(input, span);
        field.appendChild(label);
      });
      const why = document.createElement("p");
      why.className = "explain";
      why.hidden = true;
      field.appendChild(why);
      form.appendChild(field);
    });
    const actions = document.createElement("div");
    actions.className = "flex flex-wrap gap-2 mt-3";
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-primary";
    submit.textContent = "تصحيح الاختبار";
    const retry = document.createElement("button");
    retry.type = "button";
    retry.className = "btn btn-ghost";
    retry.textContent = "إعادة المحاولة";
    retry.hidden = true;
    const next = document.createElement("a");
    next.className = "btn btn-gold";
    next.href = quiz.next;
    next.textContent = quiz.nextLabel;
    next.hidden = true;
    actions.append(submit, retry, next);
    const score = document.createElement("p");
    score.className = "mt-3 font-bold";
    score.setAttribute("aria-live", "polite");
    form.append(actions, score);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = [...form.querySelectorAll("fieldset")];
      const unanswered = fields.find((field) => !field.querySelector("input:checked"));
      if (unanswered) {
        toast("أجيبوا عن كل الأسئلة قبل التصحيح.");
        unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      let points = 0;
      fields.forEach((field, index) => {
        const chosen = Number(field.querySelector("input:checked").value);
        const correct = quiz.items[index].answer;
        if (chosen === correct) points += 1;
        field.querySelectorAll(".opt").forEach((label) => {
          const value = Number(label.querySelector("input").value);
          label.classList.toggle("is-correct", value === correct);
          label.classList.toggle("is-wrong", value === chosen && value !== correct);
        });
        const why = field.querySelector(".explain");
        why.hidden = false;
        why.textContent = quiz.items[index].why;
      });
      state.quizzes[id] = Math.max(points, state.quizzes[id] ?? 0);
      saveState();
      score.textContent = points === quiz.items.length
        ? "إجابة متقنة: " + points + " من " + quiz.items.length + "."
        : "النتيجة: " + points + " من " + quiz.items.length + ". راجعوا التعليل ثم أعيدوا المحاولة.";
      submit.hidden = true;
      retry.hidden = false;
      next.hidden = false;
      form.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
      });
    });
    retry.addEventListener("click", () => renderQuiz(id));
    host.appendChild(form);
}

function renderQuizzes() {
  Object.keys(quizzes).forEach(renderQuiz);
}

function renderClassifiers() {
  Object.entries(classifiers).forEach(([id, game]) => {
    const host = document.getElementById(id);
    if (!host) return;
    host.replaceChildren();
    const title = document.createElement("h3");
    title.className = "text-2xl";
    title.textContent = game.title;
    const lead = document.createElement("p");
    lead.className = "explain";
    lead.textContent = game.lead;
    const list = document.createElement("div");
    list.className = "grid gap-3 mt-4";
    game.items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "panel";
      card.dataset.answer = item.answer;
      const text = document.createElement("p");
      text.className = "font-bold";
      text.textContent = item.text;
      const picks = document.createElement("div");
      picks.className = "flex flex-wrap gap-2 mt-3";
      game.buckets.forEach((bucket) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-ghost pick";
        btn.dataset.pick = bucket.id;
        btn.textContent = bucket.label;
        btn.addEventListener("click", () => {
          card.dataset.pick = bucket.id;
          card.querySelectorAll(".pick").forEach((peer) => {
            peer.setAttribute("aria-pressed", peer === btn ? "true" : "false");
            peer.classList.toggle("is-on", peer === btn);
          });
          card.classList.remove("accent", "accent-rose");
        });
        picks.appendChild(btn);
      });
      card.append(text, picks);
      card.dataset.index = String(index);
      list.appendChild(card);
    });
    const check = document.createElement("button");
    check.type = "button";
    check.className = "btn btn-primary mt-4";
    check.textContent = "تحقق من التصنيف";
    const result = document.createElement("p");
    result.className = "mt-3 font-bold";
    result.setAttribute("aria-live", "polite");
    check.addEventListener("click", () => {
      const cards = [...list.querySelectorAll("article")];
      if (cards.some((card) => !card.dataset.pick)) {
        toast("صنّفوا كل البطاقات أولًا.");
        return;
      }
      let points = 0;
      cards.forEach((card) => {
        const ok = card.dataset.pick === card.dataset.answer;
        if (ok) points += 1;
        card.classList.toggle("accent", ok);
        card.classList.toggle("accent-rose", !ok);
      });
      state.games[id] = Math.max(points, state.games[id] ?? 0);
      saveState();
      result.textContent = "النتيجة: " + points + " من " + cards.length + ".";
    });
    host.append(title, lead, list, check, result);
  });
}

function renderMatcher() {
  const host = document.getElementById("match-game");
  if (!host) return;
  host.replaceChildren();
  const title = document.createElement("h3");
  title.className = "text-2xl";
  title.textContent = "طابقوا المجتمع بمثاله";
  const lead = document.createElement("p");
  lead.className = "explain";
  lead.textContent = "اختاروا نوع المجتمع ثم المثال الذي يلائمه.";
  const board = document.createElement("div");
  board.className = "grid gap-4 md:grid-cols-2 mt-4";
  const left = document.createElement("div");
  const right = document.createElement("div");
  left.className = "grid gap-2 content-start";
  right.className = "grid gap-2 content-start";
  let selected = null;
  let studentScore = 0;
  const terms = shuffle(matchPairs);
  const examples = shuffle(matchPairs);
  function makeButton(item, side) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pair";
    btn.dataset.id = item.id;
    btn.dataset.side = side;
    btn.textContent = side === "term" ? item.term : item.example;
    return btn;
  }
  terms.forEach((item) => left.appendChild(makeButton(item, "term")));
  examples.forEach((item) => right.appendChild(makeButton(item, "example")));
  const result = document.createElement("p");
  result.className = "mt-3 font-bold";
  result.setAttribute("aria-live", "polite");
  function refreshScore() {
    const matched = host.querySelectorAll('.pair.is-matched[data-side="term"]').length;
    result.textContent = "مطابقات صحيحة: " + studentScore + " من " + matchPairs.length + (matched > studentScore ? " (شمل التصحيح بعض البطاقات)." : ".");
  }
  board.addEventListener("click", (event) => {
    const btn = event.target.closest(".pair");
    if (!btn || btn.classList.contains("is-matched")) return;
    if (!selected) {
      selected = btn;
      btn.classList.add("is-selected");
      return;
    }
    if (selected === btn) {
      btn.classList.remove("is-selected");
      selected = null;
      return;
    }
    if (selected.dataset.side === btn.dataset.side) {
      selected.classList.remove("is-selected");
      selected = btn;
      btn.classList.add("is-selected");
      return;
    }
    const a = selected;
    const b = btn;
    a.classList.remove("is-selected");
    if (a.dataset.id === b.dataset.id) {
      [a, b].forEach((el) => {
        el.classList.add("is-matched");
        el.disabled = true;
      });
      studentScore += 1;
      state.games.match = Math.max(studentScore, state.games.match ?? 0);
      saveState();
      selected = null;
      refreshScore();
      if (studentScore === matchPairs.length) toast("اكتملت المطابقة.");
      return;
    }
    [a, b].forEach((el) => {
      el.classList.add("shake");
      setTimeout(() => el.classList.remove("shake"), 350);
    });
    selected = null;
    toast("هذه المطابقة غير صحيحة. أعيدوا المحاولة.");
  });
  const solve = document.createElement("button");
  solve.type = "button";
  solve.className = "btn btn-ghost mt-4";
  solve.textContent = "تصحيح المتبقي";
  solve.addEventListener("click", () => {
    host.querySelectorAll(".pair:not(.is-matched)").forEach((el) => {
      el.classList.add("is-matched");
      el.disabled = true;
    });
    refreshScore();
  });
  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "btn btn-ghost mt-4";
  reset.textContent = "خلط من جديد";
  reset.addEventListener("click", () => renderMatcher());
  const actions = document.createElement("div");
  actions.className = "flex flex-wrap gap-2";
  actions.append(solve, reset);
  host.append(title, lead, board, actions, result);
  board.append(left, right);
}

function renderScenario(id) {
    const game = scenarios[id];
    const host = document.getElementById(id);
    if (!host || !game) return;
    let index = 0;
    let points = 0;
    let locked = false;
    host.replaceChildren();
    const title = document.createElement("h3");
    title.className = "text-2xl";
    title.textContent = game.title;
    const lead = document.createElement("p");
    lead.className = "explain";
    lead.textContent = game.lead;
    const card = document.createElement("article");
    card.className = "panel accent mt-4";
    const prompt = document.createElement("p");
    prompt.className = "text-lg font-bold";
    const why = document.createElement("p");
    why.className = "explain mt-3";
    const options = document.createElement("div");
    options.className = "flex flex-wrap gap-2 mt-3";
    const status = document.createElement("p");
    status.className = "mt-3 font-bold";
    status.setAttribute("aria-live", "polite");
    game.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-ghost";
      btn.textContent = option.label;
      btn.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const item = game.items[index];
        const ok = option.id === item.answer;
        if (ok) points += 1;
        btn.classList.add(ok ? "btn-primary" : "accent-rose");
        why.textContent = (ok ? "أصبتُم. " : "الأقرب غير ذلك. ") + item.why;
        status.textContent = "السؤال " + (index + 1) + " من " + game.items.length + " — الصحيح حتى الآن: " + points;
        const next = document.createElement("button");
        next.type = "button";
        next.className = "btn btn-gold mt-3";
        next.textContent = index === game.items.length - 1 ? "النتيجة النهائية" : "الموقف التالي";
        next.addEventListener("click", () => {
          index += 1;
          if (index >= game.items.length) {
            state.scenarios[id] = Math.max(points, state.scenarios[id] ?? 0);
            saveState();
            card.replaceChildren();
            const done = document.createElement("p");
            done.className = "text-lg font-bold";
            done.textContent = "النتيجة: " + points + " من " + game.items.length + ".";
            const again = document.createElement("button");
            again.type = "button";
            again.className = "btn btn-primary mt-3";
            again.textContent = "إعادة النشاط";
            again.addEventListener("click", () => renderScenario(id));
            card.append(done, again);
            return;
          }
          locked = false;
          why.textContent = "";
          options.querySelectorAll("button").forEach((peer) => {
            peer.className = "btn btn-ghost";
            peer.disabled = false;
          });
          next.remove();
          show();
        });
        card.appendChild(next);
        options.querySelectorAll("button").forEach((peer) => {
          peer.disabled = true;
        });
      });
      options.appendChild(btn);
    });
    function show() {
      prompt.textContent = game.items[index].text;
    }
    card.append(prompt, options, why);
    host.append(title, lead, card, status);
    show();
}

function renderScenarios() {
  Object.keys(scenarios).forEach(renderScenario);
}

function renderGlossary() {
  const list = document.getElementById("gloss-list");
  const query = (document.getElementById("gloss-q").value || "").trim();
  list.replaceChildren();
  glossary
    .filter(([term, def]) => !query || term.includes(query) || def.includes(query))
    .forEach(([term, def]) => {
      const article = document.createElement("article");
      article.className = "panel";
      const h = document.createElement("h3");
      h.textContent = term;
      const p = document.createElement("p");
      p.className = "explain";
      p.textContent = def;
      article.append(h, p);
      list.appendChild(article);
    });
}

function restoreFields() {
  Object.entries(state.fields || {}).forEach(([key, value]) => {
    const el = document.querySelector('[data-save="' + key + '"]');
    if (el) el.value = value;
  });
  document.querySelectorAll(".auto").forEach((el) => {
    el.classList.toggle("is-on", state.autos.includes(el.dataset.id));
    el.setAttribute("aria-pressed", el.classList.contains("is-on") ? "true" : "false");
  });
  document.querySelectorAll("input[type='range'][data-save]").forEach(updateRangeLabel);
  updateAutoCount();
}

function updateRangeLabel(input) {
  const target = document.querySelector('[data-for="' + input.dataset.save + '"]');
  if (target) target.textContent = impactWords[Number(input.value)] || "";
}

function updateAutoCount() {
  const count = document.querySelectorAll(".auto.is-on").length;
  const el = document.getElementById("auto-count");
  if (el) el.textContent = "المحدد: " + count;
}

function selectedAutos() {
  return [...document.querySelectorAll(".auto.is-on")].map((el) => ({
    id: el.dataset.id,
    title: el.dataset.title,
    hours: Number(el.dataset.hours),
    cost: el.dataset.cost,
    solves: el.dataset.solves,
    pros: el.dataset.pros,
    cons: el.dataset.cons,
    warn: el.dataset.warn === "1",
    kind: el.dataset.kind || "time"
  }));
}

function costRank(cost) {
  return { "منخفض": 1, "متوسط": 2, "مرتفع": 3 }[cost] || 9;
}

function buildAutoText() {
  const items = selectedAutos().sort((a, b) => costRank(a.cost) - costRank(b.cost));
  if (!items.length) return "لم تُحدَّد فرص بعد.";
  return items.map((item, index) => {
    const caution = item.warn ? " تنبيه: هذا الخيار يفوق حجم المشروع وميزانيته الحالية." : "";
    return (index + 1) + ". " + item.title + " — التكلفة: " + item.cost + ". يعالج: " + item.solves + ". الميزة: " + item.pros + ". الحد: " + item.cons + "." + caution;
  }).join("\n");
}

function buildImpactText() {
  const map = ["time", "accuracy", "cost", "growth"];
  const labels = {
    time: "توفير الوقت",
    accuracy: "دقة البيانات",
    cost: "ملاءمة التكلفة",
    growth: "دعم النمو"
  };
  const parts = map.map((key) => {
    const input = document.getElementById("impact-" + key);
    return labels[key] + " أثره " + impactWords[Number(input.value)];
  });
  const chosen = selectedAutos();
  const hours = chosen.filter((item) => item.kind === "time").reduce((sum, item) => sum + item.hours, 0);
  let text = "تقدير تعليمي لا يمثل قياسًا محاسبيًا: " + parts.join("، ") + ". مجموع ساعات المساء التي قد تختصرها الاختيارات الزمنية تقريبًا " + hours + " ساعات أسبوعيًا، بشرط صحة البيانات. الأتمتة تضاعف الخطأ إذا دُوِّن خطأ، وملصق الغذاء الخاطئ يضر الزبون والسمعة. سجل العملاء يبقى للاستخدام الداخلي.";
  if (chosen.some((item) => item.kind === "safety")) {
    text += " النسخ الاحتياطي لا يختصر وقت الخَبز، لكنه يحمي السجلات من الضياع.";
  }
  if (chosen.some((item) => item.warn)) {
    text += " النظام المؤسسي الضخم غير متناسب مع الميزانية الصغيرة في هذه المرحلة.";
  }
  return text;
}

function insertText(id, text) {
  const area = document.getElementById(id);
  if (area.value.trim() && !window.confirm("ستُستبدل المسودة الحالية في هذا المربع. هل تتابعون؟")) return;
  area.value = text;
  scheduleSave();
  toast("أُدرجت المسودة. عدّلوها بأسلوبكم.");
}

function buildReport() {
  const root = document.getElementById("report-body");
  root.replaceChildren();
  const name = document.getElementById("student-name").value.trim() || "طالب/ة";
  const group = document.getElementById("student-class").value.trim();
  const head = document.createElement("h3");
  head.textContent = "توصية " + name + (group ? " — " + group : "");
  const intro = document.createElement("p");
  intro.textContent = "مشروع مولي للمخبوزات والمعلبات مشروع منزلي نامٍ: إنتاج نهارًا، ومعارض في عطلة الأسبوع، وإدارة مسائية على دفتر وبطاقات. الميزانية صغيرة، والمطلوب وقت أطول للنمو ووقت أقل للأعمال المتكررة.";
  root.append(head, intro);
  const blocks = [
    ["استخدام البيانات", "molly-a1"],
    ["استخدام المعلومات وتوزيعها", "molly-a2"],
    ["فرص الأتمتة", "molly-a3"],
    ["التوصيات", "molly-a4"],
    ["المزايا والعيوب والمبررات", "molly-a5"],
    ["تقييم الأثر", "molly-a6"]
  ];
  blocks.forEach(([label, id]) => {
    const h = document.createElement("h4");
    h.className = "mt-4";
    h.textContent = label;
    const p = document.createElement("p");
    p.textContent = document.getElementById(id).value.trim() || "لم تُكتب إجابة بعد.";
    root.append(h, p);
  });
  const extra = document.getElementById("impact-text").value.trim();
  if (extra) {
    const h = document.createElement("h4");
    h.className = "mt-4";
    h.textContent = "مسودة المؤشرات";
    const p = document.createElement("p");
    p.textContent = extra;
    root.append(h, p);
  }
}

function money(value) {
  return value.toFixed(2) + " د.أ";
}

function runModel() {
  const price = Number(document.getElementById("model-price").value);
  const qty = Number(document.getElementById("model-qty").value);
  const ing = Number(document.getElementById("model-ing").value);
  const pack = Number(document.getElementById("model-pack").value);
  const out = document.getElementById("model-out");
  out.replaceChildren();
  if ([price, qty, ing, pack].some((n) => Number.isNaN(n) || n < 0)) {
    out.textContent = "أدخلوا أرقامًا موجبة أو صفرًا. القيمة السالبة لا تصلح لهذا النموذج.";
    return;
  }
  const revenue = price * qty;
  const cost = (ing + pack) * qty;
  const profit = revenue - cost;
  const lines = [
    qty === 0 ? "لا مبيعات في هذا الأسبوع، فناتج الربح المبسط صفر. هذه نتيجة صالحة للنموذج." : "النموذج يحسب أسبوعًا واحدًا ولا يشمل الأجور والطاقة والنقل.",
    "الإيراد التقديري: " + money(revenue),
    "تكلفة المكونات والتغليف: " + money(cost),
    "الربح التشغيلي المبسط: " + money(profit)
  ];
  lines.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    out.appendChild(p);
  });
}

function digitsOnly(value) {
  return value.replace(/[^\d]/g, "");
}

function runLab() {
  const name = document.getElementById("lab-name").value.trim();
  const qty = document.getElementById("lab-qty").value.trim();
  const phone = digitsOnly(document.getElementById("lab-phone").value);
  const email = document.getElementById("lab-email").value.trim();
  const code = document.getElementById("lab-code").value.trim().toUpperCase();
  document.getElementById("lab-code").value = code;
  const problems = [];
  if (name.length < 2) problems.push("الاسم الإلزامي فارغ أو أقصر من حرفين، والسَهو لا يُقبل.");
  if (!/^\d+$/.test(qty) || Number(qty) < 1 || Number(qty) > 500) problems.push("الكمية يجب أن تكون عددًا صحيحًا بين 1 و 500.");
  if (!/^07\d{8}$/.test(phone)) problems.push("الهاتف يطابق القناع: 07 ثم ثمانية أرقام، من غير مسافات.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) problems.push("البريد يحتاج شكلًا يحتوي اسمًا ورمز @ ونطاقًا.");
  if (!/^[A-Z]{3}-\d{3}$/.test(code)) problems.push("رمز المنتج ثلاثة أحرف لاتينية ثم شرطة ثم ثلاثة أرقام، مثل JAM-012.");
  const out = document.getElementById("lab-out");
  out.replaceChildren();
  const title = document.createElement("p");
  title.className = "font-bold";
  if (problems.length) {
    title.textContent = "رفض التحقق من الصحة:";
    out.appendChild(title);
    problems.forEach((problem) => {
      const p = document.createElement("p");
      p.textContent = problem;
      out.appendChild(p);
    });
  } else {
    title.textContent = "القناع قبل الشكل: كل الحقول مقبولة شكليًا.";
    const note = document.createElement("p");
    note.textContent = "هذا ليس تحققًا. الرقم قد يكون لشخص آخر، والرمز قد لا يقابل منتجًا حقيقيًا. أعيدوا المطابقة مع المصدر الأصلي.";
    out.append(title, note);
  }
}

function filterStock(mode) {
  document.querySelectorAll("#stock-body tr").forEach((row) => {
    const cat = row.dataset.cat;
    const qty = Number(row.dataset.qty);
    let show = true;
    if (mode === "bake") show = cat === "مخبوزات";
    if (mode === "jar") show = cat === "معلبات";
    if (mode === "compound") show = cat === "معلبات" && qty < 20;
    row.hidden = !show;
    row.classList.toggle("is-hit", mode === "compound" && show);
  });
}

function sortStock(key, dir) {
  const body = document.getElementById("stock-body");
  const rows = [...body.querySelectorAll("tr")];
  rows.sort((a, b) => {
    if (key === "qty") return (Number(a.dataset.qty) - Number(b.dataset.qty)) * dir;
    return a.dataset.name.localeCompare(b.dataset.name, "ar") * dir;
  });
  rows.forEach((row) => body.appendChild(row));
}

function downloadCsv() {
  const rows = [...document.querySelectorAll("#stock-body tr")].filter((row) => !row.hidden);
  const lines = ["\uFEFFproduct,qty,category"];
  rows.forEach((row) => {
    const cells = [...row.children].map((cell) => '"' + cell.textContent.trim().replaceAll('"', '""') + '"');
    lines.push(cells.join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "molly-stock.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  toast("نُزّل ملف القيم المفصولة بفواصل للصفوف الظاهرة.");
}

function renderBars() {
  const host = document.getElementById("bars");
  if (!host) return;
  const rows = [...document.querySelectorAll("#stock-body tr")];
  const max = Math.max(...rows.map((row) => Number(row.dataset.qty)));
  host.replaceChildren();
  rows.forEach((row) => {
    const line = document.createElement("div");
    const label = document.createElement("p");
    label.className = "small";
    label.textContent = row.dataset.name + " — " + row.dataset.qty;
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = (Number(row.dataset.qty) / max) * 100 + "%";
    track.appendChild(fill);
    line.append(label, track);
    host.appendChild(line);
  });
}

function markDuplicates() {
  const rows = [...document.querySelectorAll("#dup-body tr")];
  const seen = new Map();
  rows.forEach((row) => {
    const phone = row.dataset.phone;
    seen.set(phone, (seen.get(phone) || 0) + 1);
  });
  let found = 0;
  rows.forEach((row) => {
    const dup = seen.get(row.dataset.phone) > 1;
    row.classList.toggle("is-dup", dup);
    if (dup) found += 1;
  });
  document.getElementById("dup-out").textContent = found
    ? "وُجد تكرار في " + found + " صفوف. التطهير يبقي سجلًا واحدًا موثوقًا لكل عميل."
    : "لا تكرار ظاهر.";
}

function runBuilder() {
  const raw = document.getElementById("raw-data").value.trim();
  const info = document.getElementById("info-data").value.trim();
  const out = document.getElementById("builder-out");
  out.replaceChildren();
  if (!raw || !info) {
    out.textContent = "اكتبوا مثال البيانات ومثال المعلومات معًا.";
    return;
  }
  const a = document.createElement("p");
  a.textContent = "بيانات: " + raw;
  const b = document.createElement("p");
  b.textContent = "معلومات: " + info;
  const c = document.createElement("p");
  c.textContent = "بقيت خطوة بشرية: ما القرار الذي يُبنى على هذه المعلومة؟";
  out.append(a, b, c);
}

function listen(id, type, fn) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(type, fn);
}

const pageRoutes = {
  1: "index.html",
  2: "basics.html",
  3: "communities.html",
  4: "sources.html",
  5: "quality.html",
  6: "molly.html",
  7: "practice.html"
};

function markCurrentPage() {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const current = file === "" ? "index.html" : file;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    const on = href === current;
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const label = document.body.dataset.label;
  const here = document.getElementById("here");
  if (label && here) here.textContent = "أنتم في: " + label;
  const id = document.body.dataset.page;
  if (id && !state.visited.includes(id)) {
    state.visited.push(id);
    scheduleSave();
  } else {
    updateProgress();
  }
}

function bind() {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const dark = document.documentElement.classList.contains("dark");
    setTheme(dark ? "light" : "dark");
  });
  document.getElementById("scale-toggle").addEventListener("click", cycleScale);
  document.getElementById("glossary-open").addEventListener("click", () => {
    document.getElementById("glossary").showModal();
  });
  document.getElementById("gloss-q").addEventListener("input", renderGlossary);
  document.getElementById("glossary").addEventListener("click", (event) => {
    if (event.target.id === "glossary") event.target.close();
  });
  document.getElementById("timer-pause").addEventListener("click", () => {
    timerPaused = !timerPaused;
    document.getElementById("timer-pause").textContent = timerPaused ? "متابعة" : "إيقاف مؤقت";
    document.getElementById("timer-status").textContent = timerPaused ? "المؤقت متوقف مؤقتًا." : "المؤقت يعمل.";
  });
  document.getElementById("timer-stop").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    remaining = 0;
    renderTimer();
    document.getElementById("timer-status").textContent = "المؤقت متوقف.";
  });
  document.body.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-min]");
    if (jump) {
      const mins = Number(jump.dataset.min);
      if (mins) startTimer(mins);
      if (jump.dataset.go) {
        document.getElementById(jump.dataset.go)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    const folder = event.target.closest("[data-toggle-details]");
    if (folder) {
      const section = document.getElementById(folder.dataset.toggleDetails);
      if (!section) return;
      const all = [...section.querySelectorAll("details")];
      const shouldOpen = all.some((item) => !item.open);
      all.forEach((item) => {
        item.open = shouldOpen;
      });
      folder.textContent = shouldOpen ? "طي التفاصيل" : "فتح التفاصيل";
    }
    const auto = event.target.closest(".auto");
    if (auto) {
      auto.classList.toggle("is-on");
      auto.setAttribute("aria-pressed", auto.classList.contains("is-on") ? "true" : "false");
      updateAutoCount();
      scheduleSave();
    }
  });
  document.body.addEventListener("input", (event) => {
    if (event.target.matches("[data-save]")) scheduleSave();
    if (event.target.matches("input[type='range'][data-save]")) updateRangeLabel(event.target);
  });
  listen("insert-auto", "click", () => insertText("molly-a3", buildAutoText()));
  listen("insert-recs", "click", () => insertText("molly-a4", buildAutoText()));
  listen("build-impact", "click", () => insertText("impact-text", buildImpactText()));
  listen("copy-impact", "click", () => insertText("molly-a6", document.getElementById("impact-text").value || buildImpactText()));
  listen("build-report", "click", buildReport);
  listen("copy-report", "click", async () => {
    buildReport();
    const text = document.getElementById("report-body").innerText;
    try {
      await navigator.clipboard.writeText(text);
      toast("نُسخت التوصية.");
    } catch (err) {
      toast("تعذر النسخ التلقائي. حددوا النص من لوحة التوصية.");
    }
  });
  listen("print-student", "click", () => {
    document.body.classList.add("print-molly");
    document.body.classList.remove("with-teacher");
    window.print();
  });
  listen("print-teacher", "click", () => {
    document.body.classList.add("print-molly", "with-teacher");
    window.print();
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-molly", "with-teacher");
  });
  listen("model-run", "click", runModel);
  listen("lab-run", "click", runLab);
  listen("builder-run", "click", runBuilder);
  listen("dup-run", "click", markDuplicates);
  listen("csv-download", "click", downloadCsv);
  document.querySelectorAll("[data-stock]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.stock;
      if (mode === "name-asc") sortStock("name", 1);
      else if (mode === "name-desc") sortStock("name", -1);
      else if (mode === "qty-asc") sortStock("qty", 1);
      else if (mode === "qty-desc") sortStock("qty", -1);
      else filterStock(mode);
    });
  });
  document.getElementById("reset-state").addEventListener("click", () => {
    if (!window.confirm("سيُحذف حفظ الأسماء والإجابات والاختبارات على هذا المتصفح. هل تتابعون؟")) return;
    localStorage.removeItem(STATE_KEY);
    location.reload();
  });
  document.addEventListener("keydown", (event) => {
    if (!event.altKey || event.ctrlKey || event.metaKey) return;
    const href = pageRoutes[event.key];
    if (!href) return;
    event.preventDefault();
    location.href = href;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  setTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
  const scale = localStorage.getItem(SCALE_KEY);
  if (scale) document.documentElement.dataset.scale = scale;
  const label = { md: "خط عادي", lg: "خط كبير", xl: "خط العرض" };
  document.getElementById("scale-toggle").textContent = label[document.documentElement.dataset.scale || "lg"];
  renderGlossary();
  renderQuizzes();
  renderClassifiers();
  renderMatcher();
  renderScenarios();
  renderBars();
  restoreFields();
  bind();
  markCurrentPage();
  renderTimer();
});
