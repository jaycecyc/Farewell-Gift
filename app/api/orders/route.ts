import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not configured.');
      return NextResponse.json({
        ok: true,
        synced: false,
        reason: 'missing-config',
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Google Sheets sync failed with status ${response.status}`);
    }

    return NextResponse.json({ ok: true, synced: true });
  } catch (error) {
    console.error('Order sync failed', error);
    return NextResponse.json(
      { ok: false, error: 'Unable to sync order to Google Sheets.' },
      { status: 500 }
    );
  }
}
