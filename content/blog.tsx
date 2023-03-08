import { StaticImageData } from "next/image";
import { PurchaseButtonType } from "../components/PurchaseButton/types";

// Thumbnails
import image1 from "../public/images/blog/1.png";
import image2 from "../public/images/blog/2.png";
import image3 from "../public/images/blog/3.png";
import image4 from "../public/images/blog/coco.jpg";
import image5 from "../public/images/blog/havij.jpg";
import image6 from "../public/images/blog/angoor.jpg";

// Features
import feature1 from "../public/images/blog/feature1.png";

export const purchaseLink: PurchaseButtonType = {
  link: "http://digikala.com",
  label: {
    en: "Buy from Digikala",
    fa: "خرید از دیجی‌کالا",
  },
};

export const blogs: {
  slug: string;
  title: {
    fa: string;
    en: string;
  };
  thumbnail: StaticImageData;
  featureImage: StaticImageData;
  date: {
    fa: string;
    en: string;
  };
  content: {
    fa: string;
    en: string;
  };
}[] = [
  {
    slug: "first-blog-post",
    title: {
      en: "Small Cake, Big Joy",
      fa: "مینی کیک نارگیلی پیکولند",
    },
    thumbnail: image4,
    featureImage: image4,
    date: {
      en: "17 <strong>oct</strong> 2022",
      fa: "15 <strong>اسفند</strong> 1401",
    },
    content: {
      en: `
      <p>Small moments, tiny pieces of memories, and little laughs happening meanwhile are always the biggest joys and delights of everyday life. Seeing a bright smile on your child&rsquo;s little face, having a small piece of chocolate next to your morning coffee, or maybe the little chit chats you have with your friend or favorite colleague on a long heavy day; small moments are big joys, no matter how small they are.</p>

<p>What we mean by a little piece of big joy is Pikoland mini cakes which with their flawless size are a great choice for your gatherings, parties, breakfasts, snacks, and all the times you need a big joy with a small size. Pikoland mini cake with coconut flakes is a well-sized cake made of a suitable amount of sugar and other great quality ingredients. Pikoland mini cakes with their fresh softness and real coconut powder are surely going to be the favorite snack for those who love coconut and its taste.</p>

<p>Coconut cake is one the tastiest and most liked caked in the world, what is the main reason for its popularity? Coconut powder. Besides having a great taste accompanying a delightful smell, coconut is rich in vitamins and other minerals, which by having short fat chains help your digestive system work well. Coconut fiber can also have an important role in fulfilling our body&rsquo;s need for fiber exactly like what wheat and barley do. I&rsquo;m not done yet! Iron existing in coconut helps our defense system and has a surprising anti-virus effect. So Pikoland mini-cake is not only a delightful snack but also it&rsquo;s a healthy one great for your body and health rate.</p>

<p>We use real coconut powder to make Pikoland mini-cakes, so it has enough fiber which not only gives them a great taste and smell but also makes them the best choice for a tasty health-friendly snack of your days. Real coconut powder means that the great smell you sense just after opening the packing and the taste you feel after having the first bite and cake doesn&rsquo;t come from any artificial flavoring but it presents the pure sense of tastiness and freshness of real coconut powder. Just close your eyes, take a big bite of your small cake, and welcome the big joyful sense.</p>

<p>&nbsp;</p>

      `,
      fa: `
<p dir="RTL">لحظات کوتاه، خاطره&zwnj;های خیلی کوچیک و خنده&zwnj;ها و لبخندهایی که بینشون اتفاق میفته همه و همه بزرگترین شادی های زندگی روزمرمون هستن. مثل دیدن یه لبخند قشنگ روی صورت کوچیک فرزندمون، شکلات کوچیک کنار قهوه صبحانمون، یا شاید صحبتای کوچیک با دوستا یا همکار مورد علاقمون بین یه روز بلند و خسته کننده کاری؛ فرق نمیکنه چقدر کوچیک باشن، مهم اینه همیشه بیشترین و بزرگترین لذت&zwnj;هارو همراهشون دارن.</p>

<p dir="RTL">شمارو نمیدونم اما لذت&zwnj;های بزرگی که اندازه کوچیکی دارن ما رو یاد مینی&zwnj;کیک&zwnj;های پیکولند میندازن که با اندازه مناسبشون میتونن یه انتخاب فوق&zwnj;العاده برای دورهمی&zwnj;ها، مهمونی&zwnj;ها، صبحانه، میان&zwnj;وعده و همه زمان&zwnj;هایی که دلمون یه میان&zwnj;وعده کم حجم اما پر از طعم و حس خوب میخوایم باشن. مینی&zwnj;کیک پیکولند با طعم نارگیل یه کیک کم حجم با شیرینی متعادل و ساخته&zwnj;شده از بهترین مواد اولیست که با کمک نرمی و تازگی فوق&zwnj;العاده و وجود پودر نارگیل واقعی میتونه میان&zwnj;وعده مورد علاقه&zwnj;ی طرفدارای خوراکی&zwnj;های نارگیلی باشه.</p>

<p dir="RTL">کیک نارگیلی یکی از خوش&zwnj;&zwnj;طعمترین و محبوب ترین کیک های دنیاست، دلیل اصلی این محبوبیت هم پودر نارگیله که علاوه بر طعم و بوی فوق&zwnj;العاده خیلی پرخاصیت و مقویه. نارگیل غنی از ویتامین و مواد معدنیه و چون اسیدهای چرب زنجیره کوتاه داره میتونه به دستگاه گوارش در هضم بقیه غذاها کمک کنه.&nbsp;همچنین فیبر نارگیل مثل &nbsp;فیبر سبوس گندم و سبوس جو مفیده و بخش خیلی مهمی از فیبر بدن رو تامین می&zwnj;کنه. هنوز تموم نشده! آهن موجود در نارگیل دستگاه ایمنی بدن رو هم مقاوم می کنه و تاثیرات ضد ویروسی شگفت انگیزی داره. بنابراین پیکولند فقط یه میان&zwnj;وعده خوش&zwnj;طعم و لذت&zwnj;بخش نیست بلکه یه میان&zwnj;وعده سالمه و میتونه به سلامت بدن شما کمک کنه.</p>

<p dir="RTL">برای ساخت مینی&zwnj;کیک نارگیلی پیکولند از نارگیل واقعی استفاده میشه&nbsp; بنابراین پیکولند نسبت مناسبی از فیبر نارگیل رو داره که نه تنها باعث طعم خوب و بوی عالی اون میشه، بلکه در کنار حجم مناسبش مینی&zwnj;کیک نارگیلی پیکولند رو به میان&zwnj;وعده خوب و سالم تبدیل میکنه. پودر نارگیل واقعی یعنی برای طعم&nbsp; و بوی خوب نارگیل کیک پیکولند خبری از طعم&zwnj;دهنده&zwnj;های مصنوعی نیست و هر کیک تجربه حس خوب طعم تازه و طبیعی نارگیل رو به شما هدیه میده. فقط کافیه چشم&zwnj;هاتون رو ببنید، یه گاز بزرگ از کیک کوچیکتون بزنید و از حس خوب مینی&zwnj;کیک نارگیلی پیکولند لذت ببرید.</p>

`,
    },
  },
  {
    slug: "second-blog-post",
    title: {
      en: "Not only the coolest but here’s the crispiest part of your day\n",
      fa: "پیکولند هویج و دارچین",
    },
    thumbnail: image5,
    featureImage: image5,
    date: {
      en: "17 <strong>oct</strong> 2022",
      fa: "15 <strong>اسفند</strong> 1401",
    },
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat`,
      fa: `<p dir="RTL">خیلی وقتها از بی&zwnj;حوصلگی تا سرحالی فقط یه مرز باریک هست و هیچ کاری و هیچ چیزی مثل یه هُل کوچیک کمک نمی&zwnj;کنه که بیایم اینور مرز و از کسالت دست بکشیم. همین حرکت&zwnj;های کوچیک خیلی وقتها می&zwnj;تونن یه لذت بزرگ به همراه داشته، شبیه خوردن یه پیکولند هویجی! پیکولند همون هُل کوچیکه که مودت رو عوض می&zwnj;کنه. حالا چرا می&zwnj;گم کوچیک؟ بیا تا برات توضیح بدم!</p>

<h2 dir="RTL">آشنایی با پیکولند هویج و دارچین</h2>

<p dir="RTL">پیکولند اسم یه خانواده بزرگ از مینی&zwnj;کیک&zwnj;های برند زرکامه که طعم&zwnj;های بسیار متنوعی داره. یکی از جذاب&zwnj;ترین اون طعم&zwnj;ها هویج و دارچینه. حتما خیلی&zwnj;هاتون با این ترکیب رویایی آشنایی دارین و می&zwnj;دونین که واقعا طعم هویج و عطر دارچین وقتی کنار هم قرار می&zwnj;گیرن حتی یه گازش هم می&zwnj;تونه مود آدم رو تغییر بده. ما هم همین نظر رو داشتیم که با این رسپی مینی&zwnj;کیک تولید کردیم!</p>

<p dir="RTL">این مینی&zwnj;کیک بافت خیلی لطیف و نرمی داره و چون تکه&zwnj;های هویج توش معلومه دیگه لازم نیست که تاکید کنم طعم&zwnj;دهنده&zwnj;هاش طبیعی هستن و شیرینی هویج و عطر دارچین توی این مینی&zwnj;کیک غوغا کرده!</p>

<p dir="RTL">توی تولید پیکولند از هیچ مواد نگهدارنده و افزودنی مصنوعی استفاده نشده و لذتی که از این ترکیب خوشمزه می&zwnj;برید کاملا طبیعیه و همینه که شما رو طرفدار پیکولند می&zwnj;کنه و بعد از اون به بقیه هم پیشنهادش میدین!</p>

<p dir="RTL">یکی دیگه از مزایای این مینی&zwnj;کیک&zwnj;ها اینه که شما رو از خریدن اسلایس&zwnj;های بزرگ کیک معاف می&zwnj;کنه و می&zwnj;تونین همون طعم و کیفیت رو در سایز خیلی کوچیکتر داشته باشین و در کنار چای یا قهوه&zwnj; ازش لذت ببرین.</p>

<p dir="RTL">به همین دلیله که پیکولند به عنوان یه خوراکی خیلی خوب برای پذیرایی هم پیشنهاد می&zwnj;شه به&zwnj;ویژه اگه یه جمع صمیمی و کوچیک باشین که دور هم جمع شدین و می&zwnj;خواین یه اتفاق یا مناسبت قشنگ رو با هم جشن بگیرین. اگه چنین موقعیتی پیش اومد، برای ویژه&zwnj;تر شدن دورهمی&zwnj;تون می&zwnj;تونین کمی خامه هم به عنوان تاپینگ روی مینی&zwnj;کیک سرو کنین واین جشن خودمونی رو خاص&zwnj;تر برگزار کنین.</p>

<h2 dir="RTL">همراهی کیفیت و لذت در پیکولند</h2>

<p dir="RTL">در مینی&zwnj;های کیک&zwnj;های پیکولند به فراخور طعم و مزه&zwnj;، میوه&zwnj;های واقعی به کار رفته تا بالاترین لذت و واقعی&zwnj;ترین مزه رو بهتون هدیه بده. علاوه بر طعم و مزه، بسته&zwnj;بندی هم برای ما بسیار مهمه و معتقدیم نحوه&zwnj;ی ارائه محصول باید طوری باشه که خبر از اسرار درونش هم بده!</p>

<p dir="RTL">پیکولند هویج و دارچین توی دو تا بسته&zwnj;بندی مختلف ارائه شده. اولی بسته&zwnj;بندی سخت&zwnj;تری داره که مقوایی هست و دومی بسته&zwnj;بندی پلاستیکی نرم&zwnj;تر و سبک&zwnj;تری داره. داخل هر بسته پیکولند هویجی هم ۱۶ عدد مینی&zwnj;کیک نرم و لطیف منتظر جشن گرفتن با شما هستن!</p>

<p dir="RTL">یادتون نره که ما منتظر نظرات و بازخوردهای شما درباره تجربه&zwnj;تون از مصرف پیکولند هستیم.</p>
`,
    },
  },
  {
    slug: "third-blog-post",
    title: {
      en: "Not only the coolest but here’s the crispiest part of your day",
      fa: "پیکولند کشمشی",
    },
    thumbnail: image6,
    featureImage: image6,
    date: {
      en: "17 <strong>oct</strong> 2022",
      fa: "15 <strong>اسفند</strong> 1401",
    },
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat`,
      fa: `<p align="right"><span dir="RTL">خاطره&zwnj;ی خوردن نخودچی و کشمش توی خونه&zwnj;ی مادربزرگ و پدربزرگ&zwnj;ها هنوز خیلی قدیمی نشده و هنوزه که هنوز پای ثابت میز پذیرایی این بزرگترهای نازنینه. البته واقعیت اینه که کشمش ردپای پررنگی توی زندگی مردم خاورمیانه داره از استفاده توی انواع غذاهای پلویی تا کیک وشیرینی. خیلی جاها هست که کشمش حضور داره. چرا؟ علتش هم فرهنگیه و هم علمی. ولی مهم اینه که اینقدر این خوراکی محبوب بوده و هست که همیشه حضور پررنگشو حفظ کرده. آخی... شمام یاد عید افتادین؟ آره آخه هم هوا بهاریه و هم خاطراتی که توش شیرینی و کیک کشمشی داریم خیلی&zwnj;هاش مال عیدن. حالا که همه چی آماده&zwnj;ست بریم با یه محصول خوشمزه کشمشی آشنا بشیم؟ بزن که بریم.</span></p>

<h2 dir="RTL">معرفی پیکولند کشمشی</h2>

<p dir="RTL">پیکولند اسم یه خانواده بزرگ مینی&zwnj;کیک از تولیدات کارخونه&zwnj;ی زرکامه که یکی از خاطره&zwnj;انگیز طعم&zwnj;هاش همین طعم معروف کشمشه. توی این مینی&zwnj;کیک&zwnj;های نرم و لطیف همونطور که از هر کیک کشمشی&zwnj; دیگه&zwnj;ای انتظار دارین، دونه&zwnj;های کشمش وجود داره و همه چیز دقیقا همونطوریه که باید باشه!</p>

<p dir="RTL">بافت این مینی&zwnj;کیک بسیار نرم و لطیفه و علاوه بر اینکه بهترین مواد اولیه توی تولیدش به کار رفته، هیچ افزودنی یا طعم&zwnj;دهنده&zwnj;ی مصنوعی نداره. البته که وجود کشمش مرغوب و بسیارباکیفیت توی این محصول واقعا خودش یه تنه همه کارها رو کرده!</p>

<p dir="RTL">شهرت خواص و خوشمزگی کشمش جهانیه و البته که آوازه&zwnj;ی شهرتش از خاورمیانه تا قلب اروپا و اون سر قاره&zwnj;ها شنیده شده. علاوه بر مزه&zwnj;ی خوب، چون این خوراکی در واقع همون انگور خشک شده&zwnj;ست، خیلی از خواص اون رو به صورت فشرده&zwnj;تر داره و از نظر مواد مغذی از انگور غنی&zwnj;تره و چون ما خیلی وقت&zwnj;ها برای میان&zwnj;وعده&zwnj;هامون دنبال مزه&zwnj;ی شیرین هستیم، شیرینی حاصل از کشمش می&zwnj;تونه یکی از سالم&zwnj;ترین انتخابهای ما باشه.</p>

<h2 dir="RTL">فواید استفاده از کشمش در تغذیه روزانه</h2>

<p dir="RTL">این میوه&zwnj;ی خشک&nbsp;سرشار از فیبر، آهن، کلسیم، پتاسیم و سایر مواد مغذی ضروری برای بدن&nbsp;ماست و علاوه براینکه یه منبع خوب برای تامین انرژی روزانه&zwnj;ی بدنه به ارتقای سیستم ایمنی هم کمک زیادی می&zwnj;کنه.</p>

<p dir="RTL">از منظر تاریخی کشمش هم کاربرد درمانی داشته و هم پاداشی بوده برای ورزشکاران برتر در مسابقات!</p>

<p dir="RTL">امروزه خواص و فایده&zwnj;های بیشتری برای خوراکی ریزنقش کشف کردن. مثلا اینکه یه منبع خوب برای بیماران دیابتیه و به کاهش قند و همینطورم فشار خون کمک می&zwnj;کنه.</p>

<p dir="RTL">نشونه&zwnj;های زیادی وجود داره که بخواین مینی&zwnj;کیک&zwnj;های کشمشی پیکولند رو وارد برنامه&zwnj; عصرونه&zwnj;تون بکنین. به ویژه عصرونه&zwnj;های فوری برای روزهای شلوغ چون مینی&zwnj;کیک&zwnj;های پیکولند درسته که یه گاز کوچیکن ولی لذت حاصل ازشون خیلی بزرگه و کل روز شما رو می&zwnj;سازه!&nbsp;</p>
`,
    },
  },
];
