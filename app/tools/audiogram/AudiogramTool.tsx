"use client"

import { useState, useEffect, useRef, useCallback } from "react"

// ── Constants ──────────────────────────────────────────────────────────────
const FREQS = [250, 500, 1000, 2000, 3000, 4000, 6000, 8000]
const REFLEX_FREQS = [500, 1000, 2000, 4000]
const GRAPH_FREQS = [125, 250, 500, 1000, 2000, 3000, 4000, 6000, 8000]

const ROWS = [
  { key: "r-ac-u", label: "Right  AC Unmasked", ear: "r", sub: false, sep: false },
  { key: "r-ac-m", label: "Right  AC Masked",   ear: "r", sub: true,  sep: false },
  { key: "r-bc-u", label: "Right  BC Unmasked", ear: "r", sub: true,  sep: false },
  { key: "r-bc-m", label: "Right  BC Masked",   ear: "r", sub: true,  sep: false },
  { key: "l-ac-u", label: "Left    AC Unmasked", ear: "l", sub: false, sep: true },
  { key: "l-ac-m", label: "Left    AC Masked",   ear: "l", sub: true,  sep: false },
  { key: "l-bc-u", label: "Left    BC Unmasked", ear: "l", sub: true,  sep: false },
  { key: "l-bc-m", label: "Left    BC Masked",   ear: "l", sub: true,  sep: false },
]

const SYMPTOMS = [
  "Ear Block-R","Ear Block-L","Ear Block-B",
  "Ear Pain-R","Ear Pain-L","Ear Pain-B",
  "Ear Discharge-R","Ear Discharge-L","Ear Discharge-B",
  "Hearing Loss-R","Hearing Loss-L","Hearing Loss-B",
  "Tinnitus-R","Tinnitus-L","Tinnitus-B",
  "Aural Fullness-R","Aural Fullness-L","Aural Fullness-B",
  "Hyperacusis-R","Hyperacusis-L",
  "Vertigo+","Trauma-R","Trauma-L",
  "Speech in Noise-","Speech in Noise+",
  "Speech in Quiet-","Speech in Quiet+",
]

type AudioMap = Record<string, Record<number, string>>
type ReflexMap = Record<string, Record<number, string>>

interface ToolState {
  op: string; date: string; caseType: string; patientType: string
  name: string; age: string; phone: string; address: string
  refBy: string; occupation: string; complaint: string
  symptoms: string[]
  progression: string; duration: string; onset: string; earFavoured: string
  entFindings: string; medHistory: string
  audio: AudioMap
  srtR: string; srtL: string; sdsR: string; sdsL: string
  mclR: string; mclL: string; uclR: string; uclL: string
  wb250: string; wb500: string; wb1k: string; wb2k: string
  reflex: ReflexMap
  tyR: string; tyL: string
  tyREcv: string; tyRMep: string; tyRSc: string; tyRGrad: string
  tyLEcv: string; tyLMep: string; tyLSc: string; tyLGrad: string
  diagR: string; diagL: string; rec: string; comments: string
}

function makeInitialAudio(): AudioMap {
  const m: AudioMap = {}
  ROWS.forEach(r => { m[r.key] = {}; FREQS.forEach(f => { m[r.key][f] = "" }) })
  return m
}
function makeInitialReflex(): ReflexMap {
  const m: ReflexMap = {}
  const cols = ["r-ipsi","r-contra","l-ipsi","l-contra"]
  cols.forEach(c => { m[c] = {}; REFLEX_FREQS.forEach(f => { m[c][f] = "" }) })
  return m
}

const INITIAL: ToolState = {
  op:"",date:"",caseType:"New Case",patientType:"Outpatient",
  name:"",age:"",phone:"",address:"",refBy:"",occupation:"",complaint:"",
  symptoms:[],
  progression:"",duration:"",onset:"",earFavoured:"",
  entFindings:"",medHistory:"",
  audio: makeInitialAudio(),
  srtR:"",srtL:"",sdsR:"",sdsL:"",mclR:"",mclL:"",uclR:"",uclL:"",
  wb250:"",wb500:"",wb1k:"",wb2k:"",
  reflex: makeInitialReflex(),
  tyR:"",tyL:"",
  tyREcv:"",tyRMep:"",tyRSc:"",tyRGrad:"",
  tyLEcv:"",tyLMep:"",tyLSc:"",tyLGrad:"",
  diagR:"",diagL:"",rec:"",comments:"",
}

// ── SVG drawing ───────────────────────────────────────────────────────────
const SL=46,ST=32,SR=12,SB=24,SW=320,SH=330
const PW=SW-SL-SR, PH=SH-ST-SB

function xf(freq: number) { return SL+(Math.log2(freq/125)/Math.log2(64))*PW }
function yf(db: string | number | null) {
  if(db===null||db===""||isNaN(Number(db))) return null
  const v=Math.max(-10,Math.min(120,Number(db)))
  return ST+((v+10)/130)*PH
}

