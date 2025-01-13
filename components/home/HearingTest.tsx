'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { AlertCircle, VolumeX, Volume1, Volume2 } from 'lucide-react'

const frequencyRanges = [
  { name: 'Low', min: 125, max: 500, test: 250 },
  { name: 'Mid-Low', min: 500, max: 1000, test: 750 },
  { name: 'Mid', min: 1000, max: 2000, test: 1500 },
  { name: 'Mid-High', min: 2000, max: 4000, test: 3000 },
  { name: 'High', min: 4000, max: 8000, test: 6000 },
]

export default function HearingTest() {
  const [frequency, setFrequency] = useState(1000)
  const [volume, setVolume] = useState(50)
  const [isPlaying, setIsPlaying] = useState(false)
  const [testResult, setTestResult] = useState<Record<string, number | null>>({})
  const [currentTest, setCurrentTest] = useState(0)
  const [showInstructions, setShowInstructions] = useState(true)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (currentTest < frequencyRanges.length) {
      setFrequency(frequencyRanges[currentTest].test)
    }
  }, [currentTest])

  useEffect(() => {
    if (isPlaying && analyser && canvasRef.current) {
      const canvas = canvasRef.current
      const canvasCtx = canvas.getContext('2d')
      if (!canvasCtx) return

      const bufferLength = analyser.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      const draw = () => {
        animationRef.current = requestAnimationFrame(draw)
        analyser.getByteTimeDomainData(dataArray)

        canvasCtx.fillStyle = 'rgb(200, 220, 255)'
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
        canvasCtx.lineWidth = 2
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)'
        canvasCtx.beginPath()

        const sliceWidth = (canvas.width * 1.0) / bufferLength
        let x = 0

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0
          const y = (v * canvas.height) / 2

          if (i === 0) {
            canvasCtx.moveTo(x, y)
          } else {
            canvasCtx.lineTo(x, y)
          }

          x += sliceWidth
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2)
        canvasCtx.stroke()
      }

      draw()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, analyser])

  const playSound = () => {
    setIsPlaying(true)
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    setAudioContext(ctx)

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    const analyserNode = ctx.createAnalyser()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
    gainNode.gain.setValueAtTime(volume / 100, ctx.currentTime)

    oscillator.connect(gainNode)
    gainNode.connect(analyserNode)
    analyserNode.connect(ctx.destination)

    setAnalyser(analyserNode)

    oscillator.start()
    oscillator.stop(ctx.currentTime + 2)

    setTimeout(() => {
      setIsPlaying(false)
      if (audioContext) {
        audioContext.close()
      }
    }, 2000)
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    if (audioContext) {
      const gainNode = audioContext.createGain()
      gainNode.gain.setValueAtTime(newVolume[0] / 100, audioContext.currentTime)
    }
  }

  const nextTest = () => {
    if (currentTest < frequencyRanges.length) {
      setTestResult(prev => ({ ...prev, [frequencyRanges[currentTest].name]: volume }))
      setCurrentTest(prev => prev + 1)
      setVolume(50)
    }
  }

  const resetTest = () => {
    setTestResult({})
    setCurrentTest(0)
    setVolume(50)
    setShowInstructions(true)
  }

  const getHearingStatus = (volume: number) => {
    if (volume <= 20) return 'Excellent'
    if (volume <= 40) return 'Good'
    if (volume <= 60) return 'Fair'
    if (volume <= 80) return 'Poor'
    return 'Severe Loss'
  }

  const VolumeIcon = volume <= 33 ? VolumeX : volume <= 66 ? Volume1 : Volume2

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800 dark:text-blue-300">Interactive Hearing Test</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          Experience our advanced hearing test that provides real-time feedback and visual representation of sound waves.
        </p>
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {showInstructions ? (
              <motion.div
                key="instructions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Ensure you're in a quiet environment or using headphones.</li>
                  <li>You'll hear a series of tones at different frequencies.</li>
                  <li>Adjust the volume slider until you can just barely hear the tone.</li>
                  <li>Observe the sound wave visualization for additional feedback.</li>
                  <li>Click "Next" to proceed to the next frequency test.</li>
                  <li>Complete all frequency tests for comprehensive results.</li>
                </ol>
                <Button onClick={() => setShowInstructions(false)} className="mt-6 w-full">
                  Start Test
                </Button>
              </motion.div>
            ) : currentTest < frequencyRanges.length ? (
              <motion.div
                key="test"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
                  {frequencyRanges[currentTest].name} Frequency Test ({frequency} Hz)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Adjust the volume until you can just barely hear the tone, then click "Next".
                </p>
                <div className="mb-6">
                  <label className="block mb-2 text-gray-600 dark:text-gray-300">Volume</label>
                  <div className="flex items-center gap-4">
                    <VolumeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[volume]}
                      onValueChange={handleVolumeChange}
                      className="flex-grow"
                    />
                    <span className="text-gray-600 dark:text-gray-300 w-12 text-right">{volume}%</span>
                  </div>
                </div>
                <div className="mb-6">
                  <canvas ref={canvasRef} width="400" height="100" className="w-full h-24 bg-blue-50 dark:bg-blue-900 rounded-lg" />
                </div>
                <Progress value={(currentTest / frequencyRanges.length) * 100} className="mb-6" />
                <div className="flex gap-4">
                  <Button onClick={playSound} disabled={isPlaying} className="flex-1">
                    {isPlaying ? 'Playing...' : 'Play Sound'}
                  </Button>
                  <Button onClick={nextTest} className="flex-1" variant="outline">
                    Next
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Test Results</h3>
                {Object.entries(testResult).map(([range, value]) => (
                  <div key={range} className="mb-4">
                    <p className="font-medium text-gray-700 dark:text-gray-300">{range} Frequency:</p>
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {value !== null ? `${getHearingStatus(value)} (${value}%)` : 'Not Detected'}
                    </p>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    This test provides a general indication of your hearing ability. For a comprehensive evaluation, please consult with our audiologists.
                  </p>
                </div>
                <Button onClick={resetTest} className="w-full mt-6">
                  Retake Test
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

