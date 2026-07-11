const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getResonators(): Promise<ResonatorSummaryResponse[]> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL 환경변수가 설정되지 않았습니다.");
    }

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
    console.error("공명자 목록 조회 실패:", error);

    throw error;
  }
}

export async function getResonatorDetail(
  userResonatorId: number,
): Promise<ResonatorDetailResponse> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL 환경변수가 설정되지 않았습니다.");
    }

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
    console.error("공명자 상세 조회 실패:", error);

    throw error;
  }
}
