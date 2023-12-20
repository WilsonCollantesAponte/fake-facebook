// import DataBaseInteraction from "@/prisma";

import DataBaseInteraction from "../../prisma/index";

export async function POST(request) {
  const { email, password } = await request.json();

  const response = await DataBaseInteraction.user.create({
    data: {
      email,
      password,
    },
  });

  return Response.json(response);
}
