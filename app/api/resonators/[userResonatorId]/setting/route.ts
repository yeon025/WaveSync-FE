import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ userResonatorId: string }> },
) {
  const { userResonatorId } = await params;
  const body: UpdateResonatorRequest = await request.json();

  const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}/setting`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result: ApiResponse<void> = await response.json();

  if (result.code == "OK") {
    revalidatePath("/resonators/${userResonatorId}");
    revalidatePath("/resonators/${userResonatorId}/setting");
  }

  // console.log(result);

  return NextResponse.json(result, {
    status: response.status,
  });
}
