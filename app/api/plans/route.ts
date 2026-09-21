import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET() {
  if (!baseUrl) {
    return NextResponse.json(
      {
        status: "error",
        msg: "API base URL is not configured",
      },
      { status: 500 }
    );
  }

  const url = `${baseUrl}/api/v1/website/plans`;

  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Backend Plans API Error:", errorText);

      return NextResponse.json(
        {
          status: "error",
          msg: "Failed to fetch subscription plans",
        },
        {
          status: response.status,
        }
      );
    }

    const result: unknown = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Backend Plans API Request Error:", error);

    return NextResponse.json(
      {
        status: "error",
        msg: "Unable to connect to plans API",
      },
      {
        status: 502,
      }
    );
  }
}