function drawGraph(
  svgEl: SVGSVGElement,
  acU: Record<number,string>, bcU: Record<number,string>,
  acM: Record<number,string>, bcM: Record<number,string>,
  ear: "r"|"l"
) {
  const col = ear==="r" ? "#dc2626" : "#1d4ed8"
  const colA = ear==="r" ? "rgba(220,38,38,.12)" : "rgba(29,78,216,.12)"
  const ns = "http://www.w3.org/2000/svg"
  svgEl.innerHTML = ""

  const e = (tag: string, attrs: Record<string,string|number>, text?: string) => {
    const el = document.createElementNS(ns, tag)
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k, String(v))
    if (text !== undefined) el.textContent = text
    return el
  }

  svgEl.appendChild(e("rect",{x:0,y:0,width:SW,height:SH,fill:"#fff"}))
  svgEl.appendChild(e("rect",{x:SL,y:ST,width:PW,height:PH,fill:"#f9fafb",stroke:"#e2e6ea","stroke-width":.6}))

  const ny0=yf(0), ny25=yf(25)
  if(ny0&&ny25) svgEl.appendChild(e("rect",{x:SL,y:ny0,width:PW,height:ny25-ny0,fill:"rgba(5,150,105,.07)"}))

  for(let db=0;db<=120;db+=10){
    const y=yf(db); if(!y) continue
    const major=db%20===0
    svgEl.appendChild(e("line",{x1:SL,y1:y,x2:SL+PW,y2:y,stroke:major?"#c0c8d2":"#e8ecf0","stroke-width":major?.65:.3}))
    svgEl.appendChild(e("text",{x:SL-4,y:y+3.5,"font-size":"9.5",fill:"#6b7280","text-anchor":"end","font-family":"Inter,sans-serif"},`${db}`))
  }

  GRAPH_FREQS.forEach(f=>{
    const x=xf(f)
    const main=[125,250,500,1000,2000,4000,8000].includes(f)
    svgEl.appendChild(e("line",{x1:x,y1:ST,x2:x,y2:ST+PH,stroke:main?"#c0c8d2":"#dde3ea","stroke-width":main?.65:.3,"stroke-dasharray":main?"none":"4,3"}))
    if(main){
      const lbl=f>=1000?f/1000+"K":`${f}`
      svgEl.appendChild(e("text",{x,y:ST+PH+15,"font-size":"9.5",fill:"#374151","text-anchor":"middle","font-family":"Inter,sans-serif","font-weight":"600"},lbl))
    }
  })

  if(ny0) svgEl.appendChild(e("text",{x:SL+4,y:ny0-3,"font-size":"8",fill:"rgba(5,150,105,.55)","font-family":"Inter,sans-serif"},"Normal"))
  svgEl.appendChild(e("text",{x:0,y:0,transform:`rotate(-90) translate(-${ST+PH/2},${SL-32})`,"font-size":"9","font-weight":"700",fill:"#94a3b8","text-anchor":"middle","font-family":"Inter,sans-serif","letter-spacing":"1"},"dBHL"))
  svgEl.appendChild(e("text",{x:SL+PW/2,y:ST+PH+24,"font-size":"8","font-weight":"700",fill:"#94a3b8","text-anchor":"middle","font-family":"Inter,sans-serif","letter-spacing":"1"},"Hertz"))

  function drawSeries(data: Record<number,string>, dashed: boolean, symFn: (x:number,y:number)=>void) {
    let prev: {x:number,y:number}|null=null
    FREQS.forEach(f=>{
      const y=yf(data[f]); const x=xf(f)
      if(y===null){prev=null;return}
      if(prev) svgEl.appendChild(e("line",{x1:prev.x,y1:prev.y,x2:x,y2:y,stroke:col,"stroke-width":dashed?1.1:2,"stroke-dasharray":dashed?"5,3.5":"none","stroke-linecap":"round","stroke-linejoin":"round"}))
      symFn(x,y); prev={x,y}
    })
  }

  if(Object.values(acU).some(v=>v!=="")) {
    drawSeries(acU,false,(x,y)=>{
      svgEl.appendChild(e("circle",{cx:x,cy:y,r:7,fill:colA,stroke:"none"}))
      if(ear==="r"){
        svgEl.appendChild(e("circle",{cx:x,cy:y,r:5.5,fill:"white",stroke:col,"stroke-width":2.2}))
      } else {
        const s=5
        svgEl.appendChild(e("line",{x1:x-s,y1:y-s,x2:x+s,y2:y+s,stroke:col,"stroke-width":2.2,"stroke-linecap":"round"}))
        svgEl.appendChild(e("line",{x1:x+s,y1:y-s,x2:x-s,y2:y+s,stroke:col,"stroke-width":2.2,"stroke-linecap":"round"}))
      }
    })
  }

  if(Object.values(bcU).some(v=>v!=="")) {
    drawSeries(bcU,true,(x,y)=>{
      const s=5.5
      if(ear==="r"){
        svgEl.appendChild(e("line",{x1:x+s,y1:y-s,x2:x-s,y2:y,stroke:col,"stroke-width":1.8,"stroke-linecap":"round",opacity:.85}))
        svgEl.appendChild(e("line",{x1:x-s,y1:y,x2:x+s,y2:y+s,stroke:col,"stroke-width":1.8,"stroke-linecap":"round",opacity:.85}))
      } else {
        svgEl.appendChild(e("line",{x1:x-s,y1:y-s,x2:x+s,y2:y,stroke:col,"stroke-width":1.8,"stroke-linecap":"round",opacity:.85}))
        svgEl.appendChild(e("line",{x1:x+s,y1:y,x2:x-s,y2:y+s,stroke:col,"stroke-width":1.8,"stroke-linecap":"round",opacity:.85}))
      }
    })
  }

  if(Object.values(acM).some(v=>v!=="")) {
    drawSeries(acM,true,(x,y)=>{
      svgEl.appendChild(e("rect",{x:x-4.5,y:y-4.5,width:9,height:9,fill:"white",stroke:col,"stroke-width":1.8,opacity:.8,rx:"1"}))
    })
  }

  // Legend
  const lx=SL+4, ly=ST+8
  svgEl.appendChild(e("circle",{cx:lx+6,cy:ly,r:5,fill:"white",stroke:col,"stroke-width":2}))
  svgEl.appendChild(e("text",{x:lx+15,y:ly+4,"font-size":"9",fill:col,"font-family":"Inter,sans-serif","font-weight":"500"},"AC-U"))
  const bx=lx+54, s2=4
  if(ear==="r"){
    svgEl.appendChild(e("line",{x1:bx+s2,y1:ly-s2,x2:bx-s2,y2:ly,stroke:col,"stroke-width":1.5,"stroke-linecap":"round",opacity:.85}))
    svgEl.appendChild(e("line",{x1:bx-s2,y1:ly,x2:bx+s2,y2:ly+s2,stroke:col,"stroke-width":1.5,"stroke-linecap":"round",opacity:.85}))
  } else {
    svgEl.appendChild(e("line",{x1:bx-s2,y1:ly-s2,x2:bx+s2,y2:ly,stroke:col,"stroke-width":1.5,"stroke-linecap":"round",opacity:.85}))
    svgEl.appendChild(e("line",{x1:bx+s2,y1:ly,x2:bx-s2,y2:ly+s2,stroke:col,"stroke-width":1.5,"stroke-linecap":"round",opacity:.85}))
  }
  svgEl.appendChild(e("text",{x:bx+10,y:ly+4,"font-size":"9",fill:col,"font-family":"Inter,sans-serif","font-weight":"500",opacity:.85},"BC-U"))
}

// ── Helpers ───────────────────────────────────────────────────────────────
function calcPTA(ac: Record<number,string>) {
  const pts=[500,1000,2000].map(f=>ac[f]).filter(v=>v!==""&&!isNaN(Number(v))).map(Number)
  if(!pts.length) return null
  return Math.round(pts.reduce((a,b)=>a+b,0)/pts.length*2)/2
}

