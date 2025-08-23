interface Translations {
  consultation: {
    title: string;
    description: string;
    summary: string;
    submitted: string;
    submitSuccess: string;
    submitError: string;
    error: string;
  };
  form: {
    personalInfo: string;
    name: string;
    namePlaceholder: string;
    birthDate: string;
    birthTime: string;
    timeUnknown: string;
    birthPlace: string;
    birthPlacePlaceholder: string;
    gender: string;
    male: string;
    female: string;
    other: string;
    preferNotToSay: string;
    currentCity: string;
    currentCityPlaceholder: string;
    contactInfo: string;
    contactEmail: string;
    contactPhone: string;
    phonePlaceholder: string;
    topicsOfInterest: string;
    selectTopics: string;
    questions: string;
    questionsPlaceholder: string;
    charactersRemaining: string;
    additionalInfo: string;
    relationshipStatus: string;
    occupation: string;
    occupationPlaceholder: string;
    industry: string;
    industryPlaceholder: string;
    timeline: string;
    budget: string;
    budgetPlaceholder: string;
    urgency: string;
    attachments: string;
    attachmentsPlaceholder: string;
    consent: string;
    consentText: string;
    required: string;
    selectOption: string;
    notEntered: string;
    submit: string;
    submitting: string;
    copy: string;
    copied: string;
    download: string;
    downloaded: string;
    reset: string;
    incomplete: string;
    incompleteDesc: string;
    incompleteWarning: string;
  };
  clipboard: {
    error: string;
    errorDesc: string;
  };
}

