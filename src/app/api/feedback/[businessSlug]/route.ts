import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { businessSlug: string } }
) {
  const businessSlug = params.businessSlug;

  try {
    const serviceFeedback = await prisma.feedback.findMany({
      where: {
        businessSlug,
        type: "SERVICE",
      },
    });

    const orderFeedback = await prisma.feedback.findMany({
      where: {
        businessSlug,
        type: "ORDER",
      },
    });

    return Response.json({
      serviceFeedback,
      orderFeedback,
    });
  } catch (error) {
    console.error("Error get feedbacks:", error);
    return Response.json(error);
  }
}
