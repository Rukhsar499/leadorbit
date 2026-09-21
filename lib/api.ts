export interface ApiPlan {
  id: number;
  name: string;
  maxPages: number;
  maxLeadsPerMonth: number;
  price: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface PlansResponse {
  status: string;
  msg: string;
  data: ApiPlan[];
}

export async function getPlans(): Promise<ApiPlan[]> {
  try {
    const response = await fetch("/api/plans", {
      method: "GET",
      cache: "no-store",
    });

    console.log("Plans API Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Plans API Error:", errorText);

      throw new Error(
        `Failed to fetch subscription plans: ${response.status}`
      );
    }

    const result: PlansResponse = await response.json();

    console.log("Plans API Data:", result);

    return result.data;
  } catch (error) {
    console.error("Plans API Request Error:", error);
    throw error;
  }
}

// checkout

export interface CheckoutRequest {
  email: string;
  planName: string;
  name: string;
  phoneNumber: string;
  durationDays: number;
}

export interface CheckoutPayment {
  status: string;
  reference: string;
  provider: string;
  amount: number;
  currency: string;
}

export interface CheckoutMembership {
  planId: number;
  planName: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface CheckoutData {
  message: string;
  email: string;
  accountCreated: boolean;
  payment: CheckoutPayment;
  membership: CheckoutMembership;
  magicLinkSent: boolean;
  expiresAt: string;
}

export interface CheckoutResponse {
  status: string;
  msg: string;
  data: CheckoutData;
}

export async function checkout(
  payload: CheckoutRequest
): Promise<CheckoutResponse> {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Checkout API Error:", errorText);

    throw new Error(
      `Checkout failed: ${response.status}`
    );
  }

  const result: CheckoutResponse = await response.json();

  console.log("Checkout API Data:", result);

  return result;
}

// verify magic link

export interface MagicLinkUserMembership {
  planId: number;
  planName: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface MagicLinkUser {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  hasPassword: boolean;
  membership: MagicLinkUserMembership;
}

export interface MagicLinkVerifyData {
  user: MagicLinkUser;
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: string;
  redirect_url: string;
}

export interface MagicLinkVerifyResponse {
  status: string;
  msg: string;
  data: MagicLinkVerifyData;
}
export async function verifyMagicLink(
  token: string
): Promise<MagicLinkVerifyResponse> {
  const response = await fetch("/api/magic-link/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
    cache: "no-store",
  });

  const result: unknown = await response.json();

  if (!response.ok) {
    console.error("Magic Link Verify API Error:", result);

    throw new Error("Magic link verification failed");
  }

  return result as MagicLinkVerifyResponse;
}