const translations: Record<"en" | "my", Translations> = {
  en: {
    consultation: {
      title: "Personal Astrology Consultation",
      description: "Share your cosmic details to receive a personalized astrological reading that illuminates your path",
      summary: "Astrology Consultation Summary",
      submitted: "Consultation Submitted",
      submitSuccess: "Your consultation request has been received successfully.",
      submitError: "There was an error submitting your consultation. Please try again.",
      error: "Error"
    },
    form: {
      personalInfo: "Personal Information",
      name: "Full Name",
      namePlaceholder: "Enter your celestial name",
      birthDate: "Birth Date",
      birthTime: "Birth Time",
      timeUnknown: "Unknown",
      birthPlace: "Birth Place",
      birthPlaceholder: "City, Country",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      preferNotToSay: "Prefer not to say",
      currentCity: "Current City",
      currentCityPlaceholder: "e.g. New York",
      contactInfo: "Contact Information",
      contactEmail: "Email Address",
      contactPhone: "Phone Number",
      phonePlaceholder: "e.g. +1234567890",
      topicsOfInterest: "Areas of Interest",
      selectTopics: "Select at least one topic",
      questions: "Your Cosmic Questions",
      questionsPlaceholder: "Share your specific questions about your cosmic journey...",
      charactersRemaining: "Characters remaining",
      additionalInfo: "Additional Information (Optional)",
      relationshipStatus: "Relationship Status",
      occupation: "Occupation",
      occupationPlaceholder: "Network Technician, Student, Entrepreneur",
      industry: "Industry",
      industryPlaceholder: "IT, Banking, Education, Healthcare",
      timeline: "Timeline",
      budget: "Budget/Consultation Fee",
      budgetPlaceholder: "Enter amount if you have a budget limit",
      urgency: "Urgency Level",
      attachments: "Additional Files/Links",
      attachmentsPlaceholder: "e.g. Google Drive/OneDrive link",
      consent: "Privacy & Consent",
      consentText: "I agree to share my information for astrological consultation purposes",
      required: "Required",
      selectOption: "Select an option",
      notEntered: "Not entered yet",
      submit: "Begin Cosmic Reading",
      submitting: "Submitting...",
      copy: "Copy Summary",
      copied: "Copied!",
      download: "Download JSON",
      downloaded: "Downloaded!",
      reset: "Reset Form",
      incomplete: "Form Incomplete",
      incompleteDesc: "Please fill in all required fields before submitting.",
      incompleteWarning: "Note: *Required fields are not complete*"
    },
    clipboard: {
      error: "Copy Failed",
      errorDesc: "Unable to copy to clipboard. Please check your browser settings."
    }
  },
  my: {
    consultation: {
      title: "ကိုယ်ပိုင်ဗေဒင်မေးမြန်းမှု",
      description: "သင့်ရဲ့ စကြဝဠာဆိုင်ရာ အသေးစိတ်အချက်အလက်များကို မျှဝေပြီး သင့်လမ်းကြောင်းကို လင်းလက်စေမည့် ကိုယ်ပိုင်ဗေဒင်ဖတ်ခြင်းကို လက်ခံရယူပါ",
      summary: "ဗေဒင်မေးမြန်းမှု အချက်အလက် စုစည်းချက်",
      submitted: "မေးမြန်းမှု တင်ပြီး",
      submitSuccess: "သင့်မေးမြန်းမှုကို အောင်မြင်စွာ လက်ခံရရှိပါပြီ။",
      submitError: "သင့်မေးမြန်းမှု တင်သွင်းရာတွင် အမှားအယွင်း ဖြစ်ပွားခဲ့သည်။ ကျေးဇူးပြု၍ ထပ်လုပ်ကြည့်ပါ။",
      error: "အမှားအယွင်း"
    },
    form: {
      personalInfo: "မွန်မြတ်သော အခြေခံအချက်အလက်",
      name: "အမည်",
      namePlaceholder: "ဥပမာ - အာကာစိုး",
      birthDate: "မွေးသက္ကရာဇ်",
      birthTime: "မွေးချိန်",
      timeUnknown: "မသိ",
      birthPlace: "မွေးရပ်ဇာတိ/မြို့/နိုင်ငံ",
      birthPlaceholder: "ဥပမာ - ပျဉ်းမနား၊ မြန်မာ",
      gender: "လိင်",
      male: "ကျား",
      female: "မ",
      other: "အခြား",
      preferNotToSay: "မပြောလို",
      currentCity: "လက်ရှိနေထိုင်ရာမြို့/တိုင်း",
      currentCityPlaceholder: "ဥပမာ - ရန်ကုန်",
      contactInfo: "ဆက်သွယ်ရန်",
      contactEmail: "အီးမေးလ်",
      contactPhone: "ဖုန်းနံပါတ်",
      phonePlaceholder: "09xxxxxxxxx",
      topicsOfInterest: "မေးလိုသည့် အဓိကအကြောင်းအရာ",
      selectTopics: "အနည်းဆုံး အကြောင်းအရာ ၁ ခုကို ရွေးပါ",
      questions: "အသေးစိတ်မေးခွန်းများ",
      questionsPlaceholder: "ဥပမာ: ၂၀၂၅ ခုနှစ်တွင် အလုပ်ပြောင်းသင့်/မသင့်၊ ဘယ်လအထိ စောင့်သင့်သလဲ...",
      charactersRemaining: "လက်ရှိကျန်ဆုံး စာလုံး",
      additionalInfo: "နောက်ခံအချက်အလက် (ပြောချင်လျှင်သာ)",
      relationshipStatus: "အိမ်ထောင်ရေးအခြေအနေ",
      occupation: "အလုပ်အကိုင်",
      occupationPlaceholder: "Network Technician, Student, Entrepreneur",
      industry: "လုပ်ငန်းခွင်",
      industryPlaceholder: "IT, Banking, Education, Healthcare",
      timeline: "အချိန်ကာလ",
      budget: "ဘတ်ဂျက်/ဆက်သွယ်ကြေး (ကျပ်/ဒေါ်လာ)",
      budgetPlaceholder: "အကန့်အသတ်ရှိပါက ထိုးထည့်ပါ",
      urgency: "အရေးပေါ်အဆင့်",
      attachments: "ထပ်ဆောင်း ဖိုင်/လင့်ခ်",
      attachmentsPlaceholder: "ဥပမာ - Google Drive/OneDrive link",
      consent: "Privacy & Consent",
      consentText: "အချက်အလက်များကို သဘောတူညီချက်ဖြင့် ပေးပို့ရန် သဘောတူပါသည်",
      required: "လိုအပ်",
      selectOption: "ရွေးချယ်ပါ",
      notEntered: "မထည့်ရသေး",
      submit: "ကော်ပီပြီး မေးမည်",
      submitting: "တင်နေသည်...",
      copy: "အကျဉ်းချုပ် ကော်ပီ",
      copied: "ကော်ပီပြီး",
      download: "JSON ဒေါင်းလုဒ်",
      downloaded: "ဒေါင်းလုဒ်ပြီး",
      reset: "ပြန်လည်ဖျက်မယ်",
      incomplete: "ဖောင်မပြည့်စုံ",
      incompleteDesc: "လိုအပ်သောအချက်အလက်များကို စုံစမ်းပြီးဖြည့်ပါ။",
      incompleteWarning: "သတိပြုရန်: *လိုအပ်ချက်များ မပြည့်စုံသေးပါ*"
    },
    clipboard: {
      error: "ကော်ပီမရနိုင်ပါ",
      errorDesc: "Browser အားပြင်ဆင်ပါ။"
    }
  }
};

export function useTranslation(language: "en" | "my") {
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Fallback to English if translation not found
          value = translations.en;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = value[fallbackKey];
            } else {
              return key; // Return the key if no translation found
            }
          }
          break;
        }
      }
      
      return typeof value === 'string' ? value : key;
    }
  };
}