function classifyHL(pta: number|null) {
  if(pta===null) return "—"
  if(pta<=25)  return "Normal Hearing"
  if(pta<=40)  return "Mild Hearing Loss"
  if(pta<=55)  return "Moderate Hearing Loss"
  if(pta<=70)  return "Moderately Severe HL"
  if(pta<=90)  return "Severe Hearing Loss"
  if(pta<=119) return "Profound Hearing Loss"
  return "Complete Hearing Loss"
}

function formatDate(d: string) {
  if(!d) return "—"
  const [y,m,day]=d.split("-")
  const M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return `${+day} ${M[+m-1]} ${y}`
}

const STORAGE_KEY = "ralas-audio-v4"

// ── Component ─────────────────────────────────────────────────────────────
export default function AudiogramTool() {
  const [tab, setTab] = useState<"entry"|"report">("entry")
  const [s, setS] = useState<ToolState>(INITIAL)

  const svgRRef  = useRef<SVGSVGElement>(null)
  const svgLRef  = useRef<SVGSVGElement>(null)
  const rsvgRRef = useRef<SVGSVGElement>(null)
  const rsvgLRef = useRef<SVGSVGElement>(null)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if(!raw) return
      const d = JSON.parse(raw)
      setS(prev => ({
        ...prev,
        ...d,
        audio: d.audio ?? prev.audio,
        reflex: d.reflex ?? prev.reflex,
        symptoms: d.symptoms ?? [],
      }))
    } catch {}
  }, [])

  // Set today's date on mount if not loaded
  useEffect(() => {
    setS(prev => prev.date ? prev : { ...prev, date: new Date().toISOString().slice(0,10) })
  }, [])

  // Redraw preview graphs when audio changes
  useEffect(() => {
    if(svgRRef.current) drawGraph(svgRRef.current, s.audio["r-ac-u"], s.audio["r-bc-u"], s.audio["r-ac-m"], s.audio["r-bc-m"], "r")
    if(svgLRef.current) drawGraph(svgLRef.current, s.audio["l-ac-u"], s.audio["l-bc-u"], s.audio["l-ac-m"], s.audio["l-bc-m"], "l")
  }, [s.audio])

  // Redraw report graphs when switching to report tab
  useEffect(() => {
    if(tab==="report") {
      if(rsvgRRef.current) drawGraph(rsvgRRef.current, s.audio["r-ac-u"], s.audio["r-bc-u"], s.audio["r-ac-m"], s.audio["r-bc-m"], "r")
      if(rsvgLRef.current) drawGraph(rsvgLRef.current, s.audio["l-ac-u"], s.audio["l-bc-u"], s.audio["l-ac-m"], s.audio["l-bc-m"], "l")
    }
  }, [tab, s.audio])

  // Save to localStorage on state change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)) } catch {}
  }, [s])

  const set = useCallback((field: keyof ToolState, val: string) => {
    setS(prev => ({...prev, [field]: val}))
  }, [])

  const setAudio = useCallback((rowKey: string, freq: number, val: string) => {
    setS(prev => ({
      ...prev,
      audio: { ...prev.audio, [rowKey]: { ...prev.audio[rowKey], [freq]: val } }
    }))
  }, [])

  const setReflex = useCallback((col: string, freq: number, val: string) => {
    setS(prev => ({
      ...prev,
      reflex: { ...prev.reflex, [col]: { ...prev.reflex[col], [freq]: val } }
    }))
  }, [])

  const toggleSymptom = useCallback((sym: string) => {
    setS(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(sym)
        ? prev.symptoms.filter(x=>x!==sym)
        : [...prev.symptoms, sym]
    }))
  }, [])

  const ptaR = calcPTA(s.audio["r-ac-u"])
  const ptaL = calcPTA(s.audio["l-ac-u"])

  return (
    <>
      {/* Print CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; padding: 0 !important; }
          .report-card { box-shadow: none !important; border-radius: 0 !important; }
        }
        @media screen {
          .print-only { display: none; }
        }
        :root {
          --R: #dc2626; --R-lt: rgba(220,38,38,.06); --R-mid: rgba(220,38,38,.15);
          --L: #1d4ed8; --L-lt: rgba(29,78,216,.06); --L-mid: rgba(29,78,216,.15);
          --forest: #1a3a2a; --forest2: #2d5c42; --forest-lt: rgba(26,58,42,.08);
          --gold: #c9a84c; --gold-lt: rgba(201,168,76,.12);
          --border: #e2e6ea; --border-lt: #edf0f3;
          --mid: #64748b; --lt: #94a3b8; --xlt: #cbd5e1;
          --shadow: 0 1px 3px rgba(0,0,0,.07),0 1px 2px rgba(0,0,0,.04);
          --shadow-md: 0 4px 12px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.04);
          --radius: 12px;
        }
        .at-wrap { overflow-x: auto; border-radius: 8px; border: 1.5px solid var(--border); }
        .atbl { border-collapse: collapse; min-width: 600px; width: 100%; font-size: 12.5px; }
        .atbl thead th { font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--mid);padding:9px 5px;text-align:center;background:linear-gradient(to bottom,#f8f9fa,#f1f4f7);border-bottom:2px solid var(--border); }
        .atbl thead th:first-child { text-align:left;padding-left:14px; }
        .atbl tbody td { padding:5px 4px;text-align:center;border-bottom:1px solid var(--border-lt); }
        .atbl tbody tr:last-child td { border-bottom:none; }
        .rl { text-align:left!important;padding-left:14px!important;font-size:12px;font-weight:600;white-space:nowrap;width:120px; }
        .row-r { background:var(--R-lt); } .row-l { background:var(--L-lt); }
        .sep td { border-top:2px solid var(--border)!important; }
        .db-in { width:48px!important;padding:5px 3px!important;text-align:center!important;font-variant-numeric:tabular-nums;font-size:12px;border-radius:5px;border:1.5px solid var(--border); }
        .db-in.r { border-color:var(--R-mid); } .db-in.r:focus { border-color:var(--R);outline:none;box-shadow:0 0 0 2px var(--R-lt); }
        .db-in.l { border-color:var(--L-mid); } .db-in.l:focus { border-color:var(--L);outline:none;box-shadow:0 0 0 2px var(--L-lt); }
        .sm-tbl { width:100%;border-collapse:collapse;font-size:12.5px; }
        .sm-tbl th { background:#f8f9fa;padding:8px 10px;text-align:center;font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--mid);border:1px solid var(--border); }
        .sm-tbl td { padding:7px 8px;text-align:center;border:1px solid var(--border); }
        .sm-in { width:54px!important;padding:5px 4px!important;text-align:center;font-size:12px;border-radius:5px;border:1.5px solid var(--border); }
        .sm-in:focus { outline:none;border-color:var(--forest);box-shadow:0 0 0 2px var(--forest-lt); }
        .rtbl { width:100%;border-collapse:collapse;font-size:12px; }
        .rtbl thead th { background:#f7f8fa;padding:8px 10px;text-align:center;font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--mid);border:1px solid var(--border); }
        .rtbl thead th:first-child { text-align:left;padding-left:12px; }
        .rtbl tbody td { padding:8px 10px;text-align:center;border:1px solid var(--border);font-size:12.5px; }
        .rtbl tbody td:first-child { text-align:left;padding-left:12px;font-weight:600; }
        input,select,textarea { font-family:inherit; }
        input[type=checkbox] { accent-color: var(--forest); }
      `}</style>

      <div style={{fontFamily:"'Inter',system-ui,-apple-system,sans-serif",background:"#f0f2f5",minHeight:"100vh",WebkitFontSmoothing:"antialiased"}}>

        {/* ── Header ── */}
        <header className="no-print" style={{background:"linear-gradient(135deg,#1a3a2a 0%,#2d5c42 100%)",color:"#fff",padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <div style={{width:42,height:42,borderRadius:"50%",background:"rgba(255,255,255,.12)",border:"1.5px solid rgba(201,168,76,.4)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
                <circle cx="18" cy="18" r="12" stroke="#c9a84c" strokeWidth="1.6"/>
                <path d="M14 15c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V24" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="18" cy="26" r="1.3" fill="#c9a84c"/>
              </svg>
            </div>
            <div>
              <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:16,fontWeight:700,letterSpacing:".01em",lineHeight:1.2}}>Ralas Speech and Hearing Clinic</div>
              <div style={{fontSize:11,opacity:.5,letterSpacing:".1em",textTransform:"uppercase",marginTop:2}}>Jayanagar · Bengaluru · 63666 38452</div>
            </div>
          </div>
          <div style={{background:"rgba(201,168,76,.12)",color:"#c9a84c",fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",padding:"5px 12px",borderRadius:20,border:"1px solid rgba(201,168,76,.3)",whiteSpace:"nowrap",flexShrink:0}}>
            Audiogram Tool
          </div>
        </header>

        <div style={{padding:"20px 24px",maxWidth:960,margin:"0 auto"}}>

          {/* ── Tabs ── */}
          <div className="no-print" style={{display:"flex",gap:2,marginBottom:20,background:"#e2e6ea",borderRadius:10,padding:3,width:"fit-content"}}>
            {(["entry","report"] as const).map(t => (
              <button key={t} onClick={()=>setTab(t)} style={{padding:"8px 24px",borderRadius:7,fontSize:13,fontWeight:tab===t?600:500,cursor:"pointer",border:"none",background:tab===t?"#fff":"transparent",color:tab===t?"#0f172a":"#64748b",boxShadow:tab===t?"0 1px 3px rgba(0,0,0,.07)":"none",fontFamily:"'Inter',sans-serif",transition:".2s"}}>
                {t==="entry" ? "Patient Entry" : "Report Preview"}
              </button>
            ))}
          </div>

          {/* ═══════════ ENTRY TAB ═══════════ */}
          {tab==="entry" && (
            <div>

              {/* Case History */}
              <Card title="Case History Performa" dot="#1a3a2a">
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:14}}>
                  <Field label="OP No."><input style={inp()} value={s.op} onChange={e=>set("op",e.target.value)} placeholder="013"/></Field>
                  <Field label="Date"><input style={inp()} type="date" value={s.date} onChange={e=>set("date",e.target.value)}/></Field>
                  <Field label="Case"><select style={inp()} value={s.caseType} onChange={e=>set("caseType",e.target.value)}><option>New Case</option><option>Old Case</option></select></Field>
                  <Field label="Type"><select style={inp()} value={s.patientType} onChange={e=>set("patientType",e.target.value)}><option>Outpatient</option><option>Inpatient</option></select></Field>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:14}}>
                  <div style={{gridColumn:"span 2"}}><Field label="Patient Name"><input style={inp()} value={s.name} onChange={e=>set("name",e.target.value)} placeholder="Mr. / Ms. Full Name"/></Field></div>
                  <Field label="Age & Gender"><input style={inp()} value={s.age} onChange={e=>set("age",e.target.value)} placeholder="45 Yrs / M"/></Field>
                  <Field label="Phone"><input style={inp()} type="tel" value={s.phone} onChange={e=>set("phone",e.target.value)} placeholder="+91 98765 43210"/></Field>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:14}}>
                  <div style={{gridColumn:"span 2"}}><Field label="Address"><input style={inp()} value={s.address} onChange={e=>set("address",e.target.value)} placeholder="Area, City"/></Field></div>
                  <Field label="Referred By"><input style={inp()} value={s.refBy} onChange={e=>set("refBy",e.target.value)} placeholder="Dr. / Self"/></Field>
                  <Field label="Occupation"><input style={inp()} value={s.occupation} onChange={e=>set("occupation",e.target.value)}/></Field>
                </div>
                <div style={{marginBottom:14}}>
                  <Field label="Chief Complaint">
                    <textarea style={{...inp(),resize:"vertical",minHeight:52,lineHeight:1.4}} rows={2} value={s.complaint} onChange={e=>set("complaint",e.target.value)} placeholder="e.g. Bilateral hearing difficulty for 2 years…"/>
                  </Field>
                </div>
                <div style={{marginBottom:14}}>
                  <label style={lbl()}>Details — Check All That Apply</label>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px 16px",marginTop:6}}>
                    {SYMPTOMS.map(sym=>(
                      <label key={sym} style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:12.5,color:"#64748b",userSelect:"none"}}>
                        <input type="checkbox" checked={s.symptoms.includes(sym)} onChange={()=>toggleSymptom(sym)} style={{width:15,height:15,cursor:"pointer",flexShrink:0}}/>
                        {sym}
                      </label>
                    ))}
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:14}}>
                  <Field label="Progression"><input style={inp()} value={s.progression} onChange={e=>set("progression",e.target.value)} placeholder="Gradual / Sudden"/></Field>
                  <Field label="Duration"><input style={inp()} value={s.duration} onChange={e=>set("duration",e.target.value)} placeholder="e.g. 2 years"/></Field>
                  <Field label="Onset"><input style={inp()} value={s.onset} onChange={e=>set("onset",e.target.value)} placeholder="Insidious / Acute"/></Field>
                  <Field label="Ear Favoured">
                    <select style={inp()} value={s.earFavoured} onChange={e=>set("earFavoured",e.target.value)}><option value="">—</option><option>R</option><option>L</option><option>NA</option></select>
                  </Field>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  <Field label="ENT Findings"><input style={inp()} value={s.entFindings} onChange={e=>set("entFindings",e.target.value)} placeholder="e.g. TM intact bilaterally"/></Field>
                  <Field label="Medical / Surgical History"><input style={inp()} value={s.medHistory} onChange={e=>set("medHistory",e.target.value)} placeholder="e.g. DM, HTN"/></Field>
                </div>
              </Card>

              {/* PTA Table */}
              <Card title="Pure Tone Audiometry" dot="linear-gradient(135deg,#dc2626,#1d4ed8)" hint="dBHL · –10 to 120 · leave blank = NR">
                <div className="at-wrap">
                  <table className="atbl">
                    <thead>
                      <tr>
                        <th>Ear / Type</th>
                        {FREQS.map(f=><th key={f}>{f>=1000?f/1000+"K":f}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {ROWS.map(row=>(
                        <tr key={row.key} className={`row-${row.ear}${row.sep?" sep":""}`}>
                          <td className="rl" style={{color:row.ear==="r"?"#dc2626":"#1d4ed8",opacity:row.sub?.75:1,fontWeight:row.sub?400:600}}>
                            {row.label}
                          </td>
                          {FREQS.map(f=>(
                            <td key={f}>
                              <input
                                className={`db-in ${row.ear}`}
                                type="number" min="-10" max="120"
                                placeholder="—"
                                value={s.audio[row.key][f]}
                                onChange={e=>setAudio(row.key,f,e.target.value)}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{fontSize:11,color:"#94a3b8",marginTop:8}}>AC = Air Conduction &nbsp;·&nbsp; BC = Bone Conduction &nbsp;·&nbsp; U = Unmasked &nbsp;·&nbsp; M = Masked</p>
              </Card>

              {/* Live Preview */}
              <Card title="Live Audiogram Preview" dot="#c9a84c">
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                  {(["r","l"] as const).map(ear=>(
                    <div key={ear} style={{borderRadius:10,overflow:"hidden",border:"1.5px solid #e2e6ea",background:"#fff"}}>
                      <div style={{padding:"8px 14px",borderBottom:"1.5px solid #e2e6ea",display:"flex",alignItems:"center",gap:8,background:ear==="r"?"rgba(220,38,38,.06)":"rgba(29,78,216,.06)"}}>
                        <div style={{width:7,height:7,borderRadius:"50%",background:ear==="r"?"#dc2626":"#1d4ed8"}}/>
                        <span style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:ear==="r"?"#dc2626":"#1d4ed8"}}>
                          {ear==="r"?"Right Ear (O = AC · < = BC)":"Left Ear (X = AC · > = BC)"}
                        </span>
                      </div>
                      <svg ref={ear==="r"?svgRRef:svgLRef} viewBox="0 0 320 330" style={{width:"100%",display:"block"}}/>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Speech Audiometry */}
              <Card title="Speech Audiometry" dot="#64748b">
                <div className="at-wrap">
                  <table className="sm-tbl">
                    <thead><tr>
                      <th>Ear</th>
                      <th>PTA (auto)</th>
                      <th>SRT / SAT (dBHL)</th><th>SDS (%)</th><th>MCL (dBHL)</th><th>UCL (dBHL)</th>
                    </tr></thead>
                    <tbody>
                      {(["r","l"] as const).map(ear=>(
                        <tr key={ear} style={{background:ear==="r"?"rgba(220,38,38,.06)":"rgba(29,78,216,.06)"}}>
                          <td className="rl" style={{color:ear==="r"?"#dc2626":"#1d4ed8",fontWeight:600}}>{ear==="r"?"Right":"Left"}</td>
                          <td style={{fontSize:14,fontWeight:700,color:ear==="r"?"#dc2626":"#1d4ed8"}}>{(ear==="r"?ptaR:ptaL)!==null?`${ear==="r"?ptaR:ptaL} dBHL`:"—"}</td>
                          <td><input className="sm-in" type="number" placeholder="—" value={ear==="r"?s.srtR:s.srtL} onChange={e=>set(ear==="r"?"srtR":"srtL",e.target.value)}/></td>
                          <td><input className="sm-in" type="number" placeholder="—" value={ear==="r"?s.sdsR:s.sdsL} onChange={e=>set(ear==="r"?"sdsR":"sdsL",e.target.value)}/></td>
                          <td><input className="sm-in" type="number" placeholder="—" value={ear==="r"?s.mclR:s.mclL} onChange={e=>set(ear==="r"?"mclR":"mclL",e.target.value)}/></td>
                          <td><input className="sm-in" type="number" placeholder="—" value={ear==="r"?s.uclR:s.uclL} onChange={e=>set(ear==="r"?"uclR":"uclL",e.target.value)}/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Weber + Acoustic Reflex side by side */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                <Card title="Weber Test" dot="#64748b" noMargin>
                  <div className="at-wrap">
                    <table className="sm-tbl">
                      <thead><tr><th>250 Hz</th><th>500 Hz</th><th>1K Hz</th><th>2K Hz</th></tr></thead>
                      <tbody><tr>
                        {(["wb250","wb500","wb1k","wb2k"] as const).map(k=>(
                          <td key={k}><input className="sm-in" placeholder="R/L/C" value={s[k]} onChange={e=>set(k,e.target.value)}/></td>
                        ))}
                      </tr></tbody>
                    </table>
                  </div>
                </Card>
                <Card title="Acoustic Reflex (dBHL)" dot="#64748b" noMargin>
                  <div className="at-wrap">
                    <table className="sm-tbl">
                      <thead><tr>
                        <th>Hz</th>
                        <th style={{color:"#dc2626"}}>R Ipsi</th><th style={{color:"#dc2626"}}>R Contra</th>
                        <th style={{color:"#1d4ed8"}}>L Ipsi</th><th style={{color:"#1d4ed8"}}>L Contra</th>
                      </tr></thead>
                      <tbody>
                        {REFLEX_FREQS.map(f=>(
                          <tr key={f}>
                            <td style={{fontWeight:600,paddingLeft:12}}>{f>=1000?f/1000+"K":f} Hz</td>
                            {["r-ipsi","r-contra","l-ipsi","l-contra"].map(col=>(
                              <td key={col}><input className="sm-in" type="number" placeholder="—" value={s.reflex[col][f]} onChange={e=>setReflex(col,f,e.target.value)}/></td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Tympanometry */}
              <Card title="Tympanometry" dot="#64748b">
                <div className="at-wrap">
                  <table className="sm-tbl">
                    <thead><tr><th>Ear</th><th>Type</th><th>E.C.V (ml)</th><th>M.E.P (daPa)</th><th>S.C. (ml)</th><th>Gradient</th></tr></thead>
                    <tbody>
                      {(["r","l"] as const).map(ear=>(
                        <tr key={ear} style={{background:ear==="r"?"rgba(220,38,38,.06)":"rgba(29,78,216,.06)"}}>
                          <td className="rl" style={{color:ear==="r"?"#dc2626":"#1d4ed8",fontWeight:600}}>{ear==="r"?"Right":"Left"}</td>
                          <td>
                            <select style={{fontSize:12,padding:"5px 6px",width:70,border:"1.5px solid #e2e6ea",borderRadius:5}} value={ear==="r"?s.tyR:s.tyL} onChange={e=>set(ear==="r"?"tyR":"tyL",e.target.value)}>
                              <option value="">—</option><option>A</option><option>As</option><option>Ad</option><option>B</option><option>C</option>
                            </select>
                          </td>
                          <td><input className="sm-in" type="number" step=".1" placeholder="1.0" value={ear==="r"?s.tyREcv:s.tyLEcv} onChange={e=>set(ear==="r"?"tyREcv":"tyLEcv",e.target.value)}/></td>
                          <td><input className="sm-in" type="number" placeholder="0" value={ear==="r"?s.tyRMep:s.tyLMep} onChange={e=>set(ear==="r"?"tyRMep":"tyLMep",e.target.value)}/></td>
                          <td><input className="sm-in" type="number" step=".1" placeholder="0.8" value={ear==="r"?s.tyRSc:s.tyLSc} onChange={e=>set(ear==="r"?"tyRSc":"tyLSc",e.target.value)}/></td>
                          <td><input className="sm-in" placeholder="—" value={ear==="r"?s.tyRGrad:s.tyLGrad} onChange={e=>set(ear==="r"?"tyRGrad":"tyLGrad",e.target.value)}/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card title="Diagnosis & Recommendations" dot="#1a3a2a">
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                  <Field label="Diagnosis — Right Ear" color="#dc2626">
                    <input style={{...inp(),borderColor:"rgba(220,38,38,.15)"}} value={s.diagR} onChange={e=>set("diagR",e.target.value)} placeholder="e.g. Bilateral Moderate SNHL"/>
                  </Field>
                  <Field label="Diagnosis — Left Ear" color="#1d4ed8">
                    <input style={{...inp(),borderColor:"rgba(29,78,216,.15)"}} value={s.diagL} onChange={e=>set("diagL",e.target.value)} placeholder="e.g. Bilateral Moderate SNHL"/>
                  </Field>
                </div>
                <div style={{marginBottom:14}}>
                  <Field label="Recommendations">
                    <textarea style={{...inp(),resize:"vertical",minHeight:52,lineHeight:1.4}} rows={2} value={s.rec} onChange={e=>set("rec",e.target.value)} placeholder="e.g. Hearing Aid Trial · ENT Review · Follow up"/>
                  </Field>
                </div>
                <Field label="Comments / AEP / Handicap Indices">
                  <textarea style={{...inp(),resize:"vertical",minHeight:52,lineHeight:1.4}} rows={2} value={s.comments} onChange={e=>set("comments",e.target.value)} placeholder="THI:    DHI:    HHI:"/>
                </Field>
              </Card>

              <div style={{display:"flex",justifyContent:"flex-end",paddingTop:4}}>
                <button onClick={()=>setTab("report")} style={{padding:"11px 28px",borderRadius:9,fontFamily:"'Space Grotesk',sans-serif",fontSize:14,fontWeight:600,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#1a3a2a,#2d5c42)",color:"#fff",boxShadow:"0 2px 8px rgba(26,58,42,.3)",letterSpacing:".01em"}}>
                  Generate Report →
                </button>
              </div>
            </div>
          )}

          {/* ═══════════ REPORT TAB ═══════════ */}
          {tab==="report" && (
            <div>
              {/* Top bar with back + print */}
              <div className="no-print" style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
                <button onClick={()=>setTab("entry")} style={{padding:"9px 18px",borderRadius:9,fontFamily:"'Space Grotesk',sans-serif",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fff",color:"#64748b",border:"1.5px solid #e2e6ea"}}>
                  ← Back to Entry
                </button>
                <button
                  onClick={()=>window.print()}
                  style={{display:"flex",alignItems:"center",gap:8,padding:"10px 22px",borderRadius:9,fontFamily:"'Space Grotesk',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",border:"none",background:"linear-gradient(135deg,#1a3a2a,#2d5c42)",color:"#fff",boxShadow:"0 2px 8px rgba(26,58,42,.3)"}}
                >
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M5 7V2h10v5M5 15H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2"/>
                    <rect x="5" y="12" width="10" height="6" rx="1"/>
                    <circle cx="15" cy="10" r=".75" fill="currentColor" stroke="none"/>
                  </svg>
                  Print Report
                </button>
              </div>

              {/* Report card */}
              <div className="report-card" style={{background:"#fff",borderRadius:14,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,.1)"}}>

                {/* Clinic header */}
                <div style={{background:"linear-gradient(135deg,#1a3a2a 0%,#2d5c42 100%)",color:"#fff",padding:"20px 24px",display:"flex",alignItems:"flex-start",gap:16}}>
                  <div style={{width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,.1)",border:"2px solid rgba(201,168,76,.5)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                    <svg viewBox="0 0 44 44" width="34" height="34" fill="none">
                      <circle cx="22" cy="22" r="16" stroke="#c9a84c" strokeWidth="1.8"/>
                      <path d="M17 18.5c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.9-1 3.5-2.5 4.4V30" stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round"/>
                      <circle cx="22" cy="32" r="1.5" fill="#c9a84c"/>
                      <path d="M14 22a8 8 0 0 0 1 3.9" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
                      <path d="M30 22a8 8 0 0 1-1 3.9" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
                    </svg>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:600,opacity:.7,marginBottom:4}}>ರಾಲಾಸ್ ವಾಕ್ ಮತ್ತು ಶ್ರವಣ ಕ್ಲಿನಿಕ್</div>
                    <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:20,fontWeight:700,letterSpacing:".01em",lineHeight:1.1,marginBottom:4}}>Ralas Speech And Hearing Clinic</div>
                    <div style={{fontSize:10.5,opacity:.5,lineHeight:1.6}}>#121, 2nd Floor, 6th 'C' Main Road, Near Sapna Book House, Jayanagar 4th Block, Bangalore – 560011</div>
                  </div>
                  <div style={{fontSize:11,opacity:.55,textAlign:"right",lineHeight:1.75,whiteSpace:"nowrap",flexShrink:0}}>
                    Email: ralasspeechandhearingclinic@gmail.com<br/>
                    Website: www.ralas.co.in<br/>
                    Mob: 63666 38452
                  </div>
                </div>
                <div style={{background:"#2d5c42",color:"#fff",textAlign:"center",padding:"8px",fontFamily:"'Space Grotesk',sans-serif",fontSize:11,fontWeight:700,letterSpacing:".2em",textTransform:"uppercase"}}>
                  Audiological Evaluation Report — Pure Tone Audiometry
                </div>

                {/* Patient info */}
                <div style={{display:"grid",gridTemplateColumns:"1fr auto",background:"#e2e6ea",gap:1,borderBottom:"2px solid #e2e6ea"}}>
                  <div style={{background:"#fff",padding:"12px 20px",display:"flex",flexWrap:"wrap",gap:24}}>
                    {[["Patient Name",s.name||"—"],["Age & Gender",s.age||"—"],["Date",formatDate(s.date)]].map(([l,v])=>(
                      <div key={l}><div style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"#94a3b8",marginBottom:2}}>{l}</div><div style={{fontSize:15,fontWeight:500}}>{v}</div></div>
                    ))}
                  </div>
                  <div style={{background:"#fafbfc",padding:"12px 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",borderLeft:"1px solid #e2e6ea"}}>
                    <div style={{fontSize:10,fontWeight:700,letterSpacing:".07em",textTransform:"uppercase",color:"#94a3b8",marginBottom:2}}>No.</div>
                    <div style={{fontSize:15,fontWeight:500}}>{s.op||"—"}</div>
                  </div>
                </div>
                {s.complaint && (
                  <div style={{padding:"9px 20px",borderBottom:"1px solid #e2e6ea",fontSize:12.5,color:"#64748b",display:"flex",gap:10,alignItems:"baseline",background:"#fdfcfb"}}>
                    <span style={{fontSize:10,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#94a3b8",flexShrink:0}}>Complaint</span>
                    <span>{s.complaint}</span>
                  </div>
                )}

                {/* PTA section heading */}
                <SectionHead label="Pure Tone Audiometry"/>

                {/* Audiogram SVGs */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"8px 20px 12px"}}>
                  {(["r","l"] as const).map(ear=>(
                    <div key={ear} style={{borderRadius:10,overflow:"hidden",border:"1.5px solid #e2e6ea"}}>
                      <div style={{padding:"7px 12px",textAlign:"center",fontFamily:"'Space Grotesk',sans-serif",fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",background:ear==="r"?"rgba(220,38,38,.06)":"rgba(29,78,216,.06)",color:ear==="r"?"#dc2626":"#1d4ed8",borderBottom:`1.5px solid ${ear==="r"?"rgba(220,38,38,.15)":"rgba(29,78,216,.15)"}`}}>
                        {ear==="r"?"Right Ear  (O = AC Unmasked · < = BC Unmasked)":"Left Ear  (X = AC Unmasked · > = BC Unmasked)"}
                      </div>
                      <svg ref={ear==="r"?rsvgRRef:rsvgLRef} viewBox="0 0 320 330" style={{width:"100%",display:"block"}}/>
                    </div>
                  ))}
                </div>

                {/* PTA + Weber + Speech */}
                <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:16,padding:"0 20px 14px",alignItems:"start"}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minWidth:250}}>
                    {(["r","l"] as const).map(ear=>{
                      const pta=ear==="r"?ptaR:ptaL
                      return (
                        <div key={ear} style={{padding:"12px 14px",borderRadius:10,border:`1.5px solid ${ear==="r"?"rgba(220,38,38,.15)":"rgba(29,78,216,.15)"}`,background:ear==="r"?"rgba(220,38,38,.06)":"rgba(29,78,216,.06)"}}>
                          <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",marginBottom:4,color:ear==="r"?"#dc2626":"#1d4ed8"}}>{ear==="r"?"Right Ear":"Left Ear"}</div>
                          <div style={{fontSize:22,fontWeight:700,fontVariantNumeric:"tabular-nums",lineHeight:1}}>{pta!==null?`${pta} dBHL`:"— dBHL"}</div>
                          <div style={{fontSize:11,color:"#64748b",marginTop:3}}>{classifyHL(pta)}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <table className="rtbl" style={{marginBottom:10}}>
                      <thead>
                        <tr><th colSpan={4} style={{textAlign:"left"}}>Audiometric Weber Test</th></tr>
                        <tr><th>250 Hz</th><th>500 Hz</th><th>1K Hz</th><th>2K Hz</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>{s.wb250||"—"}</td><td>{s.wb500||"—"}</td><td>{s.wb1k||"—"}</td><td>{s.wb2k||"—"}</td></tr>
                      </tbody>
                    </table>
                    <table className="rtbl">
                      <thead>
                        <tr><th colSpan={3} style={{textAlign:"left"}}>Speech Audiometry</th></tr>
                        <tr><th>Ear</th><th>SRT (dBHL)</th><th>SDS (%)</th></tr>
                      </thead>
                      <tbody>
                        <tr><td style={{color:"#dc2626"}}>Right</td><td>{s.srtR||"—"}</td><td>{s.sdsR||"—"}</td></tr>
                        <tr><td style={{color:"#1d4ed8"}}>Left</td><td>{s.srtL||"—"}</td><td>{s.sdsL||"—"}</td></tr>
                      </tbody>
                    </table>
                    <p style={{fontSize:"9.5px",color:"#94a3b8",marginTop:5}}>PTA = average threshold at 500, 1K &amp; 2K Hz (AC Unmasked)</p>
                  </div>
                </div>

                {/* Tymapnometry + Acoustic Reflex */}
                <SectionHead label="Tympanometry & Acoustic Reflex"/>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,padding:"0 20px 14px",alignItems:"start"}}>
                  <table className="rtbl">
                    <thead><tr><th>Ear</th><th>Type</th><th>E.C.V</th><th>M.E.P</th><th>S.C.</th><th>Gradient</th></tr></thead>
                    <tbody>
                      {(["r","l"] as const).map(ear=>(
                        <tr key={ear}>
                          <td style={{color:ear==="r"?"#dc2626":"#1d4ed8"}}>{ear==="r"?"Right":"Left"}</td>
                          <td>{(ear==="r"?s.tyR:s.tyL)||"—"}</td>
                          <td>{(ear==="r"?s.tyREcv:s.tyLEcv)||"—"}</td>
                          <td>{(ear==="r"?s.tyRMep:s.tyLMep)||"—"}</td>
                          <td>{(ear==="r"?s.tyRSc:s.tyLSc)||"—"}</td>
                          <td>{(ear==="r"?s.tyRGrad:s.tyLGrad)||"—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <table className="rtbl">
                    <thead>
                      <tr><th>Hz</th><th style={{color:"#dc2626"}}>R Ipsi</th><th style={{color:"#dc2626"}}>R Contra</th><th style={{color:"#1d4ed8"}}>L Ipsi</th><th style={{color:"#1d4ed8"}}>L Contra</th></tr>
                    </thead>
                    <tbody>
                      {REFLEX_FREQS.map(f=>(
                        <tr key={f}>
                          <td style={{paddingLeft:12,fontWeight:600}}>{f>=1000?f/1000+"K":f} Hz</td>
                          {["r-ipsi","r-contra","l-ipsi","l-contra"].map(col=>(
                            <td key={col}>{s.reflex[col][f]||"—"}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Diagnosis */}
                <SectionHead label="Diagnosis"/>
                <div style={{padding:"12px 20px"}}>
                  {(["r","l"] as const).map(ear=>(
                    <div key={ear} style={{display:"grid",gridTemplateColumns:"60px 1fr",gap:8,alignItems:"center",marginBottom:8}}>
                      <span style={{fontSize:12,fontWeight:700,color:ear==="r"?"#dc2626":"#1d4ed8",paddingTop:4}}>{ear==="r"?"Right:":"Left:"}</span>
                      <div style={{borderBottom:"1.5px solid #bbb",padding:"4px 2px",fontSize:13,minHeight:26,color:"#0f172a"}}>{ear==="r"?s.diagR:s.diagL}</div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <SectionHead label="Recommendation"/>
                <div style={{padding:"10px 20px 12px"}}>
                  <div style={{borderBottom:"1.5px solid #bbb",padding:"4px 2px",fontSize:13,minHeight:30,color:"#0f172a"}}>{s.rec}</div>
                </div>

                {/* Comments */}
                {s.comments && (
                  <div style={{padding:"10px 20px 12px",borderTop:"1px solid #e2e6ea"}}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:".09em",textTransform:"uppercase",color:"#94a3b8",marginBottom:8}}>Comments / AEP / Handicap Indices</div>
                    <div style={{borderBottom:"1.5px solid #bbb",padding:"4px 2px",fontSize:13,minHeight:30,color:"#0f172a"}}>{s.comments}</div>
                  </div>
                )}

                {/* Signatures */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,padding:"18px 24px",borderTop:"1.5px solid #e2e6ea",background:"#fafbfc"}}>
                  {["Clinical & Staff","Stamp","Audiologist Signature"].map(l=>(
                    <div key={l} style={{borderTop:"1.5px solid #374151",paddingTop:5,fontSize:10,color:"#94a3b8",textAlign:"center",letterSpacing:".03em"}}>{l}</div>
                  ))}
                </div>
                <div style={{background:"linear-gradient(135deg,#1a3a2a,#2d5c42)",color:"rgba(255,255,255,.55)",padding:"10px 20px",fontSize:10.5,textAlign:"center",letterSpacing:".02em",lineHeight:1.6}}>
                  #121, 2nd Floor, 6th 'C' Main Road, Near Sapna Book House, Jayanagar 4th Block, Bangalore – 560011
                  &nbsp;·&nbsp; ralasspeechandhearingclinic@gmail.com &nbsp;·&nbsp; www.ralas.co.in &nbsp;·&nbsp; 63666 38452
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ── Small helpers ──────────────────────────────────────────────────────────
function Card({ title, dot, hint, noMargin, children }: { title:string;dot:string;hint?:string;noMargin?:boolean;children:React.ReactNode }) {
  return (
    <div style={{background:"#fff",borderRadius:12,border:"1px solid #e2e6ea",boxShadow:"0 1px 3px rgba(0,0,0,.07)",marginBottom:noMargin?0:16,overflow:"hidden"}}>
      <div style={{padding:"13px 20px",background:"#fafbfc",borderBottom:"1px solid #edf0f3",fontFamily:"'Space Grotesk',sans-serif",fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#64748b",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:8,height:8,borderRadius:"50%",background:dot,flexShrink:0}}/>
        {title}
        {hint&&<span style={{marginLeft:"auto",fontSize:10,opacity:.6,fontWeight:400,textTransform:"none",letterSpacing:".02em"}}>{hint}</span>}
      </div>
      <div style={{padding:"18px 20px"}}>{children}</div>
    </div>
  )
}

function Field({ label, color, children }: { label:string;color?:string;children:React.ReactNode }) {
  return (
    <div>
      <label style={{...lbl(),color:color??undefined}}>{label}</label>
      {children}
    </div>
  )
}

function SectionHead({ label }: { label:string }) {
  return (
    <div style={{padding:"10px 20px 5px",borderTop:"1px solid #e2e6ea",fontFamily:"'Space Grotesk',sans-serif",fontSize:11,fontWeight:700,letterSpacing:".15em",textTransform:"uppercase",color:"#64748b",display:"flex",alignItems:"center",gap:8}}>
      {label}
      <div style={{flex:1,height:1,background:"#edf0f3"}}/>
    </div>
  )
}

function inp(): React.CSSProperties {
  return {
    width:"100%",border:"1.5px solid #e2e6ea",borderRadius:8,
    padding:"9px 12px",fontSize:13.5,color:"#0f172a",background:"#fff",
    lineHeight:1.4,outline:"none",fontFamily:"inherit",
  }
}

function lbl(): React.CSSProperties {
  return {
    display:"block",fontSize:11,fontWeight:600,letterSpacing:".07em",
    textTransform:"uppercase",color:"#64748b",marginBottom:5,
  }
}
