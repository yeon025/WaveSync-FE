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

    console.log("status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("공명자 조회 실패:", error);

    throw error;
  }
}
