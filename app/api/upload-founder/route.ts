import { writeFile, rm } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File;
  const rawSlot = (formData.get('slot') as string) || 'female';
  const slot = rawSlot.replace(/[^a-z0-9-]/gi, '');

  if (!file || !slot) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `founder-${slot}.jpg`;
  const filePath = path.join(process.cwd(), 'public/images', filename);

  await writeFile(filePath, buffer);

  // Clear Next.js image cache
  const cachePath = path.join(process.cwd(), '.next/cache/images');
  await rm(cachePath, { recursive: true, force: true });

  return NextResponse.json({ success: true, filename });
}
