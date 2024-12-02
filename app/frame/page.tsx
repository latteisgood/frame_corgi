import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Warpcast Frame',
  description: 'An interactive Warpcast Frame',
  // Warpcast Frame meta tags
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_HOST}/api/og`,
    'fc:frame:button:1': 'Click me! 🎯',
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
  },
};

export default function FramePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">My Warpcast Frame</h1>
      <p className="mt-4 text-xl">This page is a Warpcast Frame!</p>
    </div>
  );
}