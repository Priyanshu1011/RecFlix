// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { name } = req.body;
//     console.log("Received movie name:", movieName);
//     // Here you can process the movie name or save it to a DB
//     res.status(200).json({ message: "Name submitted successfully!" });
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

// http://localhost:3000/api/movies
export const POST = async (req, res) => {
  const { movieName } = await req.json();

  try {
    // const response = await fetch('http://localhost:8000/recommendations/');

    const response = await fetch("http://localhost:8000/recommendations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie_name: movieName }),
    });

    if (!response.ok) {
      // console.log("Name submitted successfully!");
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // <array of movie objects>
    res.status(200).json({ data });

    // return new Response(JSON.stringify(response), {status: 201});
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    res.status(500).json({ error: "Internal Server Error" });
    // return new Response("FAILED", { status: 500 });
  }
};
