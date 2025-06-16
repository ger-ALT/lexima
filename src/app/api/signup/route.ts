import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = await kv.get(`email:${email}`);
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Store email with metadata
    const signupData = {
      email,
      signupDate: new Date().toISOString(),
      source: 'landing-page',
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Store in KV
    await kv.set(`email:${email}`, signupData);
    
    // Also store in a list for easy retrieval
    await kv.lpush('email-signups', email);

    return NextResponse.json({ 
      success: true, 
      message: 'Email successfully registered!' 
    });

  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET route to retrieve signups (for admin use)
export async function GET() {
  try {
    const emails = await kv.lrange('email-signups', 0, -1);
    const count = await kv.llen('email-signups');
    
    return NextResponse.json({
      success: true,
      count,
      emails: emails.slice(0, 10) // Return first 10 for preview
    });
  } catch (error) {
    console.error('Error retrieving emails:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve emails' },
      { status: 500 }
    );
  }
} 