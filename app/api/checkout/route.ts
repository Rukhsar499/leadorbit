import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface CheckoutRequest {
  email: string;
  planName: string;
  name: string;
  phoneNumber: string;
  durationDays: number;
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
    const body: CheckoutRequest = await request.json();

    const response = await fetch(
      `${baseUrl}/api/v1/website/checkout`,
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
      console.error("Backend Checkout Error:", result);

      return NextResponse.json(result, {
        status: response.status,
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Checkout Proxy Error:", error);

    return NextResponse.json(
      {
        status: "error",
        msg: "Unable to process checkout",
      },
      {
        status: 502,
      }
    );
  }
}