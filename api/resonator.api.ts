const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getResonators(): Promise<ResonatorSummaryResponse[]> {
  try {
    const start = Date.now();

    const response = await fetch(`${API_URL}/api/resonators`, {
      method: "GET",
      cache: "no-store",
    });

    const end = Date.now();
    console.log(`[백엔드 fetch 왕복 시간] ${end - start}ms`);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    // console.log(result.data);

    return result.data;
  } catch (error) {
    console.error("[공명자 목록 조회 실패]", error);

    throw error;
  }
}

export async function getResonatorDetail(
  userResonatorId: string,
): Promise<ResonatorDetailResponse> {
  try {
    const start = Date.now();

    const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}`, {
      method: "GET",
      cache: "no-store",
    });

    const end = Date.now();
    console.log(`[백엔드 fetch 왕복 시간] ${end - start}ms`);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    // console.log(result.data);

    return result.data;
  } catch (error) {
    console.error("[공명자 상세 조회 실패]", error);

    throw error;
  }
}

export async function getResonatorSetting(
  userResonatorId: string,
): Promise<ResonatorSettingResponse> {
  try {
    const start = Date.now();

    const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}/setting`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const end = Date.now();
    console.log(`[백엔드 fetch 왕복 시간] ${end - start}ms`);

    const result = await response.json();

    // console.log(result.data);

    return result.data;
  } catch (error) {
    console.error("[공명자 설정 조회 실패]", error);

    throw error;
  }
}

export async function createResonator(file: File): Promise<ApiResponse<CreateResonatorResponse>> {
  const formData = new FormData();
  formData.append("resonatorProfile", file);

  const response = await fetch(`${API_URL}/api/resonators`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const result = await response.json();

  // console.log(result);

  return result;
}

export async function updateResonator(
  userResonatorId: string,
  body: UpdateResonatorRequest,
): Promise<ApiResponse<void>> {
  const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}/setting`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const result = await response.json();

  // console.log(result);

  return result;
}

export async function deleteResonator(body: DeleteResonatorRequest): Promise<ApiResponse<void>> {
  const response = await fetch(`${API_URL}/api/resonators`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const result = await response.json();

  // console.log(result);

  return result;
}
