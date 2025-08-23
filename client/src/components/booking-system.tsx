import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "basic",
    name: "Basic Reading",
    price: 75,
    duration: "30 minutes",
    description: "30-minute consultation covering your sun, moon, and rising signs",
    features: [
      "Personal astrology overview",
      "Current planetary influences",
      "Written summary"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    id: "comprehensive",
    name: "Comprehensive Reading",
    price: 150,
    duration: "60 minutes",
    description: "60-minute deep dive into your complete birth chart",
    features: [
      "Full birth chart analysis",
      "Planetary aspects & houses",
      "2024-2025 forecast",
      "Detailed written report"
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    popular: true
  },
  {
    id: "mastery",
    name: "Mastery Reading",
    price: 275,
    duration: "90 minutes",
    description: "90-minute intensive session with relationship compatibility",
    features: [
      "Complete chart mastery",
      "Synastry compatibility",
      "Life purpose analysis",
      "3-month email support"
    ],
    image: "https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  }
];

const TIME_SLOTS = [
  { time: "10:00 AM - 11:00 AM", available: true },
  { time: "11:30 AM - 12:30 PM", available: true },
  { time: "2:00 PM - 3:00 PM", available: true },
  { time: "3:30 PM - 4:30 PM", available: false },
  { time: "6:00 PM - 7:00 PM", available: false },
  { time: "7:30 PM - 8:30 PM", available: true },
];

const CALENDAR_DAYS = Array.from({ length: 14 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i + 1);
  return {
    date: date.getDate(),
    available: Math.random() > 0.3, // Random availability
    fullDate: date.toISOString().split('T')[0]
  };
});

export default function BookingSystem() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      consultationId: "", // This would come from a previous consultation
      serviceType: "",
      appointmentDate: "",
      appointmentTime: "",
      price: 0,
      notes: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "Your cosmic appointment has been scheduled successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      // Reset form
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Unable to schedule your appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const selectedServiceData = SERVICE_OPTIONS.find(s => s.id === selectedService);

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service.id);
    form.setValue("serviceType", service.id);
    form.setValue("price", service.price);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    form.setValue("appointmentDate", date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    form.setValue("appointmentTime", time);
  };

  const onSubmit = (data: InsertBooking) => {
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Incomplete Selection",
        description: "Please select a service, date, and time before booking.",
        variant: "destructive",
      });
      return;
    }

    // For demo purposes, we'll use a placeholder consultation ID
    createBookingMutation.mutate({
      ...data,
      consultationId: "demo-consultation-id"
    });
  };

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-celestial-300 to-mystical-300 bg-clip-text text-transparent">
            Book Your Cosmic Reading
          </h2>
          <p className="text-cosmic-300 text-lg">
            Choose from our range of astrological services guided by experienced cosmic interpreters
          </p>
        </div>

        {/* Service Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SERVICE_OPTIONS.map((service) => (
            <Card 
              key={service.id}
              className={`bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20 hover:border-celestial-400/40 transition-all cursor-pointer group relative ${
                selectedService === service.id ? 'border-celestial-400 bg-cosmic-800/70' : ''
              }`}
              onClick={() => handleServiceSelect(service)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-celestial-400 to-mystical-400 px-4 py-1 rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-8">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-32 object-cover rounded-xl mb-6" 
                />
                
                <h3 className="text-xl font-serif font-semibold text-celestial-300 mb-3">{service.name}</h3>
                <p className="text-cosmic-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-cosmic-200 text-sm">
                      <span className="w-2 h-2 bg-celestial-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-celestial-400 mb-4">${service.price}</p>
                  <Badge variant={selectedService === service.id ? "default" : "outline"} className="w-full justify-center">
                    {selectedService === service.id ? "Selected" : "Select Reading"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Form */}
        {selectedService && (
          <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-celestial-300 mb-6 text-center">
                Schedule Your {selectedServiceData?.name}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Calendar */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-cosmic-200">Choose Date</h4>
                  <div className="bg-cosmic-800/50 rounded-xl p-4 border border-mystical-500/30">
                    <div className="grid grid-cols-7 gap-2 text-center mb-4">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-cosmic-400 text-sm font-medium">{day}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {CALENDAR_DAYS.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => day.available && handleDateSelect(day.fullDate)}
                          disabled={!day.available}
                          className={`w-8 h-8 rounded text-sm transition-colors ${
                            day.available
                              ? selectedDate === day.fullDate
                                ? 'bg-celestial-400 text-cosmic-950'
                                : 'hover:bg-celestial-400/20'
                              : 'opacity-50 cursor-not-allowed'
                          }`}
                        >
                          {day.date}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-cosmic-200">Available Times</h4>
                  <div className="space-y-3">
                    {TIME_SLOTS.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`w-full text-left bg-cosmic-800/50 rounded-xl p-3 border transition-all ${
                          slot.available
                            ? selectedTime === slot.time
                              ? 'border-celestial-400 bg-celestial-400/10'
                              : 'border-mystical-500/30 hover:border-celestial-400/40'
                            : 'border-cosmic-600 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={slot.available ? "text-cosmic-200" : "text-cosmic-400"}>
                            {slot.time}
                          </span>
                          <span className={`text-sm ${slot.available ? "text-celestial-400" : "text-cosmic-500"}`}>
                            {slot.available ? "Available" : "Booked"}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-cosmic-200">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            className="bg-cosmic-800/50 border-mystical-500/30 text-white placeholder-cosmic-400 focus:border-celestial-400 focus:ring-celestial-400/20"
                            placeholder="Any specific questions or areas you'd like to focus on during your reading..."
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Booking Summary */}
                  {selectedDate && selectedTime && (
                    <div className="bg-cosmic-800/30 rounded-xl p-6 border border-mystical-500/20">
                      <h4 className="text-lg font-semibold text-celestial-300 mb-4">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-cosmic-400">Service:</span>
                          <span className="text-cosmic-200">{selectedServiceData?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cosmic-400">Duration:</span>
                          <span className="text-cosmic-200">{selectedServiceData?.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cosmic-400">Date:</span>
                          <span className="text-cosmic-200">{new Date(selectedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cosmic-400">Time:</span>
                          <span className="text-cosmic-200">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between border-t border-mystical-500/20 pt-2 mt-2">
                          <span className="text-cosmic-300 font-semibold">Total:</span>
                          <span className="text-celestial-400 font-bold text-lg">${selectedServiceData?.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Final Booking Button */}
                  <div className="text-center">
                    <Button 
                      type="submit"
                      disabled={!selectedDate || !selectedTime || createBookingMutation.isPending}
                      className="bg-gradient-to-r from-celestial-500 to-mystical-500 hover:from-celestial-400 hover:to-mystical-400 px-12 py-4 text-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {createBookingMutation.isPending ? "Confirming..." : "Confirm Cosmic Appointment"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
