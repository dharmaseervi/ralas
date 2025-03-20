import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from './ui/dialog'
import { Card, CardTitle, CardDescription } from './ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TechnologyCard() {
    return (
        <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
      
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-fit group">
                            Learn About DNN
                            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </DialogTrigger>

                    {/* Modal Content */}
                    <DialogContent className="max-w-2xl">
                        <DialogTitle className="text-xl">Deep Neural Network (DNN)</DialogTitle>
                        <DialogDescription className="text-primary">
                            A breakthrough technology trained with 12 million real-world sound scenes, delivering exceptional hearing experiences.
                        </DialogDescription>

                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                            <Image
                                src="/images/dnn.jpg"
                                alt="Neural network technology"
                                fill
                                className="object-cover rounded-md"
                            />
                        </AspectRatio>

                        <p className="text-sm mt-4">
                            The Deep Neural Network (DNN) inside our technology allows for better noise suppression, improved speech recognition, and automatic adaptation to different sound environments. This results in a natural, immersive listening experience.
                        </p>

                        {/* Optional: Link to a full page */}
                        <Button variant="default" className="w-full mt-4">
                            Read More
                        </Button>
                    </DialogContent>
                </Dialog>
        
        </motion.div>
    )
}
