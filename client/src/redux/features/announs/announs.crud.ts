export async function getAnnoun() {
  try {
    return await fetch("/api/announ/getall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("rejected -", error);
  }
}
