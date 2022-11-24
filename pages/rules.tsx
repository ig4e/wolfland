import React from "react";
import LayoutNoContainer from "../components/Layouts/LayoutNoContainer";
import wezaraDahelya from "../public/images/wezara-dahelya.webp";
import Image from "next/image";
import Head from "next/head";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

function Rules() {
	const rulesData = [
		{
			title: "القوانين العامة",
			desc: `القوانين العامة تعتبر هي قوانين الرول بلاي والتى يجب
			على الجميع قرائتها والتأكد من حظفها وفهمها بالكامل
			وبعدها يمكنك ان تقوم بالتقدم للأختبار والتعرف على
			التفعيل في وولف لاند`,
			logo: wezaraDahelya,
			rules: [
				{
					header: "تعريف الرول بلاي",
					content:
						"تقمص وتمثيل الشخصية باللعب قولاً وفعلاً مع مراعاة مجريات أحداث اللعبة وما يدور حولك في المنطقة، ومقارنة اللعب داخل السيرفر بالحياة الواقعية، وعدم الخروج عن الواقعية أثناء تمثيل شخصيتك. ",
				},
				{
					header: "الدهس أو الصدم بالمركبة - VDM",
					content:
						"استخدام المركبة كسلاح لقتل الأشخاص.\nدم لمركبة كل دقيقة  او الصدم على سرعة فوق ال 100 \nالقتل عن طريق الصدم بالمركبة او صدم المركبات ممنوع ومخالف للنظام العام للسيرفر.",
				},
				{
					header: "قوانين الحياة الجديدة - NLR",
					content: `في حال اغمائك بشكل كامل لا يمكنك الكلام او الحركة او فعل اي شيء
						في حال تم اسقاطك من قبل شخص و تم انعاشك من قبل مسعفين تستطيع تذكر جميع الاحداث في حال تم احراق جثك لا تستطيع تذكر اي شي حصل لك
						( منها العداوات او السناريوهات )`,
				},
				{
					header: "الباور جيمنج - PowerGaming",
					content: `  استخدام الوسائل غير موجودة في اللعبة للحصول على ميزة أو عدم التوافق مع العالم بطريقة معقولة وبشكل واقعي 

					ومنها التالي وهناك الكثير من  المواقف والامثلة التي تندرج تحت Powergaming`,
				},
				{
					header: "الخوف على الحياة - NVL",
					content: `عدم الخوف بشكل واقعي على حياتك عندما تتعرض للتهديد بالأسلحة أو بأذى شديد من وسائل أخرى يعتبر الخوف على الحياة شي اساسي ومهم جدا 

					مثال : اذا كان هناك اداة تعرض حياتك للخطر`,
				},
				{
					header: "الميتا جيمنج Metagaming",
					content: ` اي معلومة تحصل عليها من خارج المدينة مثال معلومة حصلت عليها 

					من  بث او  دسكورد او مقطع باليوتيوب كلها تعتبر مخالفة`,
				},
				{
					header: "القتل العشوائي - RDM",
					content: `قتل الأشخاص دون سبب,  تهديد, بصورة عشوائية او بدون عداوة يعتبر القتل العشوائي ممنوع ومخالف للنظام العام للسيرفر.`,
				},
				{
					header: "قانون تقدير حياتك",
					content: `هي الحفاظ على حياتك وحياة الآخرين، وعدم التهور، وأن لا تستهين بقتل الأشخاص، وأن لا تقاوم المجرم أو الشرطة او اي شحص يحمل سلاح مهما كان خصوصاُ اذا كنت أعزل، وهذا لا يمنع استعمال حق الدفاع عن النفس عند الضرورة التي تمنعك من طلب مساعدة الشرطة، وبكل الأحوال يجب محاورة اللاعب بشكل جيد والتفاوض معه قبل الشروع بأي عمل يعرض حياة اللاعب الآخر للخطر.`,
				},
				{
					header: "القوانين العامة",
					content: `ممنوع استخدام اي شخصية افتراضية الا من خلال المتجر فقط.
 

					ممنوع كتابة أسمك باللغة الأنجليزية او يكون اسم شخصيه مشهوره مثال: ( بابلو اسكوبار ) . ( ابو محمد ) الخ….
					 
					
					لك الحق فى استخدام شخصية اجرامية والأخري يجب ان تكون في اى جهة حكومية.
					 
					
					ممنوع الستريم سنايب أو متابعة البثوث أثناء اللعب منعاً باتاً وعقوبتها شديدة.
					 
					
					ممنوع نهائياً التواجد في الديسكورد او التواصل الخارجي لجميع اللاعبين.
					 
					
					ممنوع ملاحقة العساكر بغرض محاولة المضايقات اوالتدخل بعملهم او الترصد و بناء عداوة معهم.
					 
					
					ممنوع الاعتداء على البوتات لاي سبب مهما كان ويجب ان تعتبره مواطن ويتم تطبيق القوانين عليه.
					 
					
					يمنع منعاً باتاً التحلل او الخروج من المدينة نهائياً الأ بعد 15 دقيقة من بعد انتهاء السناريو.
					 
					
					يمنع طلب تعويض في حال خسرت فلوسك وأسلحتك وأغراضك بسبب التحلل أو نقلك إلى المستشفى.
					 
					
					ممنوع الكتابة خارج “الرول بلاي” في تطبيق تويتر، ويمكن الكتابة فقط في الأمور الداخلة في إطار التمثيل وتقمص الشخصيات والسيناريوهات والأمور المكملة لها.
					 
					
					ممنوع الدخول فى اى سناريو الا اذا كانت بينكم معرفه في الرول بلاي لمدة لا تقل عن اسبوع.
					 
					
					ممنوع القذف بالأعراض والشتم والكلام البذيء والكلام الطائفي أو السياسي أو الديني أو القبلي ويعتبر مخالف للنظام العام وتصل إلى حظرك من دخول السيرفر نهائياً ومن غير تنبيه.
					 
					
					يمنع طلب الخدمات المتاحة بالجوال بقصد الخطف أو القتل أو السرقة أو بغير الاستفادة من الخدمة.
					 
					
					يمنع توزيع الفلوس أو التسليف أو ما شابه بين اللاعبين بمبالغ كبيرة : ( 10الاف فما فوق ) يجب ان تكون بين الطرفين معرفه لا تقل عن اسبوعين.
					 
					
					في حال رفع عليك شخص سلاح ناري او سلاح ابيض يجب عليك ان تستلم بشكل كامل للشخص. و ان كان هناك اي مخالفه في السناريو يجب عليك مجارتها في الاحداث و ان تستكمل السناريو حتى النهايه.
					 
					
					النشاط الاجرامي يقتصر على 6 اشخاص فقط شامل التدخل الخارجي ضد العسكر.
					 
					
					يمنع انك تخطف شخص في مكان عام او غيرها من الاماكن -يجب عليك سحب الشخص الى مكان خالي من الاشخاص و تتغاضى عن الانظار و بعدها تستطيع خطف الشخص.
					 
					
					يمنع ان تاخذ احد معارفك سواءً كنتو في عصابه او زملاء ك رهينة يجب عليك اخذ رهينة ليس بينك وبينها معرفه.
					 
					
					ممنوع منعاً باتاً ‌ ‌قتل‌ ‌الأشخاص‌ ‌في‌ ‌حال‌ ‌كانوا‌ ‌ينفذون‌ ‌الاوامر‌ ‌او‌ ‌بحجة‌ ‌النسيان.
					 
					
					يسمح لك السرقه في الاماكن المشبوه مثل بيع الكوكاين او الجزيره او مكان بيع القروش و غيرها من الاماكن المشبوه.
					 
					
					ولكن يمنع انك تسرق في مكان ( صيد القروش ) + يمنع انك تترصد في المواقع المشبوه حتى تسرق اي شخص يمر – و في حال انك سرقت اي شخص في المواقع المشبوه يجب عليك مغادرة الموقع فوراً ولا تترصد للشخص الاخر الا بعد فتره.
					 
					
					مشاركتك لاي من معلوماتك او حساباتك الشخصية ( ستيم – روك ستار – فايف ام – دسكورد ) مع اي شخص كان واستخدامها للدخول الى السيرفر يعرضكم جميعا للباند النهائي.
					 
					
					في حال اسقطت عسكري او مجرم سواءً كنت في سناريو سرقه او غيرها يمنع انك تنقل العسكري او المجرمين للمستشفى بعد انتهاء الفايت الا اذا كان الشخص في عصابتك او مجموعتك.
					 
					
					عند تبادل اطلاق النار بين طرفين يمنع انك تكون حامل شخص بيدك خلال اطلاق النار يجب انزال الشخص و بعدها تستطيع ان تتبادل اطلاق النار.
					 
					
					يمنع ان تحمل شخصين في نفس الوقت – ( حمل + سحب ) مهما كانت الاسباب.
					 
					
					يحق للرقابه المحاسبه على جميع الاخطاء حتى لو لم تكن ضمن القوانين.
					 
					
					ممنوع اعطاء اي من المعلومات الاجرامية او اي شئ يخص الاجرام بشكل كامل سواء من صديق او من غريب او مقابل مالي حتى لو فيها مقابل كبير ممنوع و اجباري تبلغ على الشخص.
					
					تنبيه على القيادة الغير واقعيه في حال تم رصد اي مواطن يقود مركبته بطريقة غير واقعيه ( سرعة بدون سبب – قطع اشارات بدون سبب – تهور في القيادة بدون سبب ) و الى مالا ذلك … سيكون عليها تحذير PowerGamming الرجاء القيادة بشكل واقعي تجنبا من التحذيرات او الباند.
					
					في حال حصل سناريو اطلاق نار او سرقة بينك وبين العساكر او مجموعتك وتم اسقاط العساكر يحق لك فقط سرقة سلاحه و رصاصه ودروعه و في حال سرقة شيئ اخر بدون سبب مقنع تعتبر مخالفه للقوانين.`,
				},
				{
					header: "نظام الورنات",
					content: `نظام التحذيرات غير ثابت بمعنى ليس كل المخالفات تندرج تحت هذا النظام   
 
					اذا حصل اللاعب على 10 تحذيرات يعرض للباند لمدة يوم واحد.
					 
					اذا حصل اللاعب على 15 تحذير يعرض للباند لمدة ثلاثة أيام.
					 
					اذا حصل اللاعب على 25 تحذير يعرض للباند لمدة سبعة أيام.
					 
					 اذا حصل اللاعب على 30 تحذير يعرض للباند النهائي.`,
				},
			],
			apply: true,
			applyUrl: `/apply`,
		},
		{
			title: "قوانين الشرطة",
			desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.`,
			logo: wezaraDahelya,
			rules: [
				{
					header: "قوانين الشرطة تجاة المواطن",
					content: `يجب على جميع منسوبي وزارة الداخلية احترام جميع المواطنين.
					عدم رفع السلاح الناري على المواطن بدون اى سبب مقنع.
					عدم أخذ اى مواطن في موقع اشتباة الى قسم الشرطة بدون دليل قاطع.
					أحترام المجرم او المواطن في قسم الشرطة حتي اذا كان متهم رئيسي في القضيه
					ممنوع سجن المواطن الا بعد أثبات قاطع وسماع جميع اقواله “البصمة وبصمة السلاح,…”
					عدم التحدث مع المواطنين بتكبر أو التدخل في شئون المواطن الا اذا كان المواطن يقوم بالشغب أو ازعاج المواطنين ” تقدر تحرك المواطن بالقوة الجبرية”
					يمنع من اى شرطي تفتيش أى مواطن الأ أن يكون لديه سبب كافي مثال ” يرتدي ماسك, تواجد في موقع مشبوة, في قضية جنائبة…”
					لا يحق للشرطى أن يأخذ المواطن الى قسم الشرطة لأي مخالفة مرورية ”الا في حالة عدم التعاون”
					يمنع نهائياً اعطاء أي مواطن أي أغراض تخص جهاز الشرطة.
					`,
				},
				{
					header: "قوانين الشرطة الألزامية",
					content: `الإجازات والاستقالات يتم طلبها من الرتب العليا بتطبيق الديسكورد بالمكان المخصص لها، لا يمكن الخروج من وزارة الداخلية إلا بتقديم طلب استقالة
					ممنوع على أي عسكري أخذ أجارة الا بموافقة أحد مسئولي وزارة الداخلية.
					عند فصلك من الشرطة أو الأستقالة عليك تسليم العهد داخل مركز الشرطة “في حالة عدم تسليم العهد سوف يتم محاسبتك من قبل الجهات المختصة”
					يجب على كل فرد أو ضابط الالتزام التام بالقوانين وتوجيهات القائد أو النائب أو من يتم تعيينه من قبل المذكورين سابقاً على حسب ما تنص عليه القوانين، وعدم الالتزام بما جاء في القوانين تصل عقوبتها إلى الفصل.`,
				},
				{
					header: "قوانين الشرطة العامة",
					content: `يجب على جميع منسوبي وزارة الداخلية احترام وتقدير جميع الرتب العسكرية من أي قطاع كان.
					المحكمة العسكرية شئ أجباري ومن يرفض يعاقب.
					يجب الألتزام بالمركبات واللبس والأسلحة الخاصة برتبك.
					عدم تشغيل صفارات الطوارئ منعاً باتاً الا بعد استلام حالة من مركز العمليات.
					يجب على كل شرطي أعادة العهد المأخوذ حيث كان والأ سوف يتم محاسبته.
					يجب الألتزام بقوانين المرور أمر واجب على الجميع بما فيهم منسوبي وزارة الداخليه.
					يجب على العسكري تفتيش المتهم ومصادرة جميع الاسلحة التى استخدمها فى موقع الجريمة في مركز الشرطة فقط.
					يجب على كل شرطي بعد الأنتهاء من التحقيق أن يضع التهم في سجل الجنائي للمتهم ثم يتم سحب الأغراض الممنوعه عند المتهم.
					يجب على العسكري أثناء التفاوض عدم الاستهزاء وأخذ الأمور بجدية والخوف على حياة الرهينة والجدية في العمل وعدم أخذ الوظيفة على محمل كوميدي.
					 يجب على كل شرطي ذكر الموقع الذي هو فيه ووصف الحالة قبل الدخول فيها لسلامته.
					يمنع التقديم في قطاع الشرطة بشخصيتين.`,
				},
				{
					header: "قوانين الأجازات",
					content: `الإجازات والاستقالات يتم طلبها من الرتب العليا بتطبيق الديسكورد بالمكان المخصص لها، لا يمكن الخروج من وزارة الداخلية إلا بتقديم طلب استقالة
					ممنوع على أي عسكري أخذ أجارة الا بموافقة أحد مسئولي وزارة الداخلية.
					عند فصلك من الشرطة أو الأستقالة عليك تسليم العهد داخل مركز الشرطة “في حالة عدم تسليم العهد سوف يتم محاسبتك من قبل الجهات المختصة”
					يجب على كل فرد أو ضابط الالتزام التام بالقوانين وتوجيهات القائد أو النائب أو من يتم تعيينه من قبل المذكورين سابقاً على حسب ما تنص عليه القوانين، وعدم الالتزام بما جاء في القوانين تصل عقوبتها إلى الفصل.`,
				},
			],
			apply: false,
		},
		{
			title: "قوانين العدل",
			desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.`,
			logo: wezaraDahelya,
			rules: [
				{
					header: "الدوام الرسمي للقاضي",
					content: `يبدا الدوام الرسمي للقاضي من الساعة 8:00م الى الساعة 10:00م
					هذه الاوقات تستثنى عن القضايا
دوام القاضي يكون بمكتب القاضي بداخل المحكمة
بامكان اي مواطن او موظفين الوزارات مراجعة القاضي في حال ارادو اصدار الاوراق الحكومية المختصه بها وزارة العدل او بامكانهم اللجوء الى فتح تذكره بوزارة العدل لاصدار معاملتهم`,
				},
				{
					header: "تعريف وزارة العدل",
					content: `وزارة العدل تهتم بشؤون عديدة و منها.
					العدل بين الناس و اعطاء كل ذي حق حقه
					استلام شكوى المواطنين من المحامين و اعلان بها قضية اذا استحقت
					ترتيب الجلسات القضائية و اعلانها و الحكم فيها
					مسؤولة عن المزادات في المدينة
					الافراج عن المساجين بعد الاستحقاق
					تمويل المنشات الصغيرة بعد الاستحقاق
					اصدار رخصة المحاماه
					اصدار سجلات التجارية
					اصدار عقود الزواج
					اصدار صكوك الاعفاء
					اصدار ورقه حمل سلاح
					اصدار صكوك ملكية للبيوت`,
				},
				{
					header: "مهام المحامي",
					content: `يكون للمحامي موكلين خاصين فيه و بامكانه برم عقود طويلة الاجل بالترافع عنهم مقابل مبلغ يتفقون عليه
					يتم طلب المحامي من المواطنين بمركز الشرطة و يكون هنالك اتفاق بين المواطن و المحامي قبل الشروع في المحاماه عنة
					يترافع المحامي عن موكله في قاعة المحكمة و يحاول اثبات براتة
					بامكان المحامي زياره موكله بالسجن العام و محاوله تخفيف مدة سجنة 5-يتم تكليف المحامي من قبل القاضي باعمال معينه تخص وزارة العدل مثل العقود و التراخيص و الاعفاء`,
				},
			],
		},
		{
			title: "قوانين الاسعاف",
			desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.`,
			logo: wezaraDahelya,
			rules: [
				{
					header: "قوانين المستشفي للمواطنين",
					content: `– لاتتواجد بالمستشفى اذا ماكان عندك سبب – لاتركض بالمستشفى – من المهم الحفاظ على الامان في المستشفى لذلك في حال تسببت باطلاق نار او تعدي على اي شخص بالمستشفى سيتم حظرك من دخول المستشفى بوثيقة رسمية من المحكمة (وتنسجن في حال رجعت ويتم رفض اي علاج لك)`,
				},

				{
					header: "تنبيهات المستشفي",
					content: `– لن يتم علاجك في حال كنت لا تحترم وتتعاون مع المسعفين – نقلك لاشخاص مسقطين يعرضك للتحقيق مع الشرطة لمعرفة تفاصيل الحادثة لذلك يفضل دائما طلب مسعف للموقع لينقل المسقطين بأمان – لاتطلب مسعف اذا كنت في سياره متحركة ويتغير مكانك كل شوي – يرجى عدم تكرار الاتصالات ولاتستعمل رقم الشرطة لطلب مسعف – احرص على حمل الهوية دائما ليتم معرفتك وتسجيلك بالنظام وعلاجك وصرف الادوية لك`,
				},
				{
					header: "القوانين الألزامية",
					content: `يجب على منسوبي الإسعاف احترام جميع المواطنين.
					يجب على منسوبي الإسعاف  تسجيل الدخول والخروج والتواجد في الراديو على الموجة المخصصة للإسعاف .
					يلتزم منسوبي الإسعاف بالسرية التامة وعدم إفشاء المعلومات التي تخص الإسعاف أو منسوبيها.
					يجب عليك مراجعة التعميمات دائماً وعدم التغيب عن الاجتماعات إلا بإذن من المسؤول.
					يجب الإلتزام بالزي الرسمي للإسعاف.
					يسمح لك بحمل 35 ضمادة و 15 مسكن للآلام.
					يمنع إعطاء الأدوات الطبية لأي شخص.
					يمنع على منسوبي الإسعاف حمل أي سلاح أو ممنوعات.
					يجب عليك التعاون مع وزارة الداخلية دائماً وعدم تسريب أي معلومات خاصة وقد تصل عقوبة مخالفة هذه المادة إلى الفصل والسجن 60 شهر.
					 يسمح لك بأعطاء المواطن 2 من كل الضمادات والمسكنات كحد أقصى.
					 يمنع استعمال السيارات الغير رسمية أو سرقة السيارات.
					 يمنع منعا باتا الاستهزاء على أي وزارة وقد تصل عقوبة مخالفة هذه المادة إلى السجن 60 شهر. 
					 يمنع معالجة أي مدني وأنت غير لابس الزي الرسمي للمسعفين. 
					 في حال كان المواطن مصاب بإصابات حرجة يجب عليك نقله إلى المستشفى.
					 يمنع إنعاش الشخص المحترق. 
					 يمنع التحدث مع المصاب وهو في حالة إغماء. 
					 يجب على منسوبي الإسعاف الالتزام بالأنظمة المرورية وعدم التهور بالقيادة.
					 يجب على منسوبي الإسعاف الجدية في العمل والخوف على حياة المواطن.
					 يجب عليك فحص الحالة قبل إنعاشها أو علاجها والخوف على حياتها.
					 في حال أنعشت أو ساعدت المواطن يجب عليك التحمد له بالسلامة وسؤاله عن سبب الإغماء، وسؤاله في حال كان يحتاج إلى نقل للمستشفى أو كان يحتاج لأكل أو شرب.
					 
					يمنع الترصد نهائياً للمسعفين لانهم يعتبرو خدمات عامة وليس لهم اي صلة بأي سيناريو أو وزارة أخري.
					يمكن للمسئولين في حالة وجود حالات شغب في المستشفي أو في أماكن الأنعاش “كلبشة” المتسبب فى حالة الشغب بدون تهديد وتسليمة الى الشرطة فى المركز أو طلب وحة شرطة لمكان الواقعة.`,
				},
				{
					header: "شروط الأجازه",
					content: `أخذ الإذن من المسؤول المتواجد.
					التخلص من جميع الأدوات الإسعافية.
					تغيير زي المسعف إلى زي مواطن.
					تواجد بديل لك.`,
				},
			],
		},
		{
			title: "قوانين الرقابة",
			desc: `الرقابة هي إدارة معنية بمتابعة مجريات الأحداث ومتابعة مخالفات النظام العام في السيرفر، حيث أن رجل الرقابة يهتم بتقييم السيناريوهات والأحداث العامة ومعاقبة أي شخص يخالف النظام العام والعمل على القبض على المخربيين والمخادعين والمتعدين على الرول من اى اتجاه وهذا ما يجعل الرقابة هي الأدارة الوحيده التى لديها الحق فى التدخل فى اى مشكلة بين اللاعبين او اى تعدي قائم من طرف الى اخر.`,
			logo: wezaraDahelya,
			rules: [
				{
					header: "تعريف الرقابة",
					content: `الرقابة هي إدارة معنية بمتابعة مجريات الأحداث ومتابعة مخالفات النظام العام في السيرفر، حيث أن رجل الرقابة يهتم بتقييم السيناريوهات والأحداث العامة ومعاقبة أي شخص يخالف النظام العام والعمل على القبض على المخربيين والمخادعين والمتعدين على الرول من اى اتجاه وهذا ما يجعل الرقابة هي الأدارة الوحيده التى لديها الحق فى التدخل فى اى مشكلة بين اللاعبين او اى تعدي قائم من طرف الى اخر.`,
				},
				{
					header: "التعويضات",
					content: `لكي يتم التعويض الكامل لأي لاعب يجب ان تتوفر البنود التالية.
					ان تكون المشكلة بسبب برمجي.
					ان يكون لديك فيديو كامل عن المشكلة.
					لابد ان لا تتعدي المدة للشكوي اكثر من 3 ايام.
					يجب تحديد الخسائر كاملة فى الفيديو لانه سيتم التعويض بناء عليها.`,
				},
				{
					header: "شكوى",
					content: `يمكنك ان تقوم بالشكوي على اى لاعب فى المدينة او فى السيرفر مهما كانت رتبته مع التأكد من ان لديك الدليل القاطع على الشخص وسيتم تحويل التذكرة الى الجهة المناسبة لأتخاذ الأجراء المناسب معه وتأكد انه سيتم التعامل مع الشخص المخطئ بكل شفافية.`,
				},
			],
		},
	];

	return (
		<LayoutNoContainer>
			<main className="space-y-16 !mb-16">
				<Head>
					<title>Wolfland - قوانين ولف لاند</title>
					<meta
						name="description"
						content="Wolfland - عالم الخيال والابداع فى الرول بلاى"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<header className="bg-gradient-to-r from-primary to-root py-10">
					<div className="flex flex-col items-start gap-4 container mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							القوانين
						</h1>
						<p className="text-neutral-100 max-w-2xl">
							جميع القوانين اللازمة للانضمام لنا! تضمن القوانين
							العامة وقوانين الشرطة والعدل والاسعاف والرقابة
							والعصابات وتنويهات التقديم
						</p>
					</div>
				</header>

				<div className="container mx-auto space-y-8">
					<div className="flex flex-col justify-center items-center text-center gap-4 hidden">
						<div className="text-4xl md:text-5xl lg:text-5xl font-bold flex gap-4 items-center">
							<Image
								className=""
								src={wezaraDahelya}
								alt={"الوزارة الداخلية"}
								width={48}
								height={48}
							></Image>
							<h1>القوانين العامة</h1>
						</div>
						<p className="text-neutral-100 max-w-2xl">
							القوانين العامة تعتبر هي قوانين الرول بلاي والتى يجب
							على الجميع قرائتها والتأكد من حظفها وفهمها بالكامل
							وبعدها يمكنك ان تقوم بالتقدم للأختبار والتعرف على
							التفعيل في ريسبكت
						</p>
					</div>

					{rulesData.map((ruleSection, index) => {
						return (
							<div key={ruleSection.title} className="space-y-8">
								<div
									className="border-2 rounded-full border-root-200 w-full"
									hidden={index === 0}
								></div>

								<div className="flex flex-col items-start gap-6">
									<div className="flex gap-4 md:gap-6 items-center">
										<Image
											className="w-32 h-32 md:w-48 md:h-48"
											src={ruleSection.logo}
											alt={ruleSection.title}
											width={192}
											height={192}
										></Image>
										<div className="flex flex-col items-start gap-6">
											<h1 className="font-bold text-3xl md:text-4xl">
												{ruleSection.title}
											</h1>
											<p className="text-neutral-100 hidden md:block">
												{ruleSection.desc}
											</p>
											{ruleSection.apply &&
												ruleSection.applyUrl && (
													<Link
														href={
															ruleSection.applyUrl
														}
														className="btn-primary"
													>
														التقديم الاليكترونى
													</Link>
												)}
										</div>
									</div>

									<Accordion.Root
										type="single"
										className="bg-root-100 rounded-md w-full"
										collapsible={true}
									>
										{ruleSection.rules.map(
											({ content, header }) => {
												return (
													<Accordion.Item
														key={header}
														value={header}
														className="overflow-hidden"
													>
														<Accordion.Header className="bg-root-100 rounded-md">
															<Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full py-2 px-4 bg-root-100 hover:bg-root-200/25 rounded-md">
																<span>
																	{header}
																</span>
																<ChevronDownIcon className="AccordionChevron h-5 w-5"></ChevronDownIcon>
															</Accordion.Trigger>
														</Accordion.Header>
														<Accordion.Content className="overflow-hidden bg-root-200 text-neutral-100 px-4 AccordionContent">
															<p
																className="py-2"
																dangerouslySetInnerHTML={{
																	__html: content
																		.replaceAll(
																			"\n",
																			"<br/>",
																		)
																		.trim(),
																}}
															></p>
														</Accordion.Content>
													</Accordion.Item>
												);
											},
										)}
									</Accordion.Root>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</LayoutNoContainer>
	);
}

export default Rules;
