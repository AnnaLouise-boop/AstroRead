import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { TOPIC_OPTIONS, RELATIONSHIP_OPTIONS, TIMELINE_OPTIONS } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export default function AstrologyIntakeForm() {
  const [language, setLanguage] = useState<"en" | "my">("en");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { t } = useTranslation(language);

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      name: "",
      birthDate: "",
      birthTime: "",
      timeUnknown: false,
      birthPlace: "",
      gender: "",
      contactEmail: "",
      contactPhone: "",
      currentCity: "",
      topics: [],
      questions: "",
      relationshipStatus: "",
      occupation: "",
      industry: "",
      timeline: "",
      budget: "",
      urgency: 3,
      attachments: "",
      consent: false,
      language: "en",
    },
  });

  const createConsultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("consultation.submitted"),
        description: t("consultation.submitSuccess"),
      });
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: () => {
      toast({
        title: t("consultation.error"),
        description: t("consultation.submitError"),
        variant: "destructive",
      });
    },
  });

  const watchedValues = form.watch();
  const remaining = 1000 - (watchedValues.questions?.length || 0);

  const topicLabels = useMemo(
    () => watchedValues.topics?.map((t) => TOPIC_OPTIONS.find((x) => x.id === t)?.label[language]).filter(Boolean) || [],
    [watchedValues.topics, language]
  );

  const formattedSummary = useMemo(() => {
    const timeText = watchedValues.timeUnknown ? t("form.timeUnknown") : watchedValues.birthTime || t("form.notEntered");

    const lines = [
      `${t("form.name")}: ${watchedValues.name || "-"}`,
      `${t("form.birthDate")}: ${watchedValues.birthDate || "-"}`,
      `${t("form.birthTime")}: ${timeText}`,
      `${t("form.birthPlace")}: ${watchedValues.birthPlace || "-"}`,
      `${t("form.gender")}: ${watchedValues.gender || "-"}`,
      `${t("form.contactEmail")}: ${watchedValues.contactEmail || "-"}`,
      `${t("form.contactPhone")}: ${watchedValues.contactPhone || "-"}`,
      `${t("form.currentCity")}: ${watchedValues.currentCity || "-"}`,
      `${t("form.topics")}: ${topicLabels.join(", ") || "-"}`,
      `${t("form.questions")}: ${watchedValues.questions || "-"}`,
      `${t("form.relationshipStatus")}: ${watchedValues.relationshipStatus || "-"}`,
      `${t("form.occupation")}: ${watchedValues.occupation || "-"}`,
      `${t("form.industry")}: ${watchedValues.industry || "-"}`,
      `${t("form.timeline")}: ${watchedValues.timeline || "-"}`,
      `${t("form.budget")}: ${watchedValues.budget || "-"}`,
      `${t("form.urgency")}: ${watchedValues.urgency}`,
      `${t("form.attachments")}: ${watchedValues.attachments || "-"}`,
    ];

    return `${t("consultation.summary")}\n----------------------------------\n${lines.join("\n")}`;
  }, [watchedValues, topicLabels, language, t]);

  const required = {
    name: !watchedValues.name,
    birthDate: !watchedValues.birthDate,
    birthPlace: !watchedValues.birthPlace,
    contact: !(watchedValues.contactEmail || watchedValues.contactPhone),
    topics: (watchedValues.topics?.length || 0) === 0,
    consent: !watchedValues.consent,
  };

  const allGood = Object.values(required).every((v) => !v);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(formattedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      toast({
        title: t("clipboard.error"),
        description: t("clipboard.errorDesc"),
        variant: "destructive",
      });
    }
  }

  function downloadJSON() {
    const blob = new Blob([JSON.stringify(watchedValues, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `astrology-intake-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  }

  function onSubmit(data: InsertConsultation) {
    if (!allGood) {
      toast({
        title: t("form.incomplete"),
        description: t("form.incompleteDesc"),
        variant: "destructive",
      });
      return;
    }
    createConsultationMutation.mutate({ ...data, language });
  }

  const errorBadge = (cond: boolean) => (
    <span className={`text-xs px-2 py-0.5 rounded-full ${cond ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"}`}>
      {cond ? t("form.required") : "OK"}
    </span>
  );

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-celestial-300 to-mystical-300 bg-clip-text text-transparent">
            {t("consultation.title")}
          </h2>
          <p className="text-cosmic-300 text-lg max-w-2xl mx-auto">
            {t("consultation.description")}
          </p>
          
          {/* Language Selector */}
          <div className="mt-6 flex justify-center">
            <div className="flex bg-cosmic-800/50 rounded-xl p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  language === "en" 
                    ? "bg-celestial-500 text-cosmic-950" 
                    : "text-cosmic-300 hover:text-celestial-400"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("my")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  language === "my" 
                    ? "bg-celestial-500 text-cosmic-950" 
                    : "text-cosmic-300 hover:text-celestial-400"
                }`}
              >
                မြန်မာ
              </button>
            </div>
          </div>
        </div>

        {/* Progress Constellation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {Object.entries(required).map(([key, isRequired], index) => (
              <div 
                key={key}
                className={`w-3 h-3 rounded-full animate-twinkle ${
                  isRequired ? "bg-rose-400" : "bg-celestial-400"
                }`}
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            ))}
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-celestial-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.personalInfo")}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200 flex items-center gap-2">
                          {t("form.name")} {errorBadge(required.name)}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.namePlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200 flex items-center gap-2">
                          {t("form.birthDate")} {errorBadge(required.birthDate)}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="date"
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white focus:border-celestial-400 focus:ring-celestial-400/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.birthTime")}</FormLabel>
                        <div className="flex gap-3">
                          <FormControl>
                            <Input 
                              {...field}
                              type="time"
                              disabled={form.watch("timeUnknown")}
                              className="flex-1 bg-cosmic-800/50 border-mystical-500/30 text-white focus:border-celestial-400 focus:ring-celestial-400/20"
                            />
                          </FormControl>
                          <FormField
                            control={form.control}
                            name="timeUnknown"
                            render={({ field }) => (
                              <div className="flex items-center space-x-2">
                                <Checkbox 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-mystical-500/30"
                                />
                                <label className="text-cosmic-300 text-sm">{t("form.timeUnknown")}</label>
                              </div>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthPlace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200 flex items-center gap-2">
                          {t("form.birthPlace")} {errorBadge(required.birthPlace)}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.birthPlacePlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.gender")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-cosmic-800/50 border-mystical-500/30 text-white">
                              <SelectValue placeholder={t("form.selectOption")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-cosmic-800 border-mystical-500/30">
                            <SelectItem value="male">{t("form.male")}</SelectItem>
                            <SelectItem value="female">{t("form.female")}</SelectItem>
                            <SelectItem value="other">{t("form.other")}</SelectItem>
                            <SelectItem value="skip">{t("form.preferNotToSay")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="currentCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.currentCity")}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.currentCityPlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-mystical-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.contactInfo")}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200 flex items-center gap-2">
                          {t("form.contactEmail")} {errorBadge(required.contact)}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder="you@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200 flex items-center gap-2">
                          {t("form.contactPhone")} {errorBadge(required.contact)}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="tel"
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.phonePlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Topics Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-celestial-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.topicsOfInterest")}
                </h3>
                
                <FormField
                  control={form.control}
                  name="topics"
                  render={() => (
                    <FormItem>
                      <div className="grid md:grid-cols-3 gap-4">
                        {TOPIC_OPTIONS.map((topic) => (
                          <FormField
                            key={topic.id}
                            control={form.control}
                            name="topics"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={topic.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(topic.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, topic.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== topic.id
                                              )
                                            )
                                      }}
                                      className="border-mystical-500/30"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-cosmic-200 font-normal cursor-pointer">
                                    {topic.label[language]}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-sm flex items-center gap-2 mt-4">
                        {errorBadge(required.topics)} {t("form.selectTopics")}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Questions Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-mystical-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.questions")}
                </h3>
                
                <FormField
                  control={form.control}
                  name="questions"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          {...field}
                          className="w-full min-h-[140px] bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20 resize-none"
                          maxLength={1000}
                          placeholder={t("form.questionsPlaceholder")}
                        />
                      </FormControl>
                      <div className={`text-xs ${remaining < 50 ? "text-rose-600" : "text-cosmic-500"}`}>
                        {t("form.charactersRemaining")}: {remaining}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Additional Information Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-celestial-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.additionalInfo")}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="relationshipStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.relationshipStatus")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-cosmic-800/50 border-mystical-500/30 text-white">
                              <SelectValue placeholder={t("form.selectOption")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-cosmic-800 border-mystical-500/30">
                            {RELATIONSHIP_OPTIONS.map((option) => (
                              <SelectItem key={option.en} value={option.en}>
                                {option[language]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.occupation")}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.occupationPlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.industry")}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.industryPlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.timeline")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-cosmic-800/50 border-mystical-500/30 text-white">
                              <SelectValue placeholder={t("form.selectOption")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-cosmic-800 border-mystical-500/30">
                            {TIMELINE_OPTIONS.map((option) => (
                              <SelectItem key={option.en} value={option.en}>
                                {option[language]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">{t("form.budget")}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="number"
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.budgetPlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">
                          {t("form.urgency")}: {field.value}
                        </FormLabel>
                        <FormControl>
                          <Slider
                            min={1}
                            max={5}
                            step={1}
                            value={[field.value]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="attachments"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-cosmic-200">{t("form.attachments")}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder={t("form.attachmentsPlaceholder")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Consent Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-mystical-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("form.consent")}
                </h3>
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-mystical-500/30"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-cosmic-200 cursor-pointer">
                          {t("form.consentText")}
                        </FormLabel>
                        <div className="flex items-center gap-2">
                          {errorBadge(required.consent)}
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Summary Section */}
            <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-celestial-300 flex items-center">
                  <span className="w-2 h-2 bg-celestial-400 rounded-full mr-3 animate-twinkle"></span>
                  {t("consultation.summary")}
                </h3>
                
                <pre className="bg-cosmic-900 text-cosmic-100 p-4 rounded-xl text-xs whitespace-pre-wrap leading-relaxed">
                  {formattedSummary}
                </pre>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    type="submit"
                    disabled={createConsultationMutation.isPending}
                    className="bg-gradient-to-r from-celestial-600 to-celestial-700 hover:from-celestial-500 hover:to-celestial-600 text-cosmic-950"
                  >
                    {createConsultationMutation.isPending ? t("form.submitting") : t("form.submit")}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={copySummary}
                    className="border-mystical-500/30 text-cosmic-200 hover:bg-mystical-400/10"
                  >
                    {copied ? t("form.copied") : t("form.copy")}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={downloadJSON}
                    className="border-mystical-500/30 text-cosmic-200 hover:bg-mystical-400/10"
                  >
                    {downloaded ? t("form.downloaded") : t("form.download")}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="border-mystical-500/30 text-cosmic-200 hover:bg-mystical-400/10"
                  >
                    {t("form.reset")}
                  </Button>
                </div>

                {!allGood && (
                  <p className="text-sm text-rose-600 mt-4">
                    {t("form.incompleteWarning")}
                  </p>
                )}
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
