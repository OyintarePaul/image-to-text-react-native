export interface ImageToTextApiResponse {
  all_text: string,
  annotations: string[]
}

export async function convertImageToText(imageData: any): Promise<ImageToTextApiResponse> {
  const apiKey = process.env.EXPO_PUBLIC_IMAGE_TO_TEXT_API_KEY;
  if (!apiKey) throw new Error("Image to Text API key is missing")

  var headers = new Headers();
  headers.append("apikey", apiKey);

  const requestOptions: RequestInit = {
    method: 'POST',
    redirect: 'follow',
    headers,
    body: imageData
  };

  const response = await fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
  if (!response.ok) throw new Error("Something went wrong.")
  return response.json()
}