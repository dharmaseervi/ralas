'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { AlertCircle, Volume2, Headphones, Activity, Thermometer, VolumeX, Volume1 } from 'lucide-react'
import * as d3 from 'd3'

const frequencyRanges = [
  { name: 'Low', range: '125-500 Hz', test: 250, color: 'bg-blue-400' },
  { name: 'Mid-Low', range: '500-1k Hz', test: 750, color: 'bg-teal-400' },
  { name: 'Mid', range: '1k-2k Hz', test: 1500, color: 'bg-green-400' },
  { name: 'Mid-High', range: '2k-4k Hz', test: 3000, color: 'bg-yellow-400' },
  { name: 'High', range: '4k-8k Hz', test: 6000, color: 'bg-red-400' },
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
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 mb-4">
            Precision Hearing Assessment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Clinically-inspired audio evaluation with real-time audiogram visualization
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="p-8 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Audiometric Evaluation
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {currentTest + 1} of {frequencyRanges.length} frequency bands
                </p>
              </div>
            </div>

            <div className="relative h-32 mb-8 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-slate-800/30" />
            </div>

            <AnimatePresence mode="wait">
              {showInstructions ? (
                <motion.div
                  key="instructions"
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">
                          Test Preparation Guidelines
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                          <li>Use high-quality headphones in a quiet environment</li>
                          <li>Position yourself 1-2 feet from your device</li>
                          <li>Adjust volume to comfortable listening level</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setShowInstructions(false)}
                    className="w-full py-6 text-lg"
                  >
                    Begin Calibration Test
                  </Button>
                </motion.div>
              ) : currentTest < frequencyRanges.length ? (
                <motion.div
                  key="test"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Frequency Band
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {frequencyRanges[currentTest].range}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${frequencyRanges[currentTest].color}`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Detection Threshold
                          </span>
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {volume} dB HL
                        </span>
                      </div>
                      <Slider
                        value={[volume]}
                        onValueChange={handleVolumeChange}
                        min={0}
                        max={100}
                        step={1}
                        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={playSound}
                        disabled={isPlaying}
                        variant={isPlaying ? 'secondary' : 'default'}
                        className="h-12"
                      >
                        {isPlaying ? 'Emitting Tone...' : 'Test Frequency'}
                      </Button>
                      <Button
                        onClick={nextTest}
                        variant="outline"
                        className="h-12"
                        disabled={currentTest === frequencyRanges.length - 1}
                      >
                        Next Frequency
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Thermometer className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                          Audiogram Summary
                        </h3>
                        {/* Add D3.js audiogram chart here */}
                        <div className="h-48 bg-slate-100 dark:bg-slate-700 rounded-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(testResult).map(([range, value]) => (
                      <div key={range} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{range}</span>
                        <span className={`text-lg font-semibold ${
                          (value || 0) > 50 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {getHearingStatus(value || 0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      This screening doesn't replace professional evaluation. 
                      Our audiologists recommend comprehensive testing every 2 years.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={resetTest}
                      variant="outline"
                      className="h-12"
                    >
                      Recalibrate Test
                    </Button>
                    <Button className="h-12 bg-green-600 hover:bg-green-700">
                      Schedule Consultation
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}