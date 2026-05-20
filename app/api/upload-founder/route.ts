import { writeFile, rm } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File;
  const slot = (formData.get('slot') as string) || 'female';

  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = slot === 'male' ? 'founder-male.jpg' : 'founder-female.jpg';
  const filePath = path.join(process.cwd(), 'public/images', filename);

  await writeFile(filePath, buffer);

  // Clear Next.js image cache
  const cachePath = path.join(process.cwd(), '.next/cache/images');
  await rm(cachePath, { recursive: true, force: true });

  return NextResponse.json({ success: true, filename });
}
