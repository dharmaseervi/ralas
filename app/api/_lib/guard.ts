import { NextRequest, NextResponse } from 'next/server'

// ── Rate limiter ─────────────────────────────────────────────
// 5 requests per IP per 10 minutes (in-memory, best-effort on serverless)
const ratemap = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5

export function getIP(req: NextRequest): string {
    return (
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') ||
        'unknown'
    )
}

export function rateCheck(ip: string): boolean {
    const now = Date.now()
    const entry = ratemap.get(ip)
    if (!entry || now > entry.reset) {
        ratemap.set(ip, { count: 1, reset: now + WINDOW_MS })
        return true
    }
    if (entry.count >= LIMIT) return false
    entry.count++
    return true
}

// Prune stale entries so the Map doesn't grow unbounded
setInterval(() => {
    const now = Date.now()
    for (const [key, val] of ratemap) {
        if (now > val.reset) ratemap.delete(key)
    }
}, 5 * 60 * 1000)

// ── CORS ─────────────────────────────────────────────────────
const ALLOWED_ORIGINS = new Set([
    'https://ralasclinic.com',
    'https://www.ralasclinic.com',
    'http://localhost:3000',
    'http://localhost:3001',
])

export function originAllowed(origin: string | null): boolean {
    if (!origin) return false
    return ALLOWED_ORIGINS.has(origin)
}

// ── Body size ─────────────────────────────────────────────────
const MAX_BODY = 10_000 // 10 KB

export function bodySizeOk(req: NextRequest): boolean {
    const len = parseInt(req.headers.get('content-length') || '0', 10)
    return len <= MAX_BODY
}

// ── Allowed field values ──────────────────────────────────────
export const VALID_SERVICES = new Set([
    'hearing-test',
    'speech-therapy',
    'hearing-aid-fitting',
    'tinnitus-treatment',
    'language-therapy',
    'consultation',
])

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const TIME_RE = /^(0?[1-9]|1[0-2]):[0-5]\d\s*(AM|PM)$/i

export function dateOk(val: string): boolean {
    return DATE_RE.test(val)
}

export function timeOk(val: string): boolean {
    return TIME_RE.test(String(val).trim())
}

// ── Shared error helpers ──────────────────────────────────────
export function tooLarge() {
    return NextResponse.json({ message: 'Payload too large' }, { status: 413 })
}
export function rateLimited() {
    return NextResponse.json({ message: 'Too many requests' }, { status: 429 })
}
export function forbidden() {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
}
