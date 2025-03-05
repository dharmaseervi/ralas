"use client"
import type React from "react"
import { useState } from "react"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function BookAppointment() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: new Date(),
    time: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    console.log(`Selected ${id}: ${value}`)
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: any) => {
    console.log(`Selected ${name}: ${value}`)
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      // Reset after showing success
      setTimeout(() => {
        setSuccess(false)
        setOpen(false)
        setStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          time: "",
          notes: "",
          date: new Date(),
        })
      }, 2000)
    }, 1500)
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const services = [
    { value: "speech-therapy", label: "Speech Therapy" },
    { value: "hearing-test", label: "Hearing Test" },
    { value: "hearing-aid-fitting", label: "Hearing Aid Fitting" },
    { value: "language-therapy", label: "Language Therapy" },
    { value: "consultation", label: "Initial Consultation" },
  ]

  const timeSlots = [
    { value: "9:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Appointment Booked!</h2>
              <p className="text-muted-foreground mb-6">We'll send a confirmation to your email shortly.</p>
              <Button
                onClick={() => {
                  setSuccess(false)
                  setOpen(false)
                  setStep(1)
                }}
              >
                Done
              </Button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center justify-between bg-primary/5 p-6 border-b">
                <div>
                  <DialogTitle className="text-xl font-bold">Book Your Appointment</DialogTitle>
                  <DialogDescription className="mt-1">
                    Schedule a visit with Ralas Speech and Hearing specialists
                  </DialogDescription>
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-colors",
                        step >= i ? "bg-primary" : "bg-gray-200",
                      )}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="font-medium text-lg">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="font-medium text-lg">Service Details</h3>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service type</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                          required
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Preferred date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.date ? format(formData.date, "PPP") : "Select a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.date}
                              onSelect={(value) => handleSelectChange("date", value)}
                        
                              initialFocus
                              disabled={(date) => {
                                const day = date.getDay()
                                const today = new Date()
                                today.setHours(0, 0, 0, 0)
                                return day === 0 || day === 6 || date < today
                              }}
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred time</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => handleSelectChange("time", value)}
                          required
                        >
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="font-medium text-lg">Additional Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Special requests or concerns</Label>
                        <Textarea
                          id="notes"
                          placeholder="Please share any specific concerns or requirements"
                          className="resize-none min-h-[100px]"
                          value={formData.notes}
                          onChange={handleChange}
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                        <h4 className="font-medium">Appointment Summary</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-muted-foreground">Name:</div>
                          <div>
                            {formData.firstName} {formData.lastName}
                          </div>

                          <div className="text-muted-foreground">Service:</div>
                          <div>{services.find((s) => s.value === formData.service)?.label}</div>

                          <div className="text-muted-foreground">Date:</div>
                          <div>{formData.date ? format(formData.date, "PPP") : "Not selected"}</div>

                          <div className="text-muted-foreground">Time:</div>
                          <div>{timeSlots.find((t) => t.value === formData.time)?.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                  ) : (
                    <div></div> // Empty div for spacing
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (step === 1 &&
                          (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) ||
                        (step === 2 && (!formData.service || !formData.time))
                      }
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <div className="flex items-center">
                          <div className="h-4 w-4 mr-2 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                          Processing
                        </div>
                      ) : (
                        "Book Appointment"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

