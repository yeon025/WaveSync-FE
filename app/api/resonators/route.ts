import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: Request) {
  const formData = await request.formData();

  const response = await fetch(`${API_URL}/api/resonators`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const result: ApiResponse<CreateResonatorResponse> = await response.json();

  if (result.code == "OK") {
    revalidatePath("/");
  }

  // console.log(result);

  return NextResponse.json(result, {
    status: response.status,
  });
}

export async function DELETE(request: Request) {
  const body: DeleteResonatorRequest = await request.json();

  const response = await fetch(`${API_URL}/api/resonators`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result: ApiResponse<void> = await response.json();

  if (result.code == "OK") {
    revalidatePath("/");
  }

  // console.log(result);

  return NextResponse.json(result, {
    status: response.status,
  });
}
