import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface VerifyMagicLinkRequest {
  token: string;
}

export async function POST(request: Request) {
  if (!baseUrl) {
    return NextResponse.json(
      {
        status: "error",
        msg: "API base URL is not configured",
      },
      { status: 500 }
    );
  }

  try {
    const body: VerifyMagicLinkRequest = await request.json();

    const response = await fetch(
      `${baseUrl}/api/v1/website/magic-link/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    const result: unknown = await response.json();

    if (!response.ok) {
      console.error("Magic Link Verify Error:", result);

      return NextResponse.json(result, {
        status: response.status,
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Magic Link Verify Proxy Error:", error);

    return NextResponse.json(
      {
        status: "error",
        msg: "Unable to verify magic link",
      },
      {
        status: 502,
      }
    );
  }
}