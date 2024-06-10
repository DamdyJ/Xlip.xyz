import prisma from "./prisma";

export async function incrementCount() {
  await prisma.linkCount.update({
    where: { id: 1 },
    data: { count: { increment: 1 } },
  });
}

export async function getCount() {
  const linkCount = await prisma.linkCount.findUnique({
    where: { id: 1 },
  });
  return linkCount?.count ?? 0;
}
