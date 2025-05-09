import { prisma } from "@/prisma/client";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import { Metadata } from "next";

export default async function Home() {
  // return <LatestIssues />;
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
        <LatestIssues />
    </Grid>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};
