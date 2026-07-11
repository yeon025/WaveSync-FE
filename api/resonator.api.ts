const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getResonators(): Promise<ResonatorSummaryResponse[]> {
  try {
    const response = await fetch(`${API_URL}/api/resonators`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("[공명자 목록 조회 실패]", error);

    throw error;
  }
}

export async function getResonatorDetail(
  userResonatorId: number,
): Promise<ResonatorDetailResponse> {
  try {
    const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    console.log(result.data);

    return result.data;
  } catch (error) {
    console.error("[공명자 상세 조회 실패]", error);

    throw error;
  }
}

export async function getResonatorSetting(
  userResonatorId: number,
): Promise<ResonatorSettingResponse> {
  try {
    const response = await fetch(`${API_URL}/api/resonators/${userResonatorId}/setting`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    console.log(result.data);

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

  console.log(result);

  return result;
}
