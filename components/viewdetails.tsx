import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { ChevronRight, Bluetooth, BatteryCharging, Phone } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Viewdetails() {
    return (
        <div className='w-full'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full group">
                        View Details
                        <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </DialogTrigger>

                <DialogContent className="max-w-4xl grid md:grid-cols-2 gap-8">
                    {/* Product Visuals */}
                    <div className="space-y-4">
                        <AspectRatio ratio={1} className="bg-muted rounded-lg">
                            <Image
                                src="/images/oticon-3.png"
                                alt="Oticon Opn S hearing aid 360 view"
                                fill
                                className="object-contain"
                            />
                        </AspectRatio>
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((num) => (
                                <AspectRatio key={num} ratio={1}>
                                    <Image
                                        src={`/images/oticon-detail-${num}.jpg`}
                                        alt={`Feature ${num}`}
                                        fill
                                        className="object-cover rounded-md cursor-pointer"
                                    />
                                </AspectRatio>
                            ))}
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="space-y-4">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Oticon Opn S™</DialogTitle>
                            <DialogDescription className="text-primary">
                                Open Sound Experience
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <h4 className="font-medium flex items-center gap-2">
                                        <Bluetooth className="w-4 h-4" /> Connectivity
                                    </h4>
                                    <p className="text-sm">Bluetooth 4.2, Made for iPhone</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium flex items-center gap-2">
                                        <BatteryCharging className="w-4 h-4" /> Battery
                                    </h4>
                                    <p className="text-sm">Up to 72 hours (Size 13 battery)</p>
                                </div>
                            </div>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="features">
                                    <AccordionTrigger>Key Features</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 list-disc pl-4">
                                            <li>OpenSound Navigator™ for speech clarity</li>
                                            <li>BrainHearing™ technology</li>
                                            <li>Direct streaming to iOS devices</li>
                                            <li>Tinnitus SoundSupport™</li>
                                            <li>Water and dust resistant (IP68 rating)</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="specs">
                                    <AccordionTrigger>Technical Specifications</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="font-medium">Frequency Range</p>
                                                <p>150 Hz - 8 kHz</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Gain</p>
                                                <p>Up to 42 dB</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Noise Reduction</p>
                                                <p>12 channels</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Weight</p>
                                                <p>1.3 grams (per aid)</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="bg-primary/10 p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Why Choose Opn S?</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>✓ 360° sound awareness technology</li>
                                    <li>✓ Automatic environment adaptation</li>
                                    <li>✓ Discreet, comfortable design</li>
                                    <li>✓ Rechargeable options available</li>
                                </ul>
                            </div>

                            <Button className="w-full" size="lg">
                                <Phone className="w-4 h-4 mr-2" />
                                Schedule Fitting Appointment
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}
