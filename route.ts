// app/api/frame/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Get button index from the request
    const { untrustedData: { buttonIndex } } = data;

    // Handle button click
    let responseHtml = '';
    switch (buttonIndex) {
      case 1:
        responseHtml = {
          frames: [{
            image: `${process.env.NEXT_PUBLIC_HOST}/api/og?action=clicked`,
            post_url: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
            buttons: [{ label: 'Thanks for clicking! 🎉' }],
          }]
        };
        break;
      default:
        responseHtml = {
          frames: [{
            image: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
            post_url: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
            buttons: [{ label: 'Click me! 🎯' }],
          }]
        };
    }

    return NextResponse.json(responseHtml);
  } catch (error) {
    console.error('Error in frame route:', error);
    return NextResponse.error();
  }
}
