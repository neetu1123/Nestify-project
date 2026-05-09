'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

export default function AuthPanel() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOTP = () => setOtpSent(true);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 bg-muted p-1 rounded-xl mb-8">
        <button
          onClick={() => { setMode('login'); setOtpSent(false); }}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'login' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Log In
        </button>
        <button
          onClick={() => { setMode('signup'); setOtpSent(false); }}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'signup' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          Sign Up
        </button>
      </div>
      <h2 className="font-serif text-2xl text-foreground mb-1">
        {mode === 'login' ? 'Welcome back' : 'Create your account'}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        {mode === 'login' ? 'Log in to manage your listings and leads.' : 'Join 50,000+ property owners on Nestify.'}
      </p>
      {/* Auth Method Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setAuthMethod('phone'); setOtpSent(false); }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${authMethod === 'phone' ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}
        >
          <Icon name="DevicePhoneMobileIcon" size={14} className="inline mr-1.5" />
          Phone / OTP
        </button>
        <button
          onClick={() => { setAuthMethod('email'); setOtpSent(false); }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${authMethod === 'email' ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}
        >
          <Icon name="EnvelopeIcon" size={14} className="inline mr-1.5" />
          Email
        </button>
      </div>
      <div className="space-y-4">
        {/* Name — signup only */}
        {mode === 'signup' && (
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
              placeholder="Rajesh Agarwal"
              className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        )}

        {/* Phone OTP Flow */}
        {authMethod === 'phone' && (
          <>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mobile number</label>
              <div className="flex">
                <span className="px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground font-semibold">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e?.target?.value)}
                  placeholder="98765 43210"
                  className="flex-1 px-4 py-3 text-sm border border-border rounded-r-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>
            {!otpSent ? (
              <button
                onClick={handleSendOTP}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
              >
                Send OTP
              </button>
            ) : (
              <>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e?.target?.value)}
                    placeholder="6-digit OTP"
                    maxLength={6}
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all tracking-widest text-center font-mono text-lg"
                  />
                  <button onClick={() => setOtpSent(false)} className="text-xs text-primary mt-1 hover:underline">
                    Resend OTP
                  </button>
                </div>
                <Link
                  href="/user-dashboard"
                  className="block w-full text-center bg-secondary text-white py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all shadow-sm"
                >
                  {mode === 'login' ? 'Log In' : 'Create Account'}
                </Link>
              </>
            )}
          </>
        )}

        {/* Email Flow */}
        {authMethod === 'email' && (
          <>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                placeholder="rajesh@example.com"
                className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e?.target?.value)}
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 pr-11 text-sm border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={16} />
                </button>
              </div>
            </div>
            {mode === 'login' && (
              <div className="text-right">
                <button className="text-xs text-primary hover:underline">Forgot password?</button>
              </div>
            )}
            <Link
              href="/user-dashboard"
              className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
            >
              {mode === 'login' ? 'Log In' : 'Create Account'}
            </Link>
          </>
        )}
      </div>
      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      {/* Social */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-medium hover:bg-muted transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-medium hover:bg-muted transition-colors">
          <Icon name="DevicePhoneMobileIcon" size={15} className="text-blue-600" />
          WhatsApp
        </button>
      </div>
      <p className="text-xs text-center text-muted-foreground mt-6">
        By continuing, you agree to Nestify&apos;s{' '}
        <Link href="/homepage" className="text-primary hover:underline">Terms</Link> and{' '}
        <Link href="/homepage" className="text-primary hover:underline">Privacy Policy</Link>
      </p>
    </div>
  );
}