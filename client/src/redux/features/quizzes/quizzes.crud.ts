export async function getQuizzes() {
  try {
    return await fetch("/api/quiz/getall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("rejected - ", error);
  }
